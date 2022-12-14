import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { getPokemonByName } from '../api/pokemons';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function EnableEditForm(props) {
    const { register, handleSubmit } = useForm();
    const [ message, setMessage ] = useState("");
    const [ show, setShow ] = useState(true);

    const onSubmit = async (data) => {
        const pokemon = await getPokemonByName(data.name);
        if (pokemon) {
            props.setConcernedPokemon(pokemon);
            setShow(false);
            props.resetForm();
        } else {
            if (data.name == "")
                setMessage("Veuillez renseigner ce champ pour accéder au panel de modification du Pokémon en question.");
            else
                setMessage("Aucun Pokémon du nom de " + data.name + " trouvé!");
        }
    }

    props.getEnableEditShow(setShow);

    return <>
        {show &&
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formEnableEditPokemonName">
                    <Form.Label>Nom du Pokémon à modifier</Form.Label>
                    <Form.Control {...register("name")} type="text" placeholder="Pikachu" />
                    <Form.Text className="text-muted">
                        {message}
                    </Form.Text>
                </Form.Group>
                <Button variant="warning" type="submit">
                    Modifier
                </Button>
            </Form>
        }
    </>
}

export default EnableEditForm;