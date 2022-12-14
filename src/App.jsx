import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Appbar from './Layout';
import MissionPage from './Layout/pages/MissionPage';
import ProfilePage from './Layout/pages/ProfilePage';
import RocketPage from './Layout/pages/RocketPage';
import { showRockets } from './redux/Rockets/rockets';
import { showMissions } from './redux/Missions/missions';

const App = () => {
  const dispatch = useDispatch();
  const getRocket = () => {
    dispatch(showRockets());
  };
  const getMissions = () => {
    dispatch(showMissions());
  };
  useEffect(() => {
    getRocket();
    getMissions();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<Appbar />}>
          <Route path="/" element={<RocketPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
