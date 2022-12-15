import { RiDeleteBinLine } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { deletePokemonByName } from '../../api/pokemons';

function DeletePokemon(props) {
    const [show, setShow] = useState(false);
    const { register, handleSubmit } = useForm();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const onSubmit = (data) => {
        deletePokemonByName(data.name);
        window.location.reload(false);
    }

    return <>
        <div className="floating-button-holder">
            <Button className="floating-button delete-pokemon" variant="outline-danger" onClick={handleShow}>
                <RiDeleteBinLine />
            </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Supprimer un Pokémon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formPokemonName">
                        <Form.Label>Nom du Pokémon à supprimer</Form.Label>
                        <Form.Control {...register("name")} type="text" placeholder="Pikachu" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Supprimer
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
}

export default DeletePokemon;