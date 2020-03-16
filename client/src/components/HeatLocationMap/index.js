import React from "react";

function HeatLocationMap() {
  return (
    <iframe src="https://cors-anywhere.herokuapp.com/http://data.cityofchicago.org/dataset/Chicago-Bar-Heat-Map/n73w-tj74/embed?width=800&height=600" width={800} height={600} style={{border: 0, paddingTop: 50, paddingBottom: 50, marginRight: 175, marginLeft: 175}} />
    );
    }

  export default HeatLocationMap;