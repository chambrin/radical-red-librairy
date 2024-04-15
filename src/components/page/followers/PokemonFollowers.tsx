'use client'
import React from 'react';
import { useQuery } from '@apollo/client';
import followers from '@/../content/followers.json';
import { gql } from '@apollo/client';
import { Region, PokemonName } from '@/../types/pokemon.type';

const GET_POKEMON_SPRITE = gql`
    query GetPokemonSprite($name: String!) {
        pokemon(name: $name) {
            sprite
        }
    }
`;

const followersTyped = followers as Region;

const Pokemon = ({ name }: { name: string }) => {
    const { data, loading, error } = useQuery(GET_POKEMON_SPRITE, { variables: { name } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex items-center">
            <p>{name}</p>
            {data?.pokemon?.sprite && (
                <img src={data.pokemon.sprite} alt={name} />
            )}
        </div>
    );
};

function PokemonFollowers() {
    const regions = Object.keys(followersTyped);

    return (
        <div className="mt-12">
            <h2 className="text-xl font-bold">Régions</h2>
            <div>
                {regions.map((region, index) => (
                    <div key={index}>
                        <h3 className="mb-2">{region}</h3>
                        {followersTyped[region].map((pokemon: PokemonName, pokemonIndex: number) => (
                            <Pokemon key={pokemonIndex} name={pokemon.name} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonFollowers;
