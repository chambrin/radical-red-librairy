'use client'
import { useEffect, useState } from 'react';
import { Pokemon } from '@/../types/pokemon.type';
import {keys, get} from 'idb-keyval';
import typeData from '@/../data/typeChart.json';
import {BadgeTypes} from "@/components/ui/BadgeTypes";

export default function TeamWeakness() {
    const [team, setTeam] = useState<Pokemon[]>([]);
    const [strengths, setStrengths] = useState<string[]>([]);
    const [weaknesses, setWeaknesses] = useState<string[]>([]);

    useEffect(() => {
        const fetchTeam = async () => {
            const allKeys = await keys();
            const allPokemon = await Promise.all(allKeys.map(key => get(key)));
            setTeam(allPokemon);
        };

        fetchTeam();
    }, []);

    // Calculate the strengths and weaknesses of the team
    useEffect(() => {
        const calculateStrengthsAndWeaknesses = () => {
            let teamStrengths: string[] = [];
            let teamWeaknesses: string[] = [];

            team.forEach(pokemon => {
                pokemon.types.forEach(type => {
                    const typeInfo = typeData.find(t => t.name === type);
                    if (typeInfo) {
                        teamStrengths = [...teamStrengths, ...typeInfo.strengths];
                        teamWeaknesses = [...teamWeaknesses, ...typeInfo.weaknesses];
                    }
                });
            });

            // Filter out the strengths from the weaknesses
            const actualWeaknesses = teamWeaknesses.filter(weakness => !teamStrengths.includes(weakness));

            setStrengths(Array.from(new Set(teamStrengths)));
            setWeaknesses(Array.from(new Set(actualWeaknesses)));
        };

        calculateStrengthsAndWeaknesses();
    }, [team]);


    return (
        <div className="grid grid-cols-2 my-24 gap-12">
            <div>
                <h2 className="text-2xl font-semibold">Team Strength</h2>
                <div className="grid grid-cols-3 gap-2">
                    {strengths && strengths.map((strength, index) => (
                        <BadgeTypes key={index} type={strength} onFilterType={() => {
                        }}/>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">Team Weakness</h2>
                <div className="grid grid-cols-3 gap-2">
                    {weaknesses && weaknesses.map((weakness, index) => (
                        <BadgeTypes key={index} type={weakness} onFilterType={() => {
                        }}/>
                    ))}
                </div>
            </div>
        </div>
    );
}