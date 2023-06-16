import React, {useEffect, useState} from "react";
import axios from "axios";

function ZipComponent(props) {
  const [zipCode, setZipCode] = useState([]);
    // pokeList  === this.state.pokeList
    // setPokeList === this.state.pokeList

    useEffect(() => {
        async function fetchZip() {
            try {
                const list = await axios.get("");
                setZipCode(list.data.results);
                // this.setState(list.data.results)
            } catch (error) {
                console.error(error);
            }
        }
        fetchZip();
    }, []);
    console.log(props);

    function handleSubmit(){
      console.log("submitted");
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