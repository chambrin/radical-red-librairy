import { Pokemon } from '@/../types/pokemon.type';
import Image from "next/image";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress"

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <Card>
            <div className="flex justify-between items-center relative overflow-visible">
                <h3 className="p-4 overflow-hidden truncate">
                    {pokemon.name}
                </h3>
                <div className="absolute right-0 top-0 -translate-y-1/2">
                    <Image width={100} height={100} src={pokemon.sprite} alt={pokemon.name}
                           className="object-cover isolation-isolate"/>
                </div>
            </div>
            <Separator/>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800"></h2>
                <p className="text-sm text-gray-600">Types: {pokemon.types.join(', ')}</p>
                <p className="text-sm text-gray-600">Primary Ability: {pokemon.abilities.primary}</p>
                <div className="mt-4">
                    <div className="grid grid-cols-2 ">
                        <p className="text-xs">HP: {pokemon.stats.HP}</p>
                        <Progress value={pokemon.stats.HP} />
                        <p className="text-xs">Atk: {pokemon.stats.Atk}</p>
                        <Progress value={pokemon.stats.Atk} />
                        <p className="text-xs">Def: {pokemon.stats.Def}</p>
                        <Progress value={pokemon.stats.Def} />
                        <p className="text-xs">SpA: {pokemon.stats.SpA}</p>
                        <Progress value={pokemon.stats.SpA} />
                        <p className="text-xs">SpD: {pokemon.stats.SpD}</p>
                        <Progress value={pokemon.stats.SpD} />
                        <p className="text-xs">Spe: {pokemon.stats.Spe}</p>
                        <Progress value={pokemon.stats.Spe} />
                        <p className="text-xs">BST: {pokemon.stats.BST}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}