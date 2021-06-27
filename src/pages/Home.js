import React, { useState,useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import Team from '../components/Team';
import axios from 'axios';
import heroesjson from '../data/heroesIds.json';
import SearchForm from '../components/SearchForm';
import Hero from '../components/Hero';


export default function Home({authorization}) {
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

    if(!authorization){
        return <Redirect to="/"/> 
     }

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
        if(team.length < 7){
            setHero({...hero, team:true});
            setTeam((prevHeroes) => [...prevHeroes, hero]);
        }else{
            alert("you've reached the maximum members allowed in a team");
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
            <h1>pagina home</h1>
            <SearchForm heroesIds={heroesIds} getSelectedCharacter={getSelectedCharacter} getHero={getHero}/>
            {hero? <Hero hero={hero} addToTeam={addToTeam}/> : <span>Sin resultado</span>}  
            <Team team={team} toDelete={toDelete}/>
        </div>
    )
}
