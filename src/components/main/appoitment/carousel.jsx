import React from "react";
import Slider from "react-slick";
import { Card, Row, Col } from "react-bootstrap";
import pic from "../../../img/user.png";
import "./appointment.css";
import { AiOutlineCheck, BiX } from "react-icons/all";

import pin from "../../../img/pinnormal.png";
import agenda from "../../../img/agenda.png";
import clock from "../../../img/clock.png";
import card1 from "../../../img/card/card1.png";
import card2 from "../../../img/card/card2.png";

function Carousel() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <Card className="appoitment_card">
          <Card.Body>
            <Row>
              <Col>
                <img className="card_img" src={card1} alt="img" />
              </Col>
              <Col>
                <h5>Dr. Alisa Fox</h5>
                <p>Psychologist</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="card__adress">
                  <img src={pin} alt="pin" />
                  Main medical center, 22 Satsen Pr , Paris
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card__date">
                  <p>
                    <img src={agenda} alt="agenda" />
                    31/08/2018
                  </p>
                  <p>
                    <img src={clock} alt="agenda" />
                    4:15
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card__btn">
                  <button className="btn btn1">
                    <AiOutlineCheck className="icon" />
                    Confirm
                  </button>
                  <button className="btn btn2">
                    <BiX className="icon" />
                    Cancel
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="appoitment_card">
          <Card.Body>
            <Row>
              <Col>
                <img className="card_img" src={card1} alt="img" />
              </Col>
              <Col>
                <h5>Dr. Alisa Fox</h5>
                <p>Psychologist</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="card__adress">
                  <img src={pin} alt="pin" />
                  Main medical center, 22 Satsen Pr , Paris
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card__date">
                  <p>
                    <img src={agenda} alt="agenda" />
                    31/08/2018
                  </p>
                  <p>
                    <img src={clock} alt="agenda" />
                    4:15
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card__btn">
                  <button className="btn btn1">
                    <AiOutlineCheck className="icon" />
                    Confirm
                  </button>
                  <button className="btn btn2">
                    <BiX className="icon" />
                    Cancel
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="appoitment_card">
          <Card.Body>
            <Row>
              <Col>
                <img className="card_img" src={card1} alt="img" />
              </Col>
              <Col>
                <h5>Dr. Alisa Fox</h5>
                <p>Psychologist</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="card__adress">
                  <img src={pin} alt="pin" />
                  Main medical center, 22 Satsen Pr , Paris
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card__date">
                  <p>
                    <img src={agenda} alt="agenda" />
                    31/08/2018
                  </p>
                  <p>
                    <img src={clock} alt="agenda" />
                    4:15
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card__btn">
                  <button className="btn btn1">
                    <AiOutlineCheck className="icon" />
                    Confirm
                  </button>
                  <button className="btn btn2">
                    <BiX className="icon" />
                    Cancel
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="appoitment_card">
          <Card.Body>
            <Row>
              <Col>
                <img className="card_img" src={card1} alt="img" />
              </Col>
              <Col>
                <h5>Dr. Alisa Fox</h5>
                <p>Psychologist</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="card__adress">
                  <img src={pin} alt="pin" />
                  Main medical center, 22 Satsen Pr , Paris
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card__date">
                  <p>
                    <img src={agenda} alt="agenda" />
                    31/08/2018
                  </p>
                  <p>
                    <img src={clock} alt="agenda" />
                    4:15
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card__btn">
                  <button className="btn btn1">
                    <AiOutlineCheck className="icon" />
                    Confirm
                  </button>
                  <button className="btn btn2">
                    <BiX className="icon" />
                    Cancel
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Slider>
    </div>
  );
}

export default Carousel;
