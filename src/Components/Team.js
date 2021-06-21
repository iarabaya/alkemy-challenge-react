import React, { useState } from 'react';
import Hero from './Hero';
import TeamMember from './TeamMember';

export default function Team({heroes}) {
   // const [team, setTeam] = useState([]);
    const orderedHeroes = heroes.sort((a,b) => {return a.id - b.id});

    const selectedHero = () =>{}

    return (
        <div>
            Para elegir: 
            {orderedHeroes.map((hero) =><Hero key={hero.id} hero={hero}/> )}
            
        </div>
    )
}
