import React from 'react';
import Chart from 'chart.js';
import axios from 'axios';
let data = [];

axios
.get(`/api/posts/danny's/Sunday`)
.then(res => {
    res.data.forEach(res => {
        data.push(res.time)
    })
})



export default class ChartJs extends React.Component {
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}
