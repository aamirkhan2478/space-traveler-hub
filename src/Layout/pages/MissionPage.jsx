import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const MissionPage = () => {
  const { missions } = useSelector(
    (state) => state.mission,
  );
  console.log(missions);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>
              {' '}
              {mission.mission_name}
            </td>
            <td>{mission.description}</td>
            <td>
              {' '}
              <Badge bg="secondary">New</Badge>
            </td>
            <td>
              <Button variant="primary">Primary</Button>
              {' '}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MissionPage;
