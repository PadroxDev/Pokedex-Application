import { useState, useEffect } from 'react';
import { getAllPokemons } from "../api/pokemons";
import { getAllTypes } from "../api/types"
import PokemonCard from "../components/PokemonCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddPokemonModal from '../components/Pokemon/AddModal';
import UpdatePokemon from '../components/Pokemon/UpdateModal';
import DeletePokemon from '../components/Pokemon/DeleteModal';
import Filters from '../components/Pokemon/Filters';

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
            <h1 className="pokemon-list">Tous les Pokémon</h1>
            <h2>Filtres</h2>
            <Filters
                types={types}
                pokemons={pokemons}
                setPokemonsShow={setPokemonsShow}
                pokemonsShow={getPokemonsShow}
            />
        </div>
        <div className="pokemon-content">
            {
                pokemonsShow.map((pokemon, key) => {
                    return <div key={key} className="pokemon-block">
                        <PokemonCard
                            pokemon={pokemon}
                        />
                    </div>
                })
            }
        </div>
        <Footer />
        <AddPokemonModal
            types={types}
        />
        <UpdatePokemon
            types={types}
        />
        <DeletePokemon />
    </div>
}

export default Home;