import React from 'react'

export default function Hero({hero, addToTeam}) {
    return (
            <div className="card text-center m-3" style={{width: '18rem'}}>
                <img src={hero.image.url} className="card-img-top" alt={hero.name}/>
                <div className="card-body">
                    <h5 className="card-title">{hero.name}</h5>
                    <p className="card-subtitle mb-2 text-muted">Alignment: {hero.biography.alignment.toUpperCase()}</p>
                </div>
                <div>
                    
                </div>
                
                <ul className="list-group list-group-flush">
                    <li><h5>Powerstats:</h5></li>
                    <li className="list-group-item">
                        <span className="badge rounded-pill bg-primary">Intelligence:{hero.powerstats.intelligence}</span>
                        <span className="badge rounded-pill bg-success">Strength:{hero.powerstats.strength}</span>
                        <span className="badge rounded-pill bg-info">Speed:{hero.powerstats.speed}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="badge rounded-pill bg-info">Durability:{hero.powerstats.durability}</span>
                            <span className="badge rounded-pill bg-danger">Combat: {hero.powerstats.combat}</span>
                            <span className="badge rounded-pill bg-warning">Power:{hero.powerstats.power}</span>
                        </li>
                </ul>
                <div className="card-footer">
                    <div className="btn-group" role="group" aria-label="options for member">
                        <button type="button" className="btn btn-primary" onClick={addToTeam}>Add to Team</button>
                        <button type="button" className="btn btn-info">View details</button>
                    </div>
                </div>
            </div>
    )
}
