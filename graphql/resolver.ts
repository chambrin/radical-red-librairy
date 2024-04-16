// Import JSON
import data from '../data/pokemon_data.json';

// résolveurs
const resolvers = {
    Query: {
        pokemon: (_: unknown, { name }: { name: string }): any | undefined => {
            const pokemon = data.find((pokemon: any) => pokemon.name === name && pokemon.locations && pokemon.locations.length > 0);
            return pokemon;
        },
        allPokemon: (): any[] => {
            return data.filter(pokemon => pokemon.locations && pokemon.locations.length > 0);
        },
    },
};

export default resolvers;