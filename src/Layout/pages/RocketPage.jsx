import React from 'react';
import {
  Badge, Button, Col, Container, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { canceledRocket, reservedRocket } from '../../redux/Rockets/rockets';

const RocketPage = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  const clickHandler = (id, reserved) => {
    if (reserved === false || reserved === undefined) {
      dispatch(reservedRocket(id));
    } else {
      dispatch(canceledRocket(id));
    }
  };
  document.title = "Space Traveler's Hub| Rockets";
  return (
    <Container>
      {rockets.map((rocket) => (
        <Row className="my-3" key={rocket.id}>
          <Col md={4}>
            <img
              src={
                rocket.flickr_images.length === 2
                  ? 'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg'
                  : rocket.flickr_images
              }
              alt="rocket"
              className="img-fluid"
            />
          </Col>
          <Col md={8}>
            <h3>{rocket.rocket_name}</h3>
            <p>
              <Badge bg="primary">{rocket.reserved ? 'Reserved' : ''}</Badge>
              {' '}
              {rocket.description}
            </p>
            <Button
              variant={rocket.reserved ? 'outline-danger' : 'primary'}
              onClick={() => clickHandler(rocket.id, rocket.reserved)}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default RocketPage;
