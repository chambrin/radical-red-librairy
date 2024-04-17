'use client'
// team components, display pokemon team
import { useEffect, useState } from 'react';
import { Pokemon } from '@/../types/pokemon.type';
import Image from "next/image";
import {keys, get, del} from 'idb-keyval';
import {Squircle, X} from "lucide-react";

export default function Team() {
    const [team, setTeam] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchTeam = async () => {
            const allKeys = await keys();
            const allPokemon = await Promise.all(allKeys.map(key => get(key)));
            setTeam(allPokemon);
        };

        // Listen for the 'pokemonAdded' event and refresh the team when it's fired
        const handlePokemonAdded = () => {
            fetchTeam();
        };

        window.addEventListener('pokemonAdded', handlePokemonAdded);

        fetchTeam();

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('pokemonAdded', handlePokemonAdded);
        };
    }, []);

    // Function to remove pokemon from IndexedDB
    const removeFromTeam = async (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const pokemonName = event.currentTarget.getAttribute('alt') || '';
        try {
            await del(pokemonName);
            // Refetch the team to update the state
            const allKeys = await keys();
            const allPokemon = await Promise.all(allKeys.map(key => get(key)));
            setTeam(allPokemon);
        } catch (err) {
            console.error('Error removing pokemon from team:', err);
        }
    };
    // Create an array of size 6
    const slots = new Array(6).fill(null);

    return (
        <div className="flex items-center gap-1">
            {slots.map((slot, index) => (
                <div  key={index}>
                    {team[index] ? (
                        <>
                            <Image onClick={removeFromTeam} width={50} height={50} src={team[index].sprite} alt={team[index].name}/>
                        </>
                    ) : (
                        <Squircle className="mx-1" size={25} />
                    )}
                </div>
            ))}
        </div>
    );
}