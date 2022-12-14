import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Filters(props) {
    const { register, handleSubmit } = useForm();
    const [ disableSecondaryType, setDisableSecondaryType ] = useState(false);

    const handleDisableSecondaryType = (event) => {
        setDisableSecondaryType(event.currentTarget.value == "All");
    }

    const onSubmit = (data) => {
        function compare(a, b) {
            switch(data.sortOrder) {
                case "Alphabetical ↓":
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                case "Alphabetical ↑":
                    if (a.name > b.name)
                        return -1;
                    if (a.name < b.name)
                        return 1;
                    return 0;
                case "Number ↑":
                    if (a.number < b.number)
                        return -1;
                    if (a.number > b.number)
                        return 1;
                    return 0;
                case "Numéro ↓":
                    if (a.number > b.number)
                        return -1;
                    if (a.number < b.number)
                        return 1;
                    return 0;
            }
        }
    
        let tmpPokemons = null;
        if (data.primaryType == "All") {
            tmpPokemons = props.pokemons;
        } else {
            const searchedType1 = props.types.find((t) => t.name == data.primaryType);
            if (data.secondaryType == "None" || data.secondaryType == data.primaryType) // Monotype search
            {
                tmpPokemons = props.pokemons.filter((pokemon) => (
                    pokemon.types[0].name == searchedType1.name || (pokemon.types.length >= 2 && pokemon.types[1].name == searchedType1.name)
                ) );
            } else { // Double Types search
                const searchedType2 = props.types.find((t) => t.name == data.secondaryType);
                tmpPokemons = props.pokemons.filter((pokemon) => (
                    pokemon.types.length >= 2 && (pokemon.types[0].name == searchedType1.name  || pokemon.types[0].name == searchedType2.name ) && (pokemon.types[1].name == searchedType1.name || pokemon.types[1].name == searchedType2.name)
                ) );
            }
        }
        tmpPokemons = data.onlyShiny ? tmpPokemons.filter( (pokemon) => pokemon.shiny ) : tmpPokemons;
        props.setPokemonsShow(tmpPokemons.sort(compare));
    }
 
    function GenerateTypesOptions(props) {
        return props.types.map((type, key) => (
            <option key={key} value={type.name}>{type.name}</option>
        ));
    }

    const dropdownOptions = GenerateTypesOptions(props);

    return (
        <Form className="filters-form" onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="filterPrimaryType">
                        <Form.Label>Type principal</Form.Label>
                        <Form.Select {...register("primaryType")} onChange={handleDisableSecondaryType}>
                            <option value="All">Tous</option>
                            {dropdownOptions}
                        </Form.Select>
                    </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group className="mb-3" controlId="filterSecondaryType">
                        <Form.Label>Type Secondaire</Form.Label>
                        <Form.Select disabled={disableSecondaryType} {...register("secondaryType")}>
                            <option value="None">Aucun</option>
                            {dropdownOptions}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="filterSortOrder">
                        <Form.Label>Sort Order</Form.Label>
                        <Form.Select {...register("sortOrder")}>
                            <option value="Number ↑"> ↑ Par ordre numérique croissant</option>
                            <option value="Numéro ↓"> ↓ Par ordre numérique décroissant</option>
                            <option value="Alphabetical ↓">↓ Par ordre alphabétique</option>
                            <option value="Alphabetical ↑">↑ Par ordre alphabétique inverse</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col className="shiny-check">
                    <Form.Group className="mb-3" controlId="filterOnlyShiny">
                        <Form.Check {...register("onlyShiny")} type="checkbox" label="Only shiny"></Form.Check>
                    </Form.Group>
                </Col>

                <Col className="filters-button-column">
                    <Form.Group className="mb-3 " controlId="filterSubmitButton">
                        <Button variant="success" type="submit">
                            Filtrer
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default Filters;