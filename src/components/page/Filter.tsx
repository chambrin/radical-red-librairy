type FilterProps = {
    onSearch: (value: string) => void;
};

export default function Filter({ onSearch }: FilterProps) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search Pokemon"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}