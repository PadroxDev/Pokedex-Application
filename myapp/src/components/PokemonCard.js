import Button from 'react-bootstrap/Button';
import "../App.css";

function PokemonCard(props) {
    return <div className="pokemon-card">
        <div className="pokemon-top-card-holder">
            <div className="pokemon-gradient" style={{"backgroundImage":props.pokemon.types.length == 1 ? "linear-gradient(to bottom, " + props.pokemon.types[0].color + ", " + props.pokemon.types[0].color + "66)" : "linear-gradient(to bottom, " + props.pokemon.types[0].color + ", " + props.pokemon.types[1].color + "CC)"}}>
                <div className="pokemon-image-container">
                    {props.pokemon.shiny &&
                        <img className="shiny-sparkles" src="./img/shiny_sparkles.png" alt="Shiny sparkles"></img>
                    }
                    <img className="pokemon-image" src={props.pokemon.imgUrl} alt="pokemon-image"></img>
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
            <Button className="pokemon-capture-button" variant="outline-danger">CAPTURER!</Button>{' '}
        </div>
    </div>
}

export default PokemonCard;