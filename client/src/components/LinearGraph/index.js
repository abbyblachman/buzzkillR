import React, {useState, useEffect} from 'react';
import {HorizontalBar, Line} from 'react-chartjs-2';
import axios from 'axios';

function LinearGraph() {

const [hour8, setHour8] = useState();
const [hour9, setHour9] = useState();
const [hour10, setHour10] = useState();
const [hour11, setHour11] = useState();
const [hour12, setHour12] = useState();
const [hour1, setHour1] = useState();
const [hour2, setHour2] = useState();
const [url, setUrl]= useState();
let hour8set = 0;
let hour8length = 0;
let hour9set = 0;
let hour9length = 0;
let hour10set = 0;
let hour10length = 0;
let hour11set = 0;
let hour11length = 0;
let hour12set = 0;
let hour12length = 0;
let hour1set = 0;
let hour1length = 0;
let hour2set = 0;
let hour2length = 0;


useEffect(() => {
  API();
})


function API () {
  let path = window.location.pathname;
let part = path.split('/').pop();
axios
  .get(`/api/bars/${part}`)
  .then(res => {
    res.data.posts.forEach(post => {
      if (post.formattedDate === '8 pm') {
         hour8set += post.time;
         hour8length ++;
        //  setHour8(post.time);
      }
      if (post.formattedDate === '9 pm') {
        hour9set += post.time;
        hour9length ++;
      }
      if (post.formattedDate === '10 pm') {
        hour10set += post.time;
        hour10length ++;
      }
      if (post.formattedDate === '11 pm') {
        hour11set += post.time;
        hour11length ++;
      }
      if (post.formattedDate === '12 am') {
        hour12set += post.time;
        hour12length ++;
      }
      if (post.formattedDate === '1 am') {
        hour1set += post.time;
        hour1length ++;
      }
      if (post.formattedDate === '2 am') {
        hour2set += post.time;
        hour2length ++;
      }
    })
  
    // console.log(hour9set + 'and' + hour9length)
    setHour8((hour8set/hour8length))
    setHour9((hour9set/hour9length))
    setHour10((hour10set/hour10length))
    setHour11((hour11set/hour11length))
    setHour12((hour12set/hour12length))
    setHour1((hour1set/hour1length))
    setHour2((hour2set/hour2length))
  });
}



const data = {
  labels: ['8pm', '9pm', '10pm', '11pm', '12am', '1am', '2am'],
  datasets: [
    {
      label: 'Average wait times',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [hour8, hour9, hour10, hour11, hour12, hour1, hour2]
    }
  ]
};

const style = {
  maxWidth: '50%', 
  position: 'relative'
}




  // displayName: 'BarExample'

    return (
      <div style={style}>
        <h2>Wait times by hour</h2>
        <HorizontalBar data={data}/>
      </div>
    );
  }

export default LinearGraph;


