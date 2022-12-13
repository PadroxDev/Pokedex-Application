import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Filters(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    function GenerateTypesOptions(props) {
        return props.types.map((type, key) => (
            <option key={key} value={type.name}>{type.name}</option>
        ));
    }

    const dropdownOptions = GenerateTypesOptions(props);

    return (
        <Form className="filters-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>UWU</h1>
            <h1>UWU</h1>
            <h1>UWU</h1>
            <h1>UWU</h1>
            <h1>UWU</h1>
            <Row>
                <Col size={4}>
                    <Form.Group className="mb-3" controlId="filterPrimaryType">
                        <Form.Label>Primary Type</Form.Label>
                        <Form.Select {...register("primaryType")}>
                            <option value="All">All</option>
                            {dropdownOptions}
                        </Form.Select>
                    </Form.Group>
                </Col>
                
                <Col size={4}>
                    <Form.Group className="mb-3" controlId="filterSecondaryType">
                        <Form.Label>Secondary Type</Form.Label>
                        <Form.Select {...register("secondaryType")}>
                            <option value="None">None</option>
                            {dropdownOptions}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col size={4}>
                    <Form.Group className="mb-3" controlId="filterSortOrder">
                        <Form.Label>Sort Order</Form.Label>
                        <Form.Select {...register("sortOrder")}>
                            <option value="Alphabetical ↓">↓ Par ordre alphabétique</option>
                            <option value="Alphabetical ↑">↑ Par ordre alphabétique inverse</option>
                            <option value="Number ↑"> ↑ Par ordre numérique croissant</option>
                            <option value="Numéro ↓"> ↓ Par ordre numérique décroissant</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col className="filters-button-column" size={1}>
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