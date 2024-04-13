'use client'
import { useQuery, gql } from '@apollo/client';
import PokemonCard from './PokemonCard';
import { Pokemon } from '@/../types/pokemon.type';
import PikaLoader from "@/components/utils/PikaLoader";
import { FixedSizeGrid as Grid } from 'react-window';


// GraphQL query
const GET_ALL_POKEMON = gql`
    query MyQuery {
        allPokemon {
            name
            sprite
            stats {
                Atk
                BST
                Def
                HP
                SpA
                SpD
                Spe
            }
            types
        }
    }
`;
type PokedexGridProps = {
    search: string;
    filterType: string;
};

export default function PokedexGrid({ search, filterType }: PokedexGridProps) {
    // execute request
    const { loading, error, data } = useQuery(GET_ALL_POKEMON);

    // error message
    if (error) return <p>Error: {error.message}</p>;

    // Loader
    if (loading) return <div className="flex h-full justify-center items-center"><PikaLoader/></div>;

    // extract data
    const pokemons: Pokemon[] = data.allPokemon;

    // filter data
    const filteredPokemons = pokemons.filter(pokemon => {
        const lowerCaseFilterType = filterType.toLowerCase();
        const lowerCasePokemonTypes = pokemon.types.map(type => type.toLowerCase());
        return pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
            (filterType ? lowerCasePokemonTypes.includes(lowerCaseFilterType) : true);
    });

    return (
        <div className="grid grid-cols-4 gap-4 gap-y-20">
            {filteredPokemons.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon}/>
            ))}
        </div>
    );
}