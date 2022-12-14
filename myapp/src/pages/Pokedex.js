import { useState, useEffect } from 'react';
import { getAllPokedex } from "../api/pokedex";
import { getAllTypes } from "../api/types"
import PokedexCard from "../components/PokedexCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddPokemonModal from '../components/Pokedex/AddModal';
import UpdatePokemon from '../components/Pokedex/UpdateModal';
import DeletePokemon from '../components/Pokedex/DeleteModal';
import Filters from '../components/Pokedex/Filters';

function Home(props) {
    const [ pokemons, setPokemons ] = useState([]);
    const [ pokemonsShow, setPokemonsShow ] = useState([]);
    const [ types, setTypes ] = useState([]);

    useEffect(() => {
        const pokemonsFetched = getAllPokedex();
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
            <h1  className="pokemon-list">Votre Pokédex</h1>
            <h2>Filtres</h2>
            
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