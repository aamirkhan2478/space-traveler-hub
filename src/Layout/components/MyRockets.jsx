import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyRockets = () => {
  const { rockets } = useSelector((state) => state.rocket);
  return (
    <>
      <h3>My Rockets</h3>
      <ListGroup>
        {rockets.map(
          (rocket) => rocket.reserved && (
          <ListGroup.Item>{rocket.rocket_name}</ListGroup.Item>
          ),
        )}
      </ListGroup>
    </>
  );
};

export default MyRockets;
