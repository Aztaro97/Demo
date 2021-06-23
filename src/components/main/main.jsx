import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./main.css";
import Calendar from "./calendar/calendar";
import Notification from "./notification/Notification";
import Canceled from "./Canceled/Canceled"
import MapsContainer from "./maps/mapsContainer";
import Appointment from "./appoitment/appointment";

function Content() {
  return (
    <div className="content" style={{background:"#D4E2F0"}}>
      <Row>
        <Col lg={4}>
          <Container>
            <Calendar />
            <Notification />
            <Canceled />
          </Container>
        </Col>
        <Col lg={8}>
          <Container>
          <MapsContainer />
          <Appointment />
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
