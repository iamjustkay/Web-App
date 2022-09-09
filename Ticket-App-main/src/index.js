import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/Home";
import BookTickets from "./components/Bookticket";

ReactDOM.render(

  
<BrowserRouter>

    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<App/>} />
      <Route path="/book-ticket" element={<BookTickets/>} />
    
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
