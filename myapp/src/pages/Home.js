import { useState, useEffect } from 'react';
import { getAllPokemons } from "../api/pokemons";
import { getAllTypes } from "../api/types"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarterPicker from "../components/StarterPicker"

function Home(props) {
    const [ pokemons, setPokemons ] = useState([]);
    const [ pokemonsShow, setPokemonsShow ] = useState([]);
    const [ types, setTypes ] = useState([]);

    useEffect(() => {
        const pokemonsFetched = getAllPokemons();
        pokemonsFetched
            .then(result => {setPokemons(result);setPokemonsShow(result.sort((a, b) => {
                if (a.number < b.number)
                    return -1;
                if (a.number > b.number)
                    return 1;
                return 0;
            }))})
            .catch(error => console.log("Erreur avec votre API :", error.message));

        const typesFetched = getAllTypes();
        typesFetched
            .then(result => setTypes(result))
            .catch(error => console.log("Erreur avec votre API :", error.message));
    }, []);

    function getPokemonsShow() {
        return pokemonsShow;
    }

    return <div>
        <Navbar />
        <div className="main-container">
            <h1>Laboratoire du Prof. Chen</h1>
            <h2> C'est l'heure, vous avez 10 ans, vous allez donc pouvoir partir à l'avanture avec un compagnon... </h2>
            <h2>Lequel allez vous choisir ?</h2>
            <StarterPicker />
        </div>
        <Footer />
    </div>
}

export default Home;