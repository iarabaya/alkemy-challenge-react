import React, {useState} from 'react';

export default function SearchForm({heroesIds, getSelectedCharacter}) {
    const [selectedItem, setSelectedItem] = useState();

    const handleChange = (event) =>{
        setSelectedItem(event.target.value);
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
                    <select onChange={handleChange}>
                        {heroesIds.map((hero)=>{return <option key={hero.id} value={hero.id}>{hero.name}</option>})}
                    </select>
                </label>
                <input type="submit" value="Buscar"/>

            </form> 
        </div>
    )
}
