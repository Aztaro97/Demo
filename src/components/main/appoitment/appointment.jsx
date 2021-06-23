import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./appointment.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import morepic from "../../../img/more.png";
import Carousel from "./carousel";

function Appointment() {
  return (
    <div className="appointment">
      <Container>
        <Row>
          <Col className="appointment__header">
            <h4>Appointments</h4>
            <a href="#/">
              <img src={morepic} alt="" />
            </a>
          </Col>
        </Row>
        <Row className="pt-2">
          <Col lg={4}>
            <div className="appointment__btn">
              <button className="btn btn1">Upcoming</button>
              <button className="btn btn2">Past</button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="formButton" style={{ textAlign: "center" }}>
              <button className="btn">
                <GrFormPrevious />
              </button>
              <button className="btn">
                <GrFormNext />
              </button>
            </div>
          </Col>
          <Col lg={4}>
            <p>Sort by</p>
          </Col>
        </Row>
        <Row>
          <Carousel />
        </Row>
      </Container>
    </div>
  );
}

export default Appointment;
