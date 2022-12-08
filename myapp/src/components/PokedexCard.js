function PokemonCard(props) {
    return <div className="pokedex-card">
        <div className="pokedex-render-background">
            <img className="pokedex-image" src={props.pokemon.imgUrl} alt="pokedex-image"></img>
        </div>
        <div className="pokedex-card-data-holder">
            <div className="number">{props.pokemon.number}</div>
        </div>
    </div>
}