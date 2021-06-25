import React, { useState,useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import Team from './components/Team';
import axios from 'axios';
import heroesjson from './data/heroesIds.json';
import SearchForm from './components/SearchForm';
import Hero from './components/Hero';

export default function Home() {
    const [heroesIds, setHeroesIds] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [hero, setHero] = useState();

    useEffect(()=>{
        setHeroesIds(heroesjson);
      },[heroesIds]);

    useEffect(()=>{
        if(selectedCharacter){
            axios({
                    url: '',
                    method: 'get',
                    baseURL: `https://superheroapi.com/api.php/10223708144224688/${selectedCharacter}` ,
                    headers: {'X-Requested-With': 'XMLHttpRequest'}
        
                }).then(response => {
                    const hero =  response.data;
                    setHero(hero);
                }).catch(error => console.log(error)); 
            
        }
    },[hero, selectedCharacter])

    const getHero = async (name) =>{
    let hero;
        try {
        const response = await axios.get(`https://superheroapi.com/api.php/10223708144224688/${name}`);
        hero = await JSON.stringify(response);
        } catch (error) {
            console.log(error);
        }
        return hero;
    }

    const getSelectedCharacter = (character) => {
        setSelectedCharacter(character);
    };

    return (
        <div>
            <h1>pagina home</h1>
            <SearchForm heroesIds={heroesIds} getSelectedCharacter={getSelectedCharacter}/>
            {hero? <Hero hero={hero}/> : <span>Sin resultado</span>}      
        </div>
    )
}

   // useEffect(()=>{
    //         axios({
    //             url: '',
    //             method: 'get',
    //             baseURL: `https://superheroapi.com/api.php/10223708144224688/${selectedCharacter}` ,
    //             headers: {'X-Requested-With': 'XMLHttpRequest'}
    
    //         }).then(response => {
    //             const hero =  response.data;
    //             setCharacter(hero);
    //             setHeroes((prevHeroes) => [...prevHeroes, hero]);
    //         }).catch(error => console.log(error));  
    // }, [selectedCharacter]);
