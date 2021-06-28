import TeamMember from './TeamMember';
import TeamPowerstats from './TeamPowerstats';

export default function Team({team, toDelete}) {

    return (
        <div className="ms-3">
            <h1>My Team: </h1>
            {team.length === 0? <div className="alert alert-secondary" role="alert">You don't have any member in your team.</div>: <TeamPowerstats team={team}/>}
            {team.map((teamMember)=>{ return <TeamMember key={teamMember.id} teamMember={teamMember} toDelete={toDelete}/>})}
        </div>
    )
}

// const orderedHeroes = heroes.sort((a,b) => {return a.id - b.id});
// {orderedHeroes.map((hero) =><Hero key={hero.id} hero={hero}/> )}