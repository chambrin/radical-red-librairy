import React from "react";

export default function ContentFollowers() {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold mb-4">Followers</h1>
                <h2 className="text-xl font-bold">How to enable Follower Pokémon?</h2>
                <p>As soon as you enter the Viridian City Pokémon Center for the first time, a Tamer will walk up to you
                    and
                    tell you about a feature called Follower Pokémon. If you have any Pokémon capable of following you
                    in
                    your party, he’ll ask you whether you want that Pokémon to follow you or not.

                    The Pokémon that follows you is the first Pokémon in party order that’s present in the list shown
                    later
                    in this document. You can disable or re-enable Follower Pokémon by talking to the Tamer in the
                    Viridian
                    City Pokémon Center.

                    Once a Pokémon follows you, it’ll do so until it faints or you decide to disable Follower Pokémon.
                    This
                    feature might be a little glitchy, so make sure to disable and re-enable Follower Pokémon once in a
                    while to avoid encountering glitches, or if you feel something is wrong with them. Think of it as if
                    you
                    were saving your game!
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold">Your Follower Pokémon can jump ledges with you, enter buildings with
                    you, Surf with you… they follow you everywhere !</h2>
                <p>There are very few exceptions, those being some Postgame areas.</p>
                <p>By interacting with your Follower Pokémon, three things may happen:</p>
                <ul className="list-disc list-inside ">
                    <li className="mb-2">The text shown will hint at the Pokémon’s Happiness stat. This is an
                        alternative to the Stat
                        Scanner, if anything.
                    </li>
                    <li className="mb-2">If its Happiness points aren’t high, you’ll be able to feed your Pokémon an
                        Oran Berry, provided
                        you have at least one. Each Oran Berry you feed your Pokémon with will increase its Happiness
                        points by 60.
                    </li>
                    <li className="mb-2">Sometimes, your Follower Pokémon will find a Wishing Piece, or even a Big
                        Nugget, and give it to
                        you. This could be very practical if you run short of money, or need some additional Wishing
                        Pieces for whatever reason.
                    </li>
                </ul>
                <p>Depending on the Pokémon’s type, interacting with your Follower Pokémon in certain places will make
                    it find an item. There are four items that you can obtain that way, and they may only be obtained
                    once per save file:</p>
                <ul className="list-disc list-inside ">
                    <li className="mb-2">Rock/Ground/Steel Pokémon in Rock Tunnel &gt; Safety Goggles</li>
                    <li className="mb-2">Fire/Flying Pokémon in Celadon City’s Gym &gt; Red Card</li>
                    <li className="mb-2">Fighting Pokémon in Saffron City’s Dojo &gt; Protective Pads</li>
                    <li className="mb-2">Electric Pokémon in Power Plant &gt; Eject Button (Unobtainable in
                        Hardcore
                        Mode)</li>
                </ul>
                <p>If your Follower Pokémon is a Rotom or any of its forms, you can change its form in Oak’s Lab by
                    interacting with the big machine.</p>
                <p>Lastly, some NPCs will react to your Follower Pokémon and give you a reward if you show them a
                    specific Follower Pokémon. Here’s a list of the Pokémon you will need to show, to avoid
                    spoilers:</p>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Yamper (Vermilion City Fan Club)</li>
                    <li className="mb-2">Sharpedo (Route 12)</li>
                    <li className="mb-2">Swampert (Saffron City)</li>
                    <li className="mb-2">Lucario (Celadon City)</li>
                </ul>
            </div>
        </div>
    )
}