import Nav from 'react-bootstrap/Nav';
import "../App.css";

function Navbar() {
  return (
    <div className="follow-scroll-navbar">
      <Nav className="color-red" defaultActiveKey="/home" as="ul">
        <img className="home-button-image" src="./img/home_button.png"/>     
        <div className='navbar-text-link'>
          <Nav.Item as="li">
            <Nav.Link className="navbar-items" href="/" eventKey="link-1 white-text">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="navbar-items" href="/pokemons" eventKey="link-1 white-text">Pokémon</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="navbar-items" href="/pokedex" eventKey="link-2 white-text">Pokédex</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
      <div className="pokedex-style-gradient row">
        <div className='pokedex-top-part-shape'></div>
      </div>
    </div>
  );
}

export default Navbar;