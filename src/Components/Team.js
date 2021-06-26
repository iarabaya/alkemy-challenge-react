import React, { useState } from 'react';
import TeamMember from './TeamMember';

export default function Team({team}) {

    return (
        <div>
            <h1>My Team: </h1>
            {team.map((teamMember)=>{ return <TeamMember key={teamMember.id} teamMember={teamMember}/>})}
        </div>
    )
}

// const orderedHeroes = heroes.sort((a,b) => {return a.id - b.id});
// {orderedHeroes.map((hero) =><Hero key={hero.id} hero={hero}/> )}