'use client'
import React from 'react';
import { useQuery } from '@apollo/client';
import followers from '@/../content/followers.json';
import { gql } from '@apollo/client';
import { Region, PokemonName } from '@/../types/pokemon.type';
import Image from "next/image";

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
            {data?.pokemon?.sprite && (
                <Image width={80} height={80} src={data.pokemon.sprite} alt={name}/>
            )}
        </div>
    );
};

function PokemonFollowers() {
    const regions = Object.keys(followersTyped);

    return (
        <div className="mt-12">
            <h2 className="text-3xl text-center font-bold">Available pokemon followers</h2>
            <div>
                {regions.map((region, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="mb-2 text-4xl">{region}</h3>
                        <div className="grid grid-cols-8 gap-4">
                            {followersTyped[region].map((pokemon: PokemonName, pokemonIndex: number) => (
                                <Pokemon key={pokemonIndex} name={pokemon.name} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonFollowers;
