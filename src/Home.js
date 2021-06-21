import React, { useState,useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import Team from './components/Team';
import axios from 'axios';

export default function Home() {
    const [heroes, setHeroes] = useState([]);


    useEffect(()=>{
        const limit = 51;
        for (let index = 1; index < limit; index++) {
            axios({
                url: '',
                method: 'get',
                baseURL: `https://superheroapi.com/api.php/10223708144224688/${index}` ,
                headers: {'X-Requested-With': 'XMLHttpRequest'}
    
            }).then(response => {
                const hero =  response.data;
                setHeroes((prevHeroes) => [...prevHeroes, hero]);
            }).catch(error => console.log(error));  
        }
    }, []);

    return (
        <div>
            pagina home
            <Team heroes={heroes}/>
        </div>
    )
}
