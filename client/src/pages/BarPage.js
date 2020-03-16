
import React, {useState, useEffect, PureComponent} from "react";
import axios from "axios";
import LinearGraph from '../components/LinearGraph';
import { set } from "mongoose";


function BarPage() {

  const style = {
    width: '300px', 
    height: '200px'
  
  }
    

  const [barPosts, setBarPosts] =useState([]);
  const [avgTime, setAvgTime] = useState();
  const [urlName, setUrlName] = useState(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
  const [barName, setBarName] = useState();
  let resData = [];
  const styleDiv = {
    borderStyle: 'solid', 
    padding: '0.5rem', 
    margin: '0.5rem'
  }

  const styleSpan = {
    fontSize: '2rem'
  }

// const data = [];


  useEffect(() => {
    loadPosts(urlName);
    // console.log(urlName);
  })

 

  function loadPosts() {

    
    // if (parsedInfo.isLoggedIn === 1) {
    //   console.log('there is a user logged in')
    // console.log(window.location)
    // }
    axios
      .get(`/api/bars/${urlName}`)
      .then(res => {
          // console.log(res.data.posts);
        // console.log(res.data)
        // console.log(res.data)
        setBarName(res.data.barName)
        setBarPosts(res.data.posts)

   
        // console.log(barPosts)
        let avg; 
        res.data.posts.forEach(post => {
          //  console.log(post.date)
        })
      })
      .then(res => {
        // console.log(barPosts)
        // barPosts.forEach(post => 
        //     {
            //    data.push({name: 'Page A', uv: 5, pv: 5, amt: 3000}, 
            //    {name: 'Page B', uv: 5, pv: 5, amt: 3000}, 
            //    {name: 'Page C', uv: 5, pv: 5, amt: 3000}, 
            //    {name: 'Page D', uv: 5, pv: 5, amt: 3000})
            // })
        // console.log(data);
        // console.log(dates);
        // console.log(dates)

      })
    //   axios
    // .get(`http://localhost:3002/api/posts/danny's/Sunday`)
    // .then(res => {
    //   // console.log(res.data)
      
    //   res.data.forEach(post => {
    //     resData.push({
    //       hour: post.formattedDate, time: post.time
    //     })
    //   })
    //   // setData(resData);
    //   // console.log(resData);
    // });

      
    }

  
 return (
   <div>
     <div className={style}>
    <LinearGraph></LinearGraph>
    </div>
       <h2>{barName}</h2>
   {barPosts.slice(0).reverse().map(post => {
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
                  <div style={styleSpan}>{post.username}: 
                    <span>This bar had a <span style={time}>{post.time} minute wait</span></span>.</div>
                    <div> {post.comment}</div><div> Bouncer experience: <span style={badge}>{post.bouncer}</span>.</div>
              </div>)}
 )}</div>

 )

  
}

export default BarPage;