import React from 'react';
import ContentFollowers from "@/components/page/followers/ContentFollowers";
import PokemonFollowers from "@/components/page/followers/PokemonFollowers";


export default function FollowersPage() {
    return (
        <main className="p-4 mt-12">
         <ContentFollowers />
          <PokemonFollowers />
        </main>
    );
}