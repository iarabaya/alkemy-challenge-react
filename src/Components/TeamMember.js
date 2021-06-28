import React from 'react'

export default function TeamMember({teamMember, toDelete}) {

    const handleDeleteClick = () =>{
        toDelete(teamMember.id);
    }

    const showMemberCard = (teamMember) =>{
        if(teamMember){
            if(teamMember.biography.alignment === 'good'){
                return goodMember(teamMember);
             }else{
                 return badMember(teamMember);
             }
        }
    }

    const goodMember = (teamMember) =>{
        return (<div className={"card text-white bg-success mb-3"} style={{maxWidth:'18rem'}}>
                    <div className="card-header">Alias: {teamMember.biography.aliases[0]}</div>
                    <div className="card-body">
                        <h5 className="card-title">Name: {teamMember.name}</h5>
                        <p className="card-text">
                            {`Weight: ${teamMember.appearance.weight[1]}, 
                            Height: ${teamMember.appearance.height[1]}, 
                            Eye color: ${teamMember.appearance['eye-color']}, 
                            Hair color: ${teamMember.appearance['hair-color']},
                            Ocupation: ${teamMember.work.occupation} `}
                        </p>
                        <div className="btn-group" role="group" aria-label="options for member">
                            <button type="button" className="btn btn-warning" onClick={handleDeleteClick}>Delete from team</button>
                            <button type="button" className="btn btn-info">View details</button>
                        </div>
                    </div>
                </div>);
    }
    
    const badMember = () =>{
        return(<div className="card text-white bg-danger mb-3" style={{maxWidth:'18rem'}}>
                    <div className="card-header">Alias: {teamMember.biography.aliases[0]}</div>
                    <div className="card-body">
                        <h5 className="card-title">Name: {teamMember.name}</h5>
                        <p className="card-text">
                        {`Weight: ${teamMember.appearance.weight[1]}, 
                            Height: ${teamMember.appearance.height[1]}, 
                            Eye color: ${teamMember.appearance['eye-color']}, 
                            Hair color: ${teamMember.appearance['hair-color']},
                            Ocupation: ${teamMember.work.occupation} `}
                        </p>
                        <div className="btn-group" role="group" aria-label="options for member">
                            <button type="button" className="btn btn-warning" onClick={handleDeleteClick}>Delete from team</button>
                            <button type="button" className="btn btn-info">View details</button>
                        </div>
                    </div>
                </div>);
    }

    return (
        <div>
            {showMemberCard(teamMember)}
        </div>
    )
}
