import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StreamList from "./components/StreamList";
import CreateStream from "./components/CreateStream";
import StreamEdit from "./components/StreamEdit";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <h1>v1</h1>
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/create" element={<CreateStream />} />
          <Route path="/edit/:id" element={<StreamEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
