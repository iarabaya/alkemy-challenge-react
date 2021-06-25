import React from 'react'

export default function Hero({hero}) {
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={hero.image.url} className="card-img-top" alt={hero.name}/>
                <div className="card-body">
                    <h5 className="card-title">{hero.name}</h5>
                    <p className="card-text">Alignment: {hero.biography.alignment}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Intelligence:{hero.powerstats.intelligence},
                        Strength:{hero.powerstats.strength},
                        Speed:{hero.powerstats.speed}
                        </li>
                    <li className="list-group-item">
                        Durability:{hero.powerstats.durability},
                        Power:{hero.powerstats.power},
                        Combat: {hero.powerstats.combat}
                        </li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-primary">Add to Team</button>
                </div>
            </div>
        </div>
    )
}
