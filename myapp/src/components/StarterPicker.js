import "../App.css";
import { useState, useEffect } from 'react';
import { getAllPokemons ,getPokemonByNumber} from "../api/pokemons";
import { getAllTypes } from "../api/types"

function StarterPicker(props) {
    const starters=["001","004","007"];
    const getStarter=async(index)=>{
        return await getPokemonByNumber(starters[index]);
    }

    return (
    <div className='starter-choice'>
        {
            starters.map((v,key)=>{
                const starter=getStarter(v);
                if (!starter) return;
                return <div 
                    className='starter'>
                        <img src={starter.imgUrl}/>
                </div>
            })

        }
    </div>
    )
}

export default StarterPicker;