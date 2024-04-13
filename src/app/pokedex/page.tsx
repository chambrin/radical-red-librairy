'use client'
import PokedexGrid from "@/components/page/PokedexGrid";
import Filter from "@/components/page/Filter";
import {useState} from "react";

export default function Pokedex() {
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState('');

    return (
        <>
            <Filter onSearch={setSearch} onFilterType={setFilterType} />
            <PokedexGrid search={search} filterType={filterType} />
        </>
    );
}