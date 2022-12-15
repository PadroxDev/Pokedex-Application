import { useState, useEffect } from 'react';
import { getAllPokemons } from "../api/pokemons";
import { getAllTypes } from "../api/types"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarterPicker from "../components/StarterPicker"

function Home(props) {
    const [ pokemons, setPokemons ] = useState([]);

    useEffect(() => {
        const pokemonsFetched = getAllPokemons();
        pokemonsFetched
            .then(result => {setPokemons(result)})
            .catch(error => console.log("Erreur avec votre API :", error.message));
    }, []);

    return <div>
        <Navbar />
        <div className="main-container">
            <h1>Laboratoire du Prof. Chen</h1>
            { true }
                <>
                    <h2> C'est l'heure, vous avez 10 ans, vous allez donc pouvoir partir à l'avanture avec un compagnon... </h2>
                    <h2>Lequel allez vous choisir ?</h2>
                </>
            <StarterPicker />
        </div>
        <Footer />
    </div>
}

export default Home;