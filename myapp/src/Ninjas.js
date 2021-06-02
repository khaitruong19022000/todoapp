import React from 'react';
import './Ninjas.css';
const Ninjas = ({ ninjas, deleteNinja }) => {
    const ninjaList = ninjas.map(ninja =>{
        if (ninja.age >20 ){
            return(
                <div className="ninja" key={ninja.id}>
                    <div>My name is {ninja.name}</div>
                    <div>I am {ninja.age} year old</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}> Delete ninja</button>
                </div>
            )
        } else {
            return null
        }
    })
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}


export default Ninjas