import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';

const MyMission = () => {
  const missions = [{
    mission_id: '1',
    mission_name: 'Thaicom',
    joined: true,
  }];
  return (
    <>
      <Provider store={store}>
        <h3>My Mission</h3>
        {missions
          .map(
            (mission) => mission.joined && (
              <ListGroup key={mission.mission_id}>
                <ListGroup.Item>{mission.mission_name}</ListGroup.Item>
              </ListGroup>
            ),
          )}
      </Provider>
    </>
  );
};

export default MyMission;
