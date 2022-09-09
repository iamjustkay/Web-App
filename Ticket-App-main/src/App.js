import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "./components/TopicMenu";
import BookTickets from "./components/Bookticket";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Events from "./components/Events";

function App() {
  const topics = ["Home ", "Book Ticket", "Events","Blog"];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <div className="App">
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className="content">


          {
             (  topics[contentIndex]==="Events") ? <Events/> 
             :(  topics[contentIndex]==="Blog") ? <Blog/> 
             : (  topics[contentIndex]==="Book Ticket") ? <BookTickets/> 
             :(  topics[contentIndex]==="Home")?<Home/>:<Home/>
            

          }
         


        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;