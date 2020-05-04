import React from "react";
import Product from "./Product";
import Panel from "./Panel";
import Profile from "./Profile";

const App = () => (
  <div>
    <Panel title="some title">
      <Profile name="Ivan" email="berkoivan@gmail.com" />
    </Panel>
    <Product
      price={10.99}
      imageUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      name="Tacos With Lime"
    />
    <Product
      imageUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      price={14.29}
      name="Fries and burger"
    />
  </div>
);

export default App;
