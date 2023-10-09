import React from "react";
import Home from "./Components/routes/home/Home";
import { Route, Routes} from "react-router-dom";
import Navigation from "./Components/routes/home/navigation/Navigation";
import Authentication from "./Components/routes/home/authentication/Authentication";

const Shop = () => {
  return <h1>i am the shop</h1>;
};

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
      
      </div>
  );
};

export default App;
