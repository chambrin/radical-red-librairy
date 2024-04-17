'use client'
import typeData from '@/../data/typeChart.json';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useEffect, useState} from "react";
import {Pokemon} from "../../../../types/pokemon.type";
import {get, keys} from "idb-keyval";
import Image from 'next/image';

const types = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];

function getTypeEffectiveness(attackingType: string, defendingType: string) {
    const typeInfo = typeData.find(type => type.name === attackingType);
    if (typeInfo?.strengths.includes(defendingType)) {
        return '2x';
    } else if (typeInfo?.weaknesses.includes(defendingType)) {
        return '0.5x';
    } else if (typeInfo?.immunes.includes(defendingType)) {
        return '0';
    } else {
        return '1x';
    }
}

export default function TypeChart() {
    const [team, setTeam] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchTeam = async () => {
            const allKeys = await keys();
            const allPokemon = await Promise.all(allKeys.map(key => get(key)));
            setTeam(allPokemon);
        };

        fetchTeam();
    }, []);


    return (
        <Table>
            <TableHeader >
                <TableRow>
                    <TableHead  />
                    {types.map(type => {
                        const pokemonWithType = team.find(pokemon => pokemon.types.includes(type));
                        return (
                            <TableHead key={type}>
                                <div className="flex flex-col items-center justify-end h-full">
                                    {team.filter(pokemon => pokemon.types.includes(type)).map(pokemon => (
                                        <Image key={pokemon.name} width={50} height={50} src={pokemon.sprite} alt={pokemon.name}/>
                                    ))}
                                    <span>{type}</span>
                                </div>
                            </TableHead>
                        );
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {types.map(attackingType => {
                    const pokemonWithTypes = team.filter(pokemon => pokemon.types.includes(attackingType));
                    return (
                        <TableRow key={attackingType}>
                            <TableCell className="font-medium">
                                <div className="flex items-center mr-32">
                                    <span>{attackingType}</span>
                                    {pokemonWithTypes.map(pokemon => (
                                        <Image key={pokemon.name} width={50} height={50} src={pokemon.sprite} alt={pokemon.name}/>
                                    ))}
                                </div>
                            </TableCell>
                            {types.map(defendingType => {
                                const effectiveness = getTypeEffectiveness(attackingType, defendingType);
                                return (
                                    <TableCell key={defendingType}>
                            <span className={effectiveness === '2x' ? 'text-red-500' : ''}>
                                {effectiveness}
                            </span>
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}