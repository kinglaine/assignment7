import React, {useEffect, useState} from "react";
import axios from "axios";

function ZipComponent(props) {
  const [zipCode, setZipCode] = useState("");
  const [zipInfo, setZipInfo] = useState(null);

    async function handleSubmit(event){
      event.preventDefault();
      console.log("submitted");
      try {
                //link should be in the form of https://zip-api.eu/api/v1/radius/US-11373/5/km
                //try 5 km first
                const list = await axios.get(`https://zip-api.eu/api/v1/radius/US-${zipCode}/5/km`);
                setZipInfo(list.data);
                console.log("testing", list);
                console.log("testing data", list.data);
                // this.setState(list.data.results)
            } catch (error) {
                console.error(error);
            }
    }

    function handleChange(event){
      console.log(event.target.value);
      setZipCode(event.target.value);
    }

  return (
    <div>
      <form >
        <input onChange={handleChange}>

        </input>
        <button type="submit" onClick={handleSubmit}>submit</button>
      </form>
      <h1>Cities</h1>
      {zipInfo?.map((zipData, ind)=>{
        return(
        <div  key={zipData.postal_code}>
          <p>Postal Code:{zipData.postal_code}</p>
          <p>State:{zipData.state}</p>  
          <p>city:{zipData.place_name}</p>
          <br></br>
        </div>)
      })}
    </div>
  )
}

export default ZipComponent