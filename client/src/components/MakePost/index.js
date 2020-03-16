import React, { Component, useState } from "react";
import axios from "axios";
import moment from 'moment';

function MakePost() {

  let userInfo = localStorage.getItem("newUser");
  let parsedInfo = JSON.parse(userInfo);
  const [barName, setBarName] = useState("");
  const [comment, setComment] = useState("");
  const [bouncer, setBouncer] = useState("");
  const [time, setTime]= useState("");
  // const [currentDate, setCurrentDate] = useState("");
  


  function handleBarChange (event) {

    setBarName(event.target.value);
    // console.log(barName)


  };

  function handleBouncerChange (event) {

    setBouncer(event.target.value);
    // console.log(barName)


  };


  function handleTimeChange (event) {

    setTime(event.target.value);
    // console.log(time)

  }

  function handleCommentChange(event) {
    setComment(event.target.value)
  }

  function handleFormSubmit (event) {
    event.preventDefault();
    let now = moment().format('MM/DD/YYYY, h:mm a');
    let dayOfWeek = moment().format('dddd');
    let formattedDate = moment().format('h a');
    // console.log(userName.match.params.id)
    // Preventing the default behavior of the form submit (which is to refresh the page)
    let parsedName = (barName.replace(/\s/g, '')).toLowerCase();
    axios.post(`https://cors-anywhere.herokuapp.com/http://localhost:3002/api/posts`, 
    {username: parsedInfo.username, barName: barName, urlName: parsedName, time: time, comment: comment, bouncer: bouncer, date: now, formattedDate: formattedDate, dayOfWeek: dayOfWeek})
    .then(res => {
      // console.log(res);
      // console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });
    
    axios.get(`https://cors-anywhere.herokuapp.com/http://localhost:3002/api/bars/${parsedName}`)
    .then(res => {
      // console.log(res.data)
      if (res.data === null) {
        axios.post(`https://cors-anywhere.herokuapp.com/http://localhost:3002/api/bars`, 
        {barName: barName, urlName: parsedName, posts: {username: parsedInfo.username, time: time, comment: comment, bouncer: bouncer, date: now, formattedDate: formattedDate, dayOfWeek: dayOfWeek}})
        .then(res => {
          // console.log(res);
          // console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
      else  {
        console.log('they are the same')
        axios
        .put(`https://cors-anywhere.herokuapp.com/http://localhost:3002/api/bars/${parsedName}`,
       
          {username: parsedInfo.username, time: time, comment: comment, bouncer: bouncer, date: now, formattedDate: formattedDate, dayOfWeek: dayOfWeek}
        )
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }
    }

      )

    // if (parsedInfo.username === null) {
    //   alert('please log in to continue.')
    // } else {

    //   axios
    //   .post(
    //     "http://localhost:3002/api/posts",
    //     { barName: barName, time: time, username: parsedInfo.username },
    //     // console.log("i made it into the frontend post route")
    //   )
    //   .then(res => {
    //     // console.log(res);
    //     // console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // }
  

  }

  return (
    <div>

       
        <form className="form" action="/action_page.php">
        <label for="bars">Where are you checking in?</label>
          <input value={barName} name="barName" type="text" placeholder="bar name" onChange={handleBarChange}>
          {/* <option value="Select an option">Select an option</option>
            <option value="Danny's">Danny's</option>
            <option value="OGs">OGs</option>
            <option value="Hangge Uppe">Hangge Uppe</option>
            <option value="bar123">bar123</option> */}
          </input>
          <input
            value={time}
            name="time"
            onChange={handleTimeChange}
            type="number"
            placeholder="wait time"
          />
          <input
            value={comment}
            name="comment"
            onChange={handleCommentChange}
            type="text"
            placeholder="comments..."
          />
          <span>Bouncer experience:</span>
          <select value={bouncer} id="bouncer experience" name="bouncer" onChange={handleBouncerChange}>
          <option value="Choose">Choose your rating</option>
          <option value="Great">Great</option>
          <option value="Good">Good</option>
          <option value="Fine">Fine</option>
          <option value="Bad">Bad</option>
        </select>
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>

  )



}

export default MakePost;

// class MakePost extends Component {
  
//   // Setting the component's initial state
//   constructor(props){
//     super(props);
//   }
//   state = {
//     barName: "",
//     time: ""
//   };

  

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     const name = event.target.name;
//     let value = event.target.value;
    

//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     if (!this.state.barName) {
//       alert("Fill out your barname please!");
//     }
//     console.log(this.state);
//     axios
//       .post(
//         "http://localhost:3001/api/posts",
//         { barName: this.state.barName, time: this.state.time, username: this.props.userInfo.username },
//         console.log("i made it into the frontend post route")
//       )
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//         this.setState({
//           barName: "",
//           time: ""
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
//         <p>Hello {this.state.barName}</p>
//         <form className="form" action="/action_page.php">
//         <label for="bars">Choose a bar:</label>
//           <select value={this.state.barName} name="barName" onChange={this.handleInputChange}>
//           <option value="Select an option">Select an option</option>
//             <option value="Danny's">Danny's</option>
//             <option value="OGs">OGs</option>
//             <option value="Hangge Uppe">Hangge Uppe</option>
//             <option value="Happy Camper">Happy Camper</option>
//           </select>
//           <input
//             value={this.state.time}
//             name="time"
//             onChange={this.handleInputChange}
//             type="number"
//             placeholder="time"
//           />
//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default MakePost;
