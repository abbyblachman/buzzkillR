import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Profile from "./pages/profile";
import NewsFeed from "./pages/newsfeed";
import HotBars from "./pages/HotBars";
import SearchBar from "./pages/SearchBar";
import Wrapper from "./components/Wrapper";
// import MakePost from "./components/MakePost";
import Register from './components/Register'

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
          <Route exact path="/login" render={(props) => <Form {...props} userInfo={userState}/>} />
          {/* <Route exact path="/register" component={Register}/> */}
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/newsfeed" component={NewsFeed} /> */}
          <Route exact path="/newsfeed" render={(props) => <NewsFeed {...props} userInfo={userState}/>} />
          <Route exact path="/hotbars" component={HotBars} />
          <Route exact path="/search" component={SearchBar} />

          {/* <MakePost /> */}
        </div>
      </Router>

      <Wrapper />
    </>
  );
}

export default App;
