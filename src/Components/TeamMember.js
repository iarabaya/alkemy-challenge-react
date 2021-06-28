import React from 'react';
import DetailsModal from './DetailsModal';

export default function TeamMember({teamMember, toDelete}) {

    const handleDeleteClick = () =>{
        toDelete(teamMember.id);
    }

    const showMemberCard = (teamMember) =>{
        if(teamMember){
            let color;
            if(teamMember.biography.alignment === 'good'){
                color = "card text-white bg-success mb-3";
                return memberCard(teamMember, color);
             }else{
                 color = "card text-white bg-danger mb-3";
                 return memberCard(teamMember,color);
             }
        }
    }

    const memberCard = (teamMember, color) =>{
        return (<div className={color} style={{maxWidth:'18rem'}}>
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
                            <DetailsModal/>
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
