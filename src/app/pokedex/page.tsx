'use client'
import PokedexGrid from "@/components/page/PokedexGrid";
import Filter from "@/components/page/Filter";
import {useState} from "react";

export default function Pokedex() {
    const [search, setSearch] = useState('');

    return (
        <>
            <Filter onSearch={setSearch} />
            <PokedexGrid search={search} />
        </>
    );
}