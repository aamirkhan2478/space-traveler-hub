import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyMission from '../components/MyMission';
import MyRockets from '../components/MyRockets';

const ProfilePage = () => (
  <Container className="my-5">
    <Row>
      <Col md={6}>
        <MyMission />
      </Col>
      <Col md={6}>
        <MyRockets />
      </Col>
    </Row>
  </Container>
);

export default ProfilePage;
