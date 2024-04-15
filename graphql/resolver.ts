// Import JSON
import data from '../data/pokemon_data.json';

// résolveurs
const resolvers = {
    Query: {
        pokemon: (_: unknown, { name }: { name: string }): any | undefined => {
            const pokemon = data.find((pokemon: any) => pokemon.name === name);
            return pokemon;
        },
        allPokemon: (): any[] => {
            return data;
        },

    },
};

export default resolvers;