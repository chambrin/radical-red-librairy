import { useQuery, gql } from '@apollo/client';
import PokemonCard from './PokemonCard';
import { Pokemon } from '@/../types/pokemon.type';
import PikaLoader from "@/components/utils/PikaLoader";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useState} from "react";

// GraphQL query
const GET_ALL_POKEMON = gql`
    query MyQuery {
        allPokemon {
            name
            sprite
            stats {
                Atk
                BST
                Def
                HP
                SpA
                SpD
                Spe
            }
            types
        }
    }
`;

type PokedexGridProps = {
    search: string;
    filterType: string;
};

export default function PokedexGrid({ search, filterType }: PokedexGridProps) {
    // state for infinite scroll
    const [count, setCount] = useState(50);

    // execute request
    const { loading, error, data } = useQuery(GET_ALL_POKEMON, {
        onCompleted: (data) => {
            localStorage.setItem('allPokemon', JSON.stringify(data.allPokemon));
        }
    });

    // error message
    if (error) return <p>Error: {error.message}</p>;

    // Loader
    if (loading) return <div className="flex h-full justify-center items-center"><PikaLoader/></div>;

    // extract data
    let pokemons: Pokemon[] = data?.allPokemon || JSON.parse(localStorage.getItem('allPokemon') || '[]');

    // filter data
    const filteredPokemons = pokemons.filter(pokemon => {
        const lowerCaseFilterType = filterType.toLowerCase();
        const lowerCasePokemonTypes = pokemon.types.map(type => type.toLowerCase());
        return pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
            (filterType ? lowerCasePokemonTypes.includes(lowerCaseFilterType) : true);
    });

    return (
        <InfiniteScroll
            dataLength={count}
            next={() => setCount(count + 50)}
            hasMore={count < filteredPokemons.length}
            loader={<PikaLoader/>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
            style={{ overflow: 'visible' }}
        >
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-20">
                {filteredPokemons.slice(0, count).map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon}/>
                ))}
            </div>
        </InfiniteScroll>
    );
}