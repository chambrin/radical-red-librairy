import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {RotateCcw} from "lucide-react";
import {BadgeTypes} from "@/components/ui/BadgeTypes";


type FilterProps = {
    onSearch: (value: string) => void;
    onFilterType: (type: string) => void;
};

export default function Filter({ onSearch, onFilterType }: FilterProps) {
    const pokemonTypes = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length >= 3 || value === '') {
            onSearch(value);
        }
    };

    return (
        <div className="my-20">
            <div className="my-12">
                <Input
                    type="text"
                    placeholder="Search Pokemon"
                    onChange={handleSearch}
                />
            </div>
            <div className="grid grid-cols-3 gap-2">
                {pokemonTypes.map((type, index) => (
                    <BadgeTypes key={index} type={type} onFilterType={onFilterType} />
                ))}
            </div>
            <Button variant="secondary" className="text-white mt-10" onClick={() => onFilterType('')}>
                <RotateCcw size={20} className="mr-2" />
                Clear Filter
            </Button>
        </div>
    );
}