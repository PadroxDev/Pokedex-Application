import Button from 'react-bootstrap/Button';
import "../App.css";

function PokemonCard(props) {
    return <div className="pokedex-card">
        <div className="top-card-holder">
            <div className="pokedex-gradient" style={{"backgroundImage":props.pokemon.types.length == 1 ? "linear-gradient(to bottom, " + props.pokemon.types[0].color + ", " + props.pokemon.types[0].color + "66)" : "linear-gradient(to bottom, " + props.pokemon.types[0].color + ", " + props.pokemon.types[1].color + "CC)"}}>
                <div className="pokedex-pokeball-background">
                    {props.pokemon.shiny &&
                        <img className="shiny-sparkles" src="./img/shiny_sparkles.png" alt="Shiny sparkles"></img>
                    }
                    <img className="pokedex-image" src={props.pokemon.imgUrl} alt="pokedex-image"></img>
                </div>
            </div>
        </div>
        <div className="pokedex-data-holder">
            <div className="pokedex-number">No. {props.pokemon.number}</div>
            <div className="pokedex-name">{props.pokemon.name}</div>
            <div className="pokedex-types-alignment">
                {props.pokemon.types.map((type, key) => (
                    <img key={key} className="pokedex-type-img" src={'./img/' + type.name + '.png'} alt="pokedex-type"></img>
                ))}
            </div>
        </div>
        <div className="button-holder">
            <Button className="capture-button" variant="outline-danger">CAPTURER!</Button>{' '}
        </div>
    </div>
}

export default PokemonCard;