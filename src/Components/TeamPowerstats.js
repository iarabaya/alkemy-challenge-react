import React, {useState, useEffect} from 'react'

export default function TeamPowerstats({team}) {
const [allStats, setAllStats] = useState([]);
const [teamType, setTeamType] = useState();

useEffect(()=>{

    const sumaStat = (stat) => {
        let statArray = team.map( member => member.powerstats[stat]);
        statArray = statArray.map( el => { return el !== "null"? parseInt(el) :  el = 0} );
        const suma = statArray.reduce((acc,el) => { return acc + el });
        return suma;
    }

    const statistics = () =>{
        console.log('team changed');
       let int = sumaStat('intelligence');
       let str = sumaStat('strength');
       let spd = sumaStat('speed');
       let cbt = sumaStat('combat');
       let pwr = sumaStat('power');

       const totalArr = [int, str, spd, cbt, pwr]

       let maxStat = totalArr.reduce((acc,el) => acc>el? acc: el );
       
       const totalObj = {intelligence:int , strength:str ,speed:spd ,combat:cbt , power:pwr };
       const bestStat = Object.keys(totalObj).find(key => totalObj[key] === maxStat);
       setAllStats(totalObj);
       setTeamType(bestStat);
    }

    try {
        statistics();
    } catch (error) {
        alert(error.message);
    }

   
},[team])

    return (
        <div className=" bd-highlight">
            <h4 className="text-muted">Team Powerstats Table</h4>
            <div className="alert alert-secondary" role="alert">{teamType? teamType.toUpperCase() : 'no definido'} Team Type</div>
            <table className="table bg-light border">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Int</th>
                    <th scope="col">Str</th>
                    <th scope="col">Spd</th>
                    <th scope="col">Cbt</th>
                    <th scope="col">Pwr</th>
                    </tr>
                </thead>
                    <tbody>
                        {team.map((member)=>{ 
                            return <tr key={member.id}>
                                    <th scope="row">{member.name}</th>
                                    <td>{member.powerstats.intelligence === "null"? 0 : member.powerstats.intelligence }</td>
                                    <td>{member.powerstats.strength === "null"? 0 : member.powerstats.strength}</td>
                                    <td>{member.powerstats.speed === "null"? 0 : member.powerstats.speed}</td>
                                    <td>{member.powerstats.combat === "null"? 0 : member.powerstats.combat}</td>
                                    <td>{member.powerstats.power === "null"? 0 : member.powerstats.power}</td>
                                </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <td>{allStats.intelligence}</td>
                            <td>{allStats.strength}</td>
                            <td>{allStats.speed}</td>
                            <td>{allStats.combat}</td>
                            <td>{allStats.power}</td>
                        </tr>
                    </tfoot>
                </table>
        </div>
    )
}
