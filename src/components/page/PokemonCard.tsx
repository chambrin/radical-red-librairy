import { Pokemon } from '@/../types/pokemon.type';
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress"
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge"

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    const distortAnimation = {
        scaleX: [1, 1.05, 1],
        scaleY: [1, 0.95, 1],
        transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse' as 'reverse',
        },
    };
    return (
        <Card>
            <div className="flex justify-between items-center relative overflow-visible">
                <h3 className="p-4 overflow-hidden truncate">
                    {pokemon.name}
                </h3>
                <div className="absolute right-0 top-0 -translate-y-1/2">
                    <motion.div animate={distortAnimation}>
                        <Image width={100} height={100} src={pokemon.sprite} alt={pokemon.name}
                               className="object-cover isolation-isolate"/>
                    </motion.div>
                </div>
            </div>
            <Separator/>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800"></h2>
                {pokemon.types.map((type, index) => (
                    <Badge key={index} variant="outline" className={`mr-1 bg-${type.toLowerCase()}`}>{type}</Badge>
                ))}
                <p className="text-sm text-gray-600 dark:text-white">Ability: {pokemon.abilities.primary}</p>
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