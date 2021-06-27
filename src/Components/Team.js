import TeamMember from './TeamMember';

export default function Team({team, toDelete}) {

    return (
        <div>
            <h1>My Team: </h1>
            {team.map((teamMember)=>{ return <TeamMember key={teamMember.id} teamMember={teamMember} toDelete={toDelete}/>})}
        </div>
    )
}

// const orderedHeroes = heroes.sort((a,b) => {return a.id - b.id});
// {orderedHeroes.map((hero) =><Hero key={hero.id} hero={hero}/> )}