import "../App.css";
import { useState, useEffect } from 'react';
import { getAllPokemons ,getPokemonByNumber} from "../api/pokemons";
import { getAllTypes } from "../api/types"

function StarterPicker(props) {
    const [concernedStarter,setConcernedStarter]= useState(null);
    const starters=["001","004","007"];
    const getStarter=async(index)=>{
        return await getPokemonByNumber(starters[index])
            .then(result => setConcernedStarter(result))
            .catch(err => console.log(err));
    }

    return <div className='starter-choice' >
        {/* {
            starters.map((v,key)=>{
                getStarter(v);
                console.log(getStarter(v))
                if (!concernedStarter) return;
                return <div 
                    key={key}className='starter'>
                        <img src={concernedStarter.imgUrl}/>
                </div>
            })

        } */}
        <div className="starter"><img src = "../img/Bulbizarre.png" alt="Bulbizarre"/></div>
        <div className="starter"><img src = "../img/Salamèche.png" alt="Salamèche"/></div>
        <div className="starter"><img src = "../img/Carapuce.png" alt="Carapuce"/></div>
    </div>
}

export default StarterPicker;