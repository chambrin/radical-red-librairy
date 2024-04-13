import {Input} from "@/components/ui/input";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";

type FilterProps = {
    onSearch: (value: string) => void;
};

export default function Filter({ onSearch }: FilterProps) {
    const pokemonTypes = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];

    return (
        <div className="my-20">
            <div className="my-12">
            <Input
                type="text"
                placeholder="Search Pokemon"
                onChange={(e) => onSearch(e.target.value)}
            />
            </div>
            <div className="grid grid-cols-3 gap-2">
                {pokemonTypes.map((type, index) => (
                    <div key={index} className={`flex scale-100 cursor-pointer hover:scale-105 items-center text-white mr-1 p-2 rounded-md bg-${type}`}>
                        <Image width={15} height={15} src={`/types-icons/${type}.svg`} alt={type}/>
                        <span className="ml-2">{type}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}