import React, {useEffect, useState} from "react";
import axios from "axios";

function ZipComponent(props) {
  const [zipCode, setZipCode] = useState("");
  const [zipInfo, setZipInfo] = useState(null);
    // pokeList  === this.state.pokeList
    // setPokeList === this.state.pokeList
    //api url format https://zip-api.eu/api/v1/radius/[country_code]-[postal_code]/[distance]/[unit]
    // useEffect(() => {
    //     async function fetchZip() {
    //         try {
    //             //link should be in the form of https://zip-api.eu/api/v1/radius/US-11373/5/km
    //             //try 5 km first
    //             const list = await axios.get(`https://zip-api.eu/api/v1/radius/US-${zipCode}/5/km`);
    //             setZipCode(list.data.results);
    //             // this.setState(list.data.results)
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchZip();
    // }, []);
    // console.log(props);

    async function handleSubmit(event){
      event.preventDefault();
      console.log("submitted");
      try {
                //link should be in the form of https://zip-api.eu/api/v1/radius/US-11373/5/km
                //try 5 km first
                const list = await axios.get(`https://zip-api.eu/api/v1/radius/US-${zipCode}/5/km`);
                setZipInfo(list.data.results);
                console.log("testing", list);

                // this.setState(list.data.results)
            } catch (error) {
                console.error(error);
            }
      //call fetchzip here
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
    </div>
  )
}

export default ZipComponent