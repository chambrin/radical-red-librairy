// src/components/ui/BadgeTypes.tsx
import Image from "next/image";

type BadgeTypesProps = {
    type: string;
    onFilterType: (type: string) => void;
};

export const BadgeTypes: React.FC<BadgeTypesProps> = ({ type, onFilterType }) => {
    const lowerCaseType = type.toLowerCase();
    return (
        <div onClick={() => onFilterType(lowerCaseType)}
             className={`flex scale-100 cursor-pointer hover:scale-105 items-center text-white mr-1 p-2 rounded-md bg-${lowerCaseType}`}>
            <Image width={15} height={15} src={`/types-icons/${lowerCaseType}.svg`} alt={lowerCaseType}/>
            <span className="ml-2">{lowerCaseType}</span>
        </div>
    );
};