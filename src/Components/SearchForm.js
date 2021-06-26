import React, {useState} from 'react';

export default function SearchForm({heroesIds, getSelectedCharacter,getHero}) {
    const [selectedItem, setSelectedItem] = useState();

    const handleChange = (event) =>{
        setSelectedItem(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('you selected ' + selectedItem);
        getSelectedCharacter(selectedItem);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Select your character by name:
                    <select className="form-select" aria-label="Default select example" defaultValue={heroesIds.filter(option => option.id === 1)} onChange={handleChange} required size={4}>
                        {heroesIds.map((hero)=>{return <option key={hero.id} value={hero.id}>{hero.name}</option>})}
                    </select>
                </label>
                <br/>
                <input type="submit" value="Buscar"/>

            </form> 
        </div>
    )
}
