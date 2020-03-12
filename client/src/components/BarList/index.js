import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';


function BarList () {
    const [barSearch, setBarSearch] = useState(); 
    const [results, setResults] = useState();

    function handleSearchChange(event) {
        // let parsedName = (event.target.value.replace(/\s/g, '')).toLowerCase();
        setBarSearch(event.target.value)
        // console.log(barSearch);
    }

    function handleFormSubmit(event) {
        let url = barSearch.replace(/\s/g, '').toLowerCase();
        event.preventDefault();
        axios
        .get(`http://localhost:3002/api/bars/${url}`)
        .then(res => {
            // console.log(res.data);
            if (res.data !== null ) {
            window.location.href = `/bars/${url}`
            
            }
            if (res.data === null) {
                setResults('No posts have been made about this bar. Search again.')
                console.log(results)
               

            }
        })
    }


// let resultUrl;

    


const style = {
    color: 'red'
}





    return (
        <div>
           <form className="form" action="/action_page.php">
            <label for="bars">Search for a bar:</label>
            <input name="barName" type="text" placeholder="bar name" onChange={handleSearchChange}></input>
            <button onClick={handleFormSubmit} className="btn btn-primary mb-2">Submit</button>
            </form>
            <span style={style}>{results}</span>
        </div>
    )
}

export default BarList;