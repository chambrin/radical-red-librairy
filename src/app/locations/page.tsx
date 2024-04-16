'use client'
import { useQuery, gql } from '@apollo/client';
import {Pokemon, Location} from "../../../types/pokemon.type";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import LocationSelector from "@/components/page/locations/FilterLocations";
import {useState} from "react";


const GET_POKEMONS_WITH_LOCATIONS = gql`
    query GetPokemonsWithLocations {
        allPokemon {
            sprite
            name
            locations {
                location
                appearancePercentage
            }
        }
    }
`;

export default function PokemonLocations() {
    const { data, loading, error } = useQuery(GET_POKEMONS_WITH_LOCATIONS);
    // Define selectedLocation and a function to update it
    const [selectedLocation, setSelectedLocation] = useState('');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const pokemonsWithLocations = data.allPokemon.filter((pokemon: Pokemon) => pokemon.locations && pokemon.locations.length > 0);

// Create an object to group the Pokémon by location
    const pokemonsByLocation: { [key: string]: Pokemon[] } = {};

// Iterate over each Pokémon
    pokemonsWithLocations.forEach((pokemon: Pokemon) => {
        // Iterate over each location of the Pokémon
        pokemon.locations.forEach((location: Location) => {
            // If the location is not yet in the object, add it
            if (!pokemonsByLocation[location.location]) {
                pokemonsByLocation[location.location] = [];
            }

            // Add the Pokémon to the corresponding location
            pokemonsByLocation[location.location].push(pokemon);
        });
    });
    const locationKeys = Object.keys(pokemonsByLocation).sort((a, b) => a === selectedLocation ? -1 : b === selectedLocation ? 1 : 0);

    const handleLocationChange = (location: string) => {
        setSelectedLocation(location);
    };

    // Get the location names from the pokemonsByLocation object
    const locations = Object.keys(pokemonsByLocation);

    return (
        <div>
            <LocationSelector locations={locations} onLocationChange={handleLocationChange} />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-4">
                {locationKeys.map((location, index) => (
                    <Card key={index}>
                        <CardHeader className="pb-0">
                            <CardTitle>{location}</CardTitle>
                            <CardDescription>Wild encounters on a sunny day.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="divide-y divide-gray-200 dark:divide-gray-800">
                                {pokemonsByLocation[location]
                                    .sort((a: Pokemon, b: Pokemon) => {
                                        const locationA = a.locations.find((loc: Location) => loc.location === location);
                                        const locationB = b.locations.find((loc: Location) => loc.location === location);
                                        return parseFloat(locationB?.appearancePercentage || "0") - parseFloat(locationA?.appearancePercentage || "0");
                                    })
                                    .map((pokemon, pokemonIndex) => {
                                        // Find the corresponding location object in the pokemon.locations array
                                        const pokemonLocation = pokemon.locations.find((loc: Location) => loc.location === location);

                                        return (
                                            <div key={pokemonIndex} className="grid grid-cols-2 py-1">
                                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                                                    <img src={pokemon.sprite} alt={pokemon.name}/>
                                                    {pokemon.name}
                                                </dt>
                                                <dd className="flex items-center justify-end text-sm font-medium">{pokemonLocation?.appearancePercentage}</dd>
                                            </div>
                                        );
                                    })}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}