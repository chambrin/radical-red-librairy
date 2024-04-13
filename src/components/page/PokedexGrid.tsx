'use client'
import { useQuery, gql } from '@apollo/client';
import PokemonCard from './PokemonCard';
import { Pokemon } from '@/../types/pokemon.type';

// GraphQL query
const GET_ALL_POKEMON = gql`
    query MyQuery {
        allPokemon {
            abilities {
                primary
            }
            locations {
                appearancePercentage
                location
            }
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

export default function PokedexGrid() {
    // execute request
    const { loading, error, data } = useQuery(GET_ALL_POKEMON);

    // error message
    if (error) return <p>Error: {error.message}</p>;

    // Loader
    if (loading) return <p>Loading...</p>;

    // extract data
    const pokemons: Pokemon[] = data.allPokemon;

    return (
        <div className="grid grid-cols-4 gap-4 gap-y-20">
            {pokemons.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
    );
}