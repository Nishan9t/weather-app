
import './App.css';
import Search from './Components/Search';
import Result from './Components/Result';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [search,setSearch] = useState("");
  const [weather,setWeather] = useState([]);
  const [history,setHistory]=useState([])

  const changeSearch=(value)=>{
    setSearch(value);
  }
//icon => https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


  const searchWeatherHandler=()=>{
   
    if(search !=="")
    {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=936c3efbb52773e196ed8950141edcdd&units=metric`
      )
      .then(
        (response)=>{
          //adding data in history
          if(history.indexOf(search)=== -1){
            setHistory(
              [
                ...history,search
              ]
            )
          }
          console.log(response.data)
         setWeather(response.data)
        }
      ).catch(
        (error)=>{
          console.log(error)
        }
      )
    }
   

  }

  // useEffect(()=>{
  //   if(search !=="")
  //   {
  //     getWeatherData();
  //   }
  // },[search])da



  //we have to use asyn await because setSeacrh is asynchronous funtion and it takes time
  const historySearchHandlder= async(data)=>{
    await setSearch(data);

    if(data !=="")
    {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=936c3efbb52773e196ed8950141edcdd&units=metric`
      )
      .then(
        (response)=>{
          //adding data in history
          if(history.indexOf(data)=== -1){
            setHistory(
              [
                ...history,data
              ]
            )
          }
          console.log(response.data)
         setWeather(response.data)
        }
      ).catch(
        (error)=>{
          console.log(error)
        }
      )
    }
  }


  return (
    <div className='max-w-[1240px] mx-auto mt-2 p-3'>
      <Search searchData={search} eventHandle={changeSearch} searchWeather={searchWeatherHandler}/>
      <Result weatherData={weather} historyData={history} historySearch={historySearchHandlder}/>
    </div>

  );
}

export default App;
