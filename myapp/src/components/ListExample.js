import Nav from 'react-bootstrap/Nav';
import "../App.css";

function ListExample() {
  return (
    <Nav className="navbar" defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link className="" href="/home"><img className="home-button-image" src="./img/home_button.png"/></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Pokémon</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Pokédex</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ListExample;