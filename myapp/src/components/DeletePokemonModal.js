import { RiDeleteBinLine } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function UpdatePokemon(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    
    return <>
        <div className="floating-button-holder">
            <Button className="floating-button delete-pokemon" variant="outline-danger" onClick={handleShow}>
                <RiDeleteBinLine />
            </Button>
        </div>
    </>
}

export default UpdatePokemon;