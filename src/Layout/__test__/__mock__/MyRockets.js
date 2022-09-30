import React from "react";
import { ListGroup } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "../../../redux/configureStore";

const MyRockets = () => {
  const rockets = [
    {
      rocket_name: "Falcon 9",
      reserved: true,
    },
  ];
  return (
    <Provider store={store}>
      <h3>My Rockets</h3>
      <ListGroup>
        {rockets
          .slice(1)
          .map(
            (rocket) =>
              rocket.reserved && (
                <ListGroup.Item>{rocket.rocket_name}</ListGroup.Item>
              )
          )}
      </ListGroup>
    </Provider>
  );
};

export default MyRockets;
