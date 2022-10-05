import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import React from "react";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <h1>I am the Shop page</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
