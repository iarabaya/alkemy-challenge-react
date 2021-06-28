import React, {useState} from 'react';

export default function SearchForm({heroesIds, getSelectedCharacter,getHero}) {
    const [selectedItem, setSelectedItem] = useState();

    const handleChange = (event) =>{
        setSelectedItem(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        getSelectedCharacter(selectedItem);
    }

    return (
        <div className="text-center">
            <form onSubmit={handleSubmit}>
                <label>Select your character by name:
                    <select className="form-select" aria-label="Default select example" defaultValue={1} onChange={handleChange} required size={4}>
                        {heroesIds.map((hero)=>{return <option key={hero.id} value={hero.id}>{hero.name}</option>})}
                    </select>
                </label>
                <br/>
                <button type="submit" className="btn btn-secondary">Search</button>
            </form> 
        </div>
    )
}
