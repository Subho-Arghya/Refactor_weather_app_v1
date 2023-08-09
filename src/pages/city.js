import { useState , useContext, useEffect } from "react";
import CityModal from "../components/CityModal";
import Star from "../components/Star";
import  toast , { Toaster } from "react-hot-toast";

import { MyContext } from "../context/app-context";

const City = () => {
  const [showModal, setShowModal] = useState(false);
  //const [ displayCity, setDisplayCity] = useState(null)
  const cityContext = useContext(MyContext)

  const {selectedCities ,  setSelectedCities , favoriteCities, setFavoriteCities,
  currentCity, setCurrentCity } = cityContext
  
  useEffect(() => {
    if (selectedCities && currentCity) {
      let city1 = selectedCities.filter((c) => c.id === currentCity.id)
      setCurrentCity(city1[0])
    }
  }, [])
  
  const handleCityModalOpen = (e) => {
    e.preventDefault();
    //console.log("Add city modal");
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false)
}

  const handleDisplayCity = (city) => {
    let displayed = {...city}
    //console.log(displayed)
    //setDisplayCity(displayed)
    const c = selectedCities.filter(ob=>ob.id === city.id)
    city.is_checked = c[0].is_checked
    console.log(city)
    setCurrentCity(displayed)
  }

  const handleFavorite = () => {    
    const c1 = selectedCities.filter(c=>c.id === currentCity.id)
    c1[0].is_checked = !currentCity.is_checked
     
    const slt = selectedCities.filter(ob=>ob.id !== currentCity.id)
    const tmp = [...slt, c1[0]]

    
    if(c1[0].is_checked === true){
      toast.success(`${currentCity.name} added to favorites`);
      let newFav = [...favoriteCities, c1[0]] 
      setFavoriteCities(newFav)
    }
    else{
      const fav = favoriteCities.filter(ob=>ob.id !== c1[0].id)
      setFavoriteCities(fav)
      toast.error(`${currentCity.name} removed to favorites`);
    }
    setSelectedCities(tmp)

    const setter1 = { ...currentCity , is_checked : c1[0].is_checked }
    setCurrentCity(setter1)

    
    /*if (!favoriteCities.includes(currentCity)) {
      let newFav = [...favoriteCities, currentCity]      
      setFavoriteCities(newFav)
      toast.success(`${currentCity.name} added to favorites`);
      
    } else {
      let newFav = favoriteCities.filter((city) => currentCity.name !== city.name)
      //console.log(newFav)
      setFavoriteCities(newFav)
      toast('❌City removed from favorites');
    }*/
  }

  return (
    <>
      <div style={{ marginLeft: "200px" }}>
        <div className="city-container">
          <div className="city-selection">
            <div className="city-selection-header">
              <div>
                <h3>Cities</h3>
              </div>
              <div>
                <button
                  onClick={(e) => handleCityModalOpen(e)}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #222",
                    fontSize: "1.3em",
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="city-selection-body">
              {selectedCities.length > 0 ? selectedCities.map( (city) => {
                return (
                  <div className="selected-city" 
                  onClick={() => handleDisplayCity(city)}
                  key={city.name}>
                    <div>{city.name}</div>
                    <div>{city.temp}</div>
                  </div>
                )
              }) : <div>No cities added</div> }
              
            </div>
          </div>
          {currentCity && <div className="city-description">
          <div className="city-description-header">
            <div><h4>{currentCity.name}</h4></div>
            <div onClick={handleFavorite}>
                <Star isFavorite={ currentCity.is_checked ? true : false}/>
              </div>
                        
            
            <Toaster/>
          </div>
          <div className="city-description-body">
          <div className="city-desc-content-inner">
            <p id="description">{currentCity.desc}</p>
            <br />
            <p className="inner-det"><span>Temperature : </span>{currentCity.temp}</p>
            <p className="inner-det"><span>Humidity : </span>{currentCity.humidity}</p></div>
          </div>
      </div>}
          
        </div>
      </div>
      {showModal ? <CityModal handleModalClose={handleModalClose}/> : <></>}
    </>
  );
};

export default City;
