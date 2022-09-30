import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyMission = () => {
  const { missions } = useSelector((state) => state.mission);
  return (
    <>
      <h3>My Mission</h3>
      <ListGroup>
        {missions
          .map(
            (mission) => mission.joined && (
            <ListGroup.Item>{mission.mission_name}</ListGroup.Item>
            ),
          )}
      </ListGroup>
    </>
  );
};

export default MyMission;
