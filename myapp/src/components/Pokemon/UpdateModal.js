import { AiOutlineEdit } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { updatePokemon } from '../../api/pokemons';
import EnableEditForm from '../Pokedex/EnableEditForm';

function UpdatePokemon(props) {
    const [show, setShow] = useState(false);
    const { register, reset, handleSubmit } = useForm();
    const [ concernedPokemon, setConcernedPokemon ] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const onSubmit = (data) => {
        const types = [];
        types.push(props.types.find((t) => t.name===data.editPokemonType1));
        if (data.editPokemonType2 != "None")
        types.push(props.types.find((t) => t.name===data.editPokemonType2));
        updatePokemon(concernedPokemon.name, {name:data.editPokemonName, number:data.editPokemonNumber, types:types, imgUrl:data.editPokemonImgUrl, imgUrlShiny:data.editPokemonImgUrlShiny});
        window.location.reload(false);
    }

    let setEnableEditShow;
    
    const getEnableEditShow = (setEditShow) => {
        setEnableEditShow = setEditShow;
    }
    
    const handleOnClick = () => {
        setConcernedPokemon(null);
        setEnableEditShow(true);
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
                    getEnableEditShow={getEnableEditShow}
                    resetForm={() => {
                        reset();
                    }}
                />
                {concernedPokemon != null &&
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formEditPokemonName">
                            <Form.Label>Nom du Pokémon</Form.Label>
                            <Form.Control {...register("editPokemonName")} type="text" defaultValue={concernedPokemon.name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEditPokemonNumber">
                            <Form.Label>Numéro du Pokémon</Form.Label>
                            <Form.Control {...register("editPokemonNumber")} type="text" defaultValue={concernedPokemon.number} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEditPokemonType1">
                            <Form.Label>Types du Pokémon</Form.Label>
                            <Form.Select {...register("editPokemonType1")} defaultValue={concernedPokemon.types[0].name}>
                                {dropdownOptions}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEditPokemonType2">
                            <Form.Select {...register("editPokemonType2")} defaultValue={concernedPokemon.types.length >= 2 ? concernedPokemon.types[1].name : "None"}>
                                <option value="None">Aucun</option>
                                {dropdownOptions}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEditImgUrl">
                            <Form.Label>URL de l'image du Pokémon</Form.Label>
                            <Form.Control {...register("editPokemonImgUrl")} type="text" defaultValue={concernedPokemon.imgUrl}></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEditImgUrlShiny">
                            <Form.Label>URL de l'image du Pokémon chromatique</Form.Label>
                            <Form.Control {...register("editPokemonImgUrlShiny")} type="text" defaultValue={concernedPokemon.imgUrlShiny}></Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        Valider
                        </Button>

                        <Button className="back-button" variant="danger" onClick={handleOnClick}>
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