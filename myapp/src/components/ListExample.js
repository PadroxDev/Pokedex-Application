import Nav from 'react-bootstrap/Nav';
import "../App.css";

function ListExample() {
  return (
    <div>
      <Nav className="navbar color-red" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="" href="/home"><img className="home-button-image" src="./img/home_button.png"/></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1 white-text">Pokémon</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2 white-text">Pokédex</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="pokedex-style-gradient">
    
      </div>
    </div>
  );
}

export default ListExample;