import { Pokemon } from '@/../types/pokemon.type';
import Image from "next/image";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image width={100} height={100} src={pokemon.sprite} alt={pokemon.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{pokemon.name}</h2>
                <p className="text-sm text-gray-600">Types: {pokemon.types.join(', ')}</p>
                <p className="text-sm text-gray-600">Primary Ability: {pokemon.abilities.primary}</p>
                <h3 className="text-lg font-semibold text-gray-800">Stats:</h3>
                <p className="text-sm text-gray-600">HP: {pokemon.stats.HP}</p>
                <p className="text-sm text-gray-600">Atk: {pokemon.stats.Atk}</p>
                <p className="text-sm text-gray-600">Def: {pokemon.stats.Def}</p>
                <p className="text-sm text-gray-600">SpA: {pokemon.stats.SpA}</p>
                <p className="text-sm text-gray-600">SpD: {pokemon.stats.SpD}</p>
                <p className="text-sm text-gray-600">Spe: {pokemon.stats.Spe}</p>
                <p className="text-sm text-gray-600">BST: {pokemon.stats.BST}</p>
            </div>
        </div>
    );
}