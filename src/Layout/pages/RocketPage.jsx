import React from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const RocketPage = () => {
  const { rockets } = useSelector((state) => state.rocket);

  document.title = "Space Traveler's Hub| Rockets";
  return (
    <Container>
      {rockets.map((rocket) => (
        <Row className="my-3" key={rocket.id}>
          <Col md={4}>
            <img
              src={
                rocket.flickr_images.length === 2
                  ? "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"
                  : rocket.flickr_images
              }
              alt="rocket"
              className="img-fluid"
            />
          </Col>
          <Col md={8}>
            <h3>{rocket.rocket_name}</h3>
            <p>
              <Badge bg="primary">{rocket.reserved ? "Reserved" : ""}</Badge>{" "}
              {rocket.description}
            </p>
            <Button variant={"primary"}>{"Reserve Rocket"}</Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default RocketPage;
