import React, { useEffect } from "react";
import {
  useLocation,
  useHistory,
  useRouteMatch,
  Route,
  Switch
} from "react-router-dom";

const LinearSearch = props => {
  return <div>Linear Search</div>;
};

const BinarySearch = props => {
  return <div>Binary Search </div>;
};

const Searching = props => {
  const location = useLocation();
  const history = useHistory();
  let { path } = useRouteMatch();

  let inputArray = [11, 16, 321, 400, 4, 602, 923, 500, 111, 9];
  useEffect(() => {
    if (location.pathname === "/chapter1") {
      history.push(`${location.pathname}/linearSearch`);
    }
  }, [location, history]);

  return (
    <Switch>
      <Route path={`${path}/linearSearch`}>
        <LinearSearch />
      </Route>
      <Route path={`${path}/binarySearch`}>
        <BinarySearch />
      </Route>
    </Switch>
  );
};

export default Searching;
