import TeamMember from './TeamMember';
import TeamPowerstats from './TeamPowerstats';

export default function Team({team, toDelete}) {

    return (
        <div className="justify-content-center">
            <h1>My Team: </h1>
            {team.length === 0? <div className="alert alert-secondary" role="alert">You don't have any member in your team.</div>: <TeamPowerstats team={team}/>}
            {team.map((teamMember)=>{ return <TeamMember key={teamMember.id} teamMember={teamMember} toDelete={toDelete}/>})}
        </div>
    )
}
