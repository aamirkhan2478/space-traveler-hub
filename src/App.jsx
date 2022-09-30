import React from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "./Layout";
import MissionPage from "./Layout/pages/MissionPage";
import ProfilePage from "./Layout/pages/ProfilePage";
import RocketPage from "./Layout/pages/RocketPage";

const App = () => {
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
