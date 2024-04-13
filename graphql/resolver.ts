// Import JSON
import data from '../data/pokemon_data.json';

// résolveurs
const resolvers = {
    Query: {
        pokemon: (_: unknown, { name }: { name: string }): any | undefined => {
            // Search pokemon by name
            const pokemon = data.find((pokemon: any) => pokemon.name === name);

            // Return pokemon
            return pokemon;
        },
        allPokemon: (): any[] => {
            // return all pokemon
            return data;
        },
    },
};

export default resolvers;