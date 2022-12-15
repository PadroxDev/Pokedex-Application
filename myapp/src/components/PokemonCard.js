import Button from 'react-bootstrap/Button';
import "../App.css";
import { getPokedexByName, updatePokedex } from '../api/pokedex';

const shinyRate = 10;

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

function PokemonCard(props) {
    const handleCatch = async (event, props) => {
        const pokemonFetched = await getPokedexByName(props.pokemon.name);
        if (pokemonFetched === null || !pokemonFetched.shiny) {
            const isShiny = getRandomInt(shinyRate) == 0;
            updatePokedex(props.pokemon.name, {name:props.pokemon.name, number:props.pokemon.number, types:props.pokemon.types, imgUrl:isShiny ? props.pokemon.imgUrlShiny : props.pokemon.imgUrl, shiny:isShiny})
        }
    }

    return <div className="pokemon-card">
        <div className="pokemon-top-card-holder">
            <div className="pokemon-gradient" style={{"backgroundImage":props.pokemon.types.length == 1 ? "linear-gradient(to bottom, " + props.pokemon.types[0].color + ", " + props.pokemon.types[0].color + "66)" : "linear-gradient(to bottom, " + props.pokemon.types[0].color + ", " + props.pokemon.types[1].color + "CC)"}}>
                <div className='parent-image-pokemon-container' >
                    <div className='pokemon-image-container'>
                        <img className="pokemon-image" src={props.pokemon.imgUrl} alt="pokemon-image"></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="pokemon-data-holder">
            <div className="pokemon-number">No. {props.pokemon.number}</div>
            <div className="pokemon-name">{props.pokemon.name}</div>
            <div className="pokemon-types-alignment">
                {props.pokemon.types.map((type, key) => (
                    <img key={key} className="pokemon-type-img" src={'./img/' + type.name + '.png'} alt="pokemon-type"></img>
                ))}
            </div>
        </div>
        <div className="pokemon-button-holder">
            <Button className="pokemon-capture-button" variant="outline-danger" onClick={event => handleCatch(event, props)}>CAPTURER!</Button>{' '}
        </div>
    </div>
}

export default PokemonCard;