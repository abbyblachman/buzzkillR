import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Profile from "./pages/profile";
import NewsFeed from "./pages/newsfeed";
import HotBars from "./pages/HotBars";
import SearchBar from "./pages/SearchBar";
import Wrapper from "./components/Wrapper";
import MakePost from "./components/MakePost";
import HomeFeatures from "./components/HomeFeatures";
import HeatLocationMap from "./components/HeatLocationMap";
import Login from "./components/Login";
import HomeLiveFeed from "./components/HomeLiveFeed";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import BarPage from "./pages/BarPage";

function App() {
  const [userState, setUserState] = useState({
    username: "",
    isLoggedIn: 0
  });

  return (
    <>
      <Router>
        <div>
          <Navbar />
          {/* <Route exact path="/login" component={Form} /> */}
          <Route path="/bars/:barName" component={BarPage} />
          <Route exact path="/register" component={Form} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/newsfeed" component={NewsFeed} />
          {/* <Route exact path="/newsfeed" component={NewsFeed} /> */}
          <Route exact path="/hotbars" component={HotBars} />
          <Route exact path="/search" component={SearchBar} />
          <Route exact path="/contacts" component={Contacts} />
          
        </div>
      </Router>
      <div>
        <HeatLocationMap />
        <Footer />
      </div>
    </>
  );
}

export default App;
