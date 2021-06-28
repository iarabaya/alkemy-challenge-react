import React, { useState,useEffect } from 'react';
import Team from '../components/Team';
import axios from 'axios';
import heroesjson from '../data/heroesIds.json';
import SearchForm from '../components/SearchForm';
import Hero from '../components/Hero';


export default function Home({logIn}) {
    const [heroesIds, setHeroesIds] = useState([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState();
    const [hero, setHero] = useState();
    const [team, setTeam] = useState([]);

    useEffect(()=>{
        setHeroesIds(heroesjson);
      },[heroesIds]);

    useEffect(()=>{
        if(selectedCharacterId){
            getHero(selectedCharacterId);
        }
    },[selectedCharacterId])

    const getHero = async (id) =>{
    let hero;
        try {
            const response = await axios.get(`https://superheroapi.com/api.php/10223708144224688/${id}`);
            hero = await response;
            setHero(hero.data);
            return hero;
        } catch (error) {
            console.log(error);
        }
        return hero;
    }

    const getSelectedCharacter = (characterId) => {
        setSelectedCharacterId(characterId);
    };

    const addToTeam = () =>{
        try {
                repeatedHero();
                typeTeamLimit();

                setHero({...hero, team:true});
                setTeam((prevHeroes) => [...prevHeroes, hero]);
              
        } catch (error) {
            alert(error.message);
        }
        
    }

    const repeatedHero = () =>{
        if(team.length !== 0){
            let repeated = team.some( member => member.id === hero.id);
            if(repeated){
                throw new Error ("You can't have repeated heroes on your team");
            }
        }
    }

    const typeTeamLimit = () => {
        if(team.length === 6){
            throw new Error ("You've reached the maximum members allowed in a team");
        }else{
            let goodMembers = team.filter(member => member.biography.alignment === 'good');
            let badMembers = team.filter(member => member.biography.alignment === 'bad');
            if(goodMembers.length > 2 && hero.biography.alignment === 'good'){
                throw new Error ("You can only have 3 good members on your team, choose some bad ones.")
            }
            if(badMembers.length > 2 && hero.biography.alignment === 'bad'){
                throw new Error ("You can only have 3 bad members on your team, choose some good ones.");
            }
        }
    }

    const deleteFromTeam = (id) =>{
        let newTeam = [...team]
        newTeam = team.filter((member) => member.id !== id);
        setTeam(newTeam);
    }

    const toDelete = (id) =>{
        alert('you deleted member : ' + id);
        deleteFromTeam(id);
    }

    return (
        <div>
            <h1 className="text-center">Hello {logIn.email}!</h1>
            <div>
                <SearchForm heroesIds={heroesIds} getSelectedCharacter={getSelectedCharacter} getHero={getHero}/>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h1>Search:</h1>
                    {hero? <Hero hero={hero} addToTeam={addToTeam}/> : <div className="alert alert-secondary" role="alert">You haven't looked for any hero yet.</div>}  
                </div>
                <div className="col-sm-6">
                    <Team team={team} toDelete={toDelete}/>
                </div>
            </div>    
        </div>
    )
}
