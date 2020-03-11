
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import MakePost from '../components/MakePost';
import axios from "axios";
import SimpleMap from "./../components/map";

function NewsFeed() {

  let userInfo = localStorage.getItem("newUser");
  let parsedInfo = JSON.parse(userInfo);

  const [newsFeedPosts, setNewsFeedPosts] =useState([]);

  useEffect(() => {
    loadPosts();
  })

  function loadPosts() {
    
    // if (parsedInfo.isLoggedIn === 1) {
    //   console.log('there is a user logged in')
    // }
    axios
      .get("http://localhost:3002/api/posts")
      .then(res => {
        console.log(res.data)
        setNewsFeedPosts(res.data)
      })
    }

    const styleDiv = {
      borderStyle: 'solid', 
      padding: '0.5rem', 
      margin: '0.5rem'
    }

    const styleSpan = {
      fontSize: '2rem'
    }

    

  
 return (
   <div>
      <MakePost></MakePost>
   {newsFeedPosts.slice(0).reverse().map(post => {
     if (post.bouncer === 'Great') {
      var badge = {
        color: 'white', 
        backgroundColor: 'green', 
        padding: '0.2rem'
      }
     }
     if (post.bouncer === 'Good') {
      var badge = {
        color: 'black', 
        backgroundColor: '#9FFF33', 
        padding: '0.2rem'
      }
     }
     if (post.bouncer === 'Fine') {
      var badge = {
        color: 'black', 
        backgroundColor: '#FFC300', 
        padding: '0.2rem'
      }
     }
     if (post.bouncer === 'Bad') {
      var badge = {
        color: 'white', 
        backgroundColor: 'red', 
        padding: '0.2rem'
      }
     }
     if (post.time > 20) {
      var time = {
        color: 'red'
      }
    }
    if (post.time <= 5) {
      var time = {
        color: 'green'
      }
    }
     

                 return (
                   <div style={styleDiv} key={post._id}> {(post.date)} 
                       <div style={styleSpan}>{post.username}: <strong>
                         <Link to={`/bars/${post.urlName}`}>{post.barName}</Link>:  
                         </strong>
                         <span> had a <span style={time}>{post.time} minute wait</span></span>.</div>
                         <div> {post.comment}</div><div> Bouncer experience: <span style={badge}>{post.bouncer}</span>.</div>
                   </div>)}
 )}</div>

 )

  
}

export default NewsFeed;
