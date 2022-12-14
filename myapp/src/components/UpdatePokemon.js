import { AiOutlineEdit } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { updatePokemon } from '../api/pokemons';
import EnableEditForm from './EnableEditForm';
import AddPokemonModal from './AddPokemonModal';

function UpdatePokemon(props) {
    const [show, setShow] = useState(false);
    const { register, handleSubmit } = useForm();
    const [ concernedPokemon, setConcernedPokemon ] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const onSubmit = (data) => {
        console.log(data);
    }

    function GenerateTypesOptions(props) {
        return props.types.map((type, key) => (
            <option key={key} value={type.name}>{type.name}</option>
        ));
    }

    const dropdownOptions = GenerateTypesOptions(props);

    return <>
        <div className="floating-button-holder">
            <Button className="floating-button edit-pokemon" variant="outline-warning" onClick={handleShow}>
                <AiOutlineEdit />
            </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modifier un Pokémon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EnableEditForm
                    setConcernedPokemon={setConcernedPokemon}
                />
                {concernedPokemon != null &&
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formEditPokemonName">
                            <Form.Label>Nom du Pokémon</Form.Label>
                            <Form.Control type="text" value={concernedPokemon.name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEditPokemonNumber">
                            <Form.Label>Numéro du Pokémon</Form.Label>
                            <Form.Control type="text" value={concernedPokemon.number} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEditPokemonType1">
                            <Form.Label>Types du Pokémon</Form.Label>
                            <Form.Select value={concernedPokemon.types[0].name}>
                                {dropdownOptions}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEditPokemonType2">
                            <Form.Select value={concernedPokemon.types.length >= 2 ? concernedPokemon.types[1].name : "None"}>
                                <option value="None">Aucun</option>
                                {dropdownOptions}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEditImgUrl">
                            <Form.Label>URL de l'image du Pokémon</Form.Label>
                            <Form.Control type="text" value={concernedPokemon.imgUrl}></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="controlIdEditShiny">
                            <Form.Check type="checkbox" label="Chromatique" value={concernedPokemon.shiny}></Form.Check>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        Valider
                        </Button>

                        <Button className="back-button" variant="danger" type="submit">
                        Retour
                        </Button>
                    </Form>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
            </Modal.Footer>
      </Modal>
    </>
}

export default UpdatePokemon;