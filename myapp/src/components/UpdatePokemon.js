import { AiOutlineEdit } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function UpdatePokemon(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    
    return <>
        <div className="floating-button-holder">
            <Button className="floating-button edit-pokemon" variant="outline-warning" onClick={handleShow}>
                <AiOutlineEdit />
            </Button>
        </div>
    </>
}

export default UpdatePokemon;