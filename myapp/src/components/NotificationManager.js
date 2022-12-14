import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function NotificationManager(props) {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    
    return <>

    </>
}

export default NotificationManager;