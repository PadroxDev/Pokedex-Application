import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { insertPokedex } from '../../api/pokedex';

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
    const [type1, setType1] = useState("Électrik");
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

        const types=[];
        types.push(props.types.find((t)=>t.name===type1));
        if (type2 != "None")
            types.push(props.types.find((t)=>t.name===type2));
        insertPokedex(name, number, types, imgUrl, shiny);
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
            <Button className="floating-button add-pokemon-button" variant="outline-primary" onClick={handleShow}>
                <p>+</p>
            </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Ajouter un nouveau Pokémon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formPokemonName">
                    <Form.Label>Nom du Pokémon</Form.Label>
                    <Form.Control type="text" placeholder="Pikachu" onChange={handleName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPokemonNumber">
                    <Form.Label>Numéro du Pokémon</Form.Label>
                    <Form.Control type="text" placeholder="025" onChange={handleNumber} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formPokemonType1">
                    <Form.Label>Types du Pokémon</Form.Label>
                    <Form.Select defaultValue="Électrik" onChange={handleType1}>
                        {dropdownOptions}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPokemonType2">
                    <Form.Select onChange={handleType2}>
                        <option value="None">Aucun</option>
                        {dropdownOptions}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPokemonImgUrl">
                    <Form.Label>URL de l'image du Pokémon</Form.Label>
                    <Form.Control type="text" placeholder="https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png" onChange={handleImgUrl} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPokemonShiny">
                    <Form.Check type="checkbox" label="Chromatique" onChange={handleShiny} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Ajouter
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Fermer
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}

export default AddPokemonModal;