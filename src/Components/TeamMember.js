import React from 'react'

export default function TeamMember({teamMember}) {
    return (
        <div>
            {teamMember.biography.alignment === 'good'? 
            <div className="card text-white bg-success mb-3" style={{maxWidth:'18rem'}}>
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
                    <input className="btn btn-warning" type="button" value="Delete from team"/>
                </div>
            </div> : 
            <div className="card text-white bg-danger mb-3" style={{maxWidth:'18rem'}}>
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
                    <input className="btn btn-warning" type="button" value="Delete from team"/>
                </div>
            </div>}
        </div>
    )
}
