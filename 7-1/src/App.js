import { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import CountryDetail from './CountryDetail'

//https://dog.ceo/api/breeds/image/random
function App() {
  let [dogImg, setDogImg] = useState('')
  let [coolDogs, setCoolDogs] = useState([])
  let [countries, setCountries] = useState([])

  useEffect(async function () { //When component mounts this fires

    let res = await axios.get(`https://dog.ceo/api/breeds/image/random`)
    setDogImg(res.data.message)

    let res2 = await axios.get(`https://ironrest.herokuapp.com/coolDogs`)
    setCoolDogs(res2.data)

    let res3 = await axios.get(`https://restcountries.eu/rest/v2/all`)
    setCountries(res3.data)
  }, [])

  const saveThisDog = async () => {
    let res = await axios.post(`https://ironrest.herokuapp.com/coolDogs`, { imgUrl: dogImg })
  }

  const ShowCoolDogs = () => {
    return coolDogs.map(eachCoolDog => {
      return <img key={eachCoolDog._id} src={eachCoolDog.imgUrl} width="100px" />
    })
  }

  //https://restcountries.eu/rest/v2/name/Spain
  const ShowCountries = () => {
    return countries.map(eachCountry => {
      return <Link to={`/country/${eachCountry.name}`} key={eachCountry.name}>{eachCountry.name}</Link >
    }
    )
  }

  return (
    <div className="App">
      <h3>Working with APIs</h3>
      <button onClick={saveThisDog} >Save</button>
      <hr />
      <img width="50%" src={dogImg} />

      <div>
        <h4>My Fav Dogs</h4>
        <ShowCoolDogs />
      </div>
      <ShowCountries />


      <Switch>
        <Route exact path="/country/:countryName" render={(props) => <CountryDetail {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
