import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { joinedMissions, leavedMissions } from '../../redux/Missions/missions';

const MissionPage = () => {
  const { missions } = useSelector(
    (state) => state.mission,
  );
  const dispatch = useDispatch();
  const clickHandler = (id, joined) => {
    if (joined === false || joined === undefined) {
      dispatch(joinedMissions(id));
    } else {
      dispatch(leavedMissions(id));
    }
  };
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
            <td>{mission.description.slice(0, 150)}</td>
            <td>
              {' '}
              <Badge bg={mission.joined ? 'primary' : 'secondary'}>
                {mission.joined ? 'ACTIVE MEMBER' : 'NOT A MEMBER '}
              </Badge>
            </td>
            <td>
              <Button
                variant={mission.joined ? 'outline-danger' : 'outline-secondary'}
                onClick={() => clickHandler(mission.mission_id, mission.joined)}
              >
                {' '}
                {mission.joined ? 'Leave Mission' : 'Join Mission'}
              </Button>
              {' '}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MissionPage;
