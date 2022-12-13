import Nav from 'react-bootstrap/Nav';
import "../App.css";

function ListExample() {
  return (
    <div className="follow-scroll-navbar">
      <Nav className="navbar color-red" defaultActiveKey="/home" as="ul">
        <img className="home-button-image color-red" src="./img/home_button.png"/>     
        <Nav.Item as="li">
          <Nav.Link href="/pokemons" eventKey="link-1 white-text">Pokémon</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/pokedex" eventKey="link-2 white-text">Pokédex</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="pokedex-style-gradient row">
        <div className='pokedex-top-part-shape'></div>
      </div>
    </div>
  );
}

export default ListExample;