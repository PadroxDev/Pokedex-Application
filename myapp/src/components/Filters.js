import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Filters(props) {
    const { register, handleSubmit } = useForm();
    const { sortOrder, setSortOrder } = useState("Alphabetical ↓");

    const compare = (a, b) => {
        switch(sortOrder) {
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

    const onSubmit = (data) => {
        if (data.primaryType === "All") {
            props.setPokemonsShow(
                props.pokemons.sort(compare)
            );
        } else {
            props.setPokemonsShow(
                props.pokemons.filter(
                    compare(data)
                )
            );
        }
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
                        <Form.Select {...register("primaryType")}>
                            <option value="All">Tous</option>
                            {dropdownOptions}
                        </Form.Select>
                    </Form.Group>
                </Col>
                
                {/* <Col>
                    <Form.Group className="mb-3" controlId="filterSecondaryType">
                        <Form.Label>Type Secondaire</Form.Label>
                        <Form.Select {...register("secondaryType")}>
                            <option value="None">Aucun</option>
                            {dropdownOptions}
                        </Form.Select>
                    </Form.Group>
                </Col> */}

                <Col>
                    <Form.Group className="mb-3" controlId="filterSortOrder">
                        <Form.Label>Sort Order</Form.Label>
                        <Form.Select onChange={setSortOrder} {...register("sortOrder")}>
                            <option value="Alphabetical ↓">↓ Par ordre alphabétique</option>
                            <option value="Alphabetical ↑">↑ Par ordre alphabétique inverse</option>
                            <option value="Number ↑"> ↑ Par ordre numérique croissant</option>
                            <option value="Numéro ↓"> ↓ Par ordre numérique décroissant</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col className="filters-button-column">
                    <Form.Group className="mb-3" controlId="filterSubmitButton">
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