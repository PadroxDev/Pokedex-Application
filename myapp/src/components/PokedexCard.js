import "../App.css";

function PokemonCard(props) {
    return <div className="pokedex-card">
        <div className="pokedex-gradient" style={{"background-image":props.pokemon.types.length == 1 ? "linear-gradient(to bottom, " + props.pokemon.types[0].color + ", " + props.pokemon.types[0].color + "50)" : "linear-gradient(to bottom, " + props.pokemon.types[0].color + ", " + props.pokemon.types[1].color + "70)"}}>
            <div className="pokedex-pokeball-background">
                <img className="shiny-sparkles" src="../public/img/shiny_sparkles.png" alt="Shiny sparkles"></img>
                <img className="pokedex-image" src={props.pokemon.imgUrl} alt="pokedex-image"></img>
            </div>
        </div>
    </div>
}

//     return <div className="pokedex-card">
//         <div className="pokedex-render-background">
//             <img className="pokedex-image" src={props.pokemon.imgUrl} alt="pokedex-image"></img>
//         </div>
//         <div className="pokedex-card-data-holder">
//             <div className="pokedex-number">No. {props.pokemon.number}</div>
//             <h2 className="pokedex-name">{props.pokemon.name}</h2>
//             <div className="pokedex-types-alignment">
//             {props.pokemon.types.map((type, key) => (
//                 <img key={key} className="pokedex-type-img" src={require('../img/' + type.name + '.png')} alt="pokedex-type"></img>
//             ))}
//             </div>
//         </div>
//     </div>
// }

export default PokemonCard;