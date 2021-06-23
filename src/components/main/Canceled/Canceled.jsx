import React from 'react';
import {Container} from "react-bootstrap";
import AgendaPic from "../../../img/agenda.png"
import "./canceled.css"

function Canceled() {
    return (
        <div className="canceled">
            <Container>
            <h3>Canceled visited</h3>
            <p>You have 1 canceled visite:</p>
            <div>
                <div>
                    <h4 style={{color:"#48325D"}}>Alisa Wanshi - pediatrician</h4>
                    <p>
                        <img src={AgendaPic} alt="agenda" />
                        26/08/2018
                    </p>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Canceled
