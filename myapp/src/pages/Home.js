import { useState, useEffect } from 'react';
import { getAllPokemons } from "../api/pokemons";
import { getAllTypes } from "../api/types"
import PokedexCard from "../components/PokedexCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddPokemonModal from '../components/AddPokemonModal';
import Filters from '../components/Filters';
import UpdatePokemon from '../components/UpdatePokemon';
import DeletePokemon from '../components/DeletePokemonModal';
import NotificationManager from '../components/NotificationManager'

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
        <NotificationManager />
        <div className="main-container">
            <h1  className="pokemon-list">Votre Pokédex</h1>
            <h2>Filters</h2>
            
            <Filters
                types={types}
                pokemons={pokemons}
                setPokemonsShow={setPokemonsShow}
                pokemonsShow={getPokemonsShow}
            />

            <div className="pokedex-content">
                {
                    pokemonsShow.map((pokemon, key) => {
                        return <div key={key} className="pokedex-block">
                            <PokedexCard
                                pokemon={pokemon}
                            />
                        </div>
                    })
                }
            </div>
        </div>

        {/* Pokedex Editor - Buttons & Modals */}

        <AddPokemonModal
            types={types}
        />
        <UpdatePokemon
            types={types}
        />
        <DeletePokemon />

        <Footer />
    </div>
}

export default Home;