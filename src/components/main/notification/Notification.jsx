import React from 'react';
import {Container} from "react-bootstrap"
import "./notification.css"

function Notification() {
    return (
        <div className="notification">
            <Container>
            <h3>Notification</h3>
            <p>You have 3 visite today:</p>
            <ul>
                <li>Dr. Veronica Hops <span>| pediatrician</span></li>
                <li>Dr. Albert Novikov <span>| dermatologist</span></li>
                <li>Dr. Marta Krouf <span>| dentist</span></li>
            </ul>
            </Container>
        </div>
    )
}

export default Notification
