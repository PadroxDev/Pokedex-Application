import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { findTypeByName } from '../api/types';
import { insertPokemon } from '../api/pokemons';

function GenerateTypesOptions(props) {
    return props.types.map((type, key) => (
        <option key={key} value={type.name}>{type.name}</option>
    ));
}

function AddPokemonModal(props) {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("Pikachu");
    const [number, setNumber] = useState("025");
    const [type1, setType1] = useState("Acier");
    const [type2, setType2] = useState("None");
    const [imgUrl, setImgUrl] = useState("https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png");
    const [shiny, setShiny] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopProgression();
        }

        setValidated(true);

        const jsonType1 = findTypeByName(type1);
        const types = [jsonType1]
        console.log(name, number, types, imgUrl, shiny);
        insertPokemon(name, number, types, imgUrl, shiny);
    };

    const handleName = (event) => {
        setName(event.currentTarget.value);
    }

    const handleNumber = (event) => {
        setNumber(event.currentTarget.value);
    }

    const handleType1 = (event) => {
        setType1(event.currentTarget.value);
    }

    const handleType2 = (event) => {
        setType2(event.currentTarget.value);
    }

    const handleImgUrl = (event) => {
        setImgUrl(event.currentTarget.value);
    }

    const handleShiny = (event) => {
        setShiny(event.currentTarget.value);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dropdownOptions = GenerateTypesOptions(props);

    return (
    <>
        <div className="floating-button-holder">
            <Button className="floating-button add-pokemon-button" variant="outline-danger" onClick={handleShow}>
                <p>+</p>
            </Button>;
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Ajouter un nouveau Pokémon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formPokemonName">
                    <Form.Label>Pokemon's Name</Form.Label>
                    <Form.Control type="text" placeholder="Pikachu" onChange={handleName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPokemonNumber">
                    <Form.Label>Pokemon's Number</Form.Label>
                    <Form.Control type="text" placeholder="025" onChange={handleNumber} />
                </Form.Group>
                
                <Form.Label>Pokemon's Types</Form.Label>
                <Form.Group className="mb-3" controlId="formPokemonType1">
                    <Form.Select onChange={handleType1}>
                        {dropdownOptions}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPokemonType2">
                    <Form.Select onChange={handleType2}>
                        <option value="None">None</option>
                        {dropdownOptions}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPokemonImgUrl">
                    <Form.Label>Pokemon's Image as a URL</Form.Label>
                    <Form.Control type="text" placeholder="https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png" onChange={handleImgUrl} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPokemonShiny">
                    <Form.Check type="checkbox" label="Shiny" onChange={handleShiny} />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Ajouter
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Retour
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}

export default AddPokemonModal;