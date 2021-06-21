import React from 'react'

export default function Hero({hero}) {
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={hero.image.url} className="card-img-top" alt={hero.name}/>
                <div className="card-body">
                    <h5 className="card-title">{hero.name}</h5>
                    <p className="card-text">algo del superheroe</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-primary">Añadir</button>
                </div>
            </div>
        </div>
    )
}
/*

*/ 