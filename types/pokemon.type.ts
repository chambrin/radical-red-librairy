// pokemon.type.ts
export interface Location {
    location: string;
    appearancePercentage: string;
}

export interface Abilities {
    primary: string;
}

export interface Stats {
    HP: number;
    Atk: number;
    Def: number;
    SpA: number;
    SpD: number;
    Spe: number;
    BST: number;
}

export interface Pokemon {
    name: string;
    sprite: string;
    types: string[];
    abilities: Abilities;
    stats: Stats;
    locations: Location[];
    image: string;
    number: number;
}

export type PokemonName = {
    name: string;
};

export type Region = {
    [key: string]: PokemonName[];
};