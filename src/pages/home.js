
import { MyContext } from "../context/app-context";
import Star from "../components/Star";
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';

const Home = () => {
    let homeContext = useContext(MyContext)

    const { favoriteCities, setFavoriteCities, selectedCities, setSelectedCities } = homeContext

    const handleRemoveFavorite = (item) => {

        const c1 = selectedCities.filter((c) => c.id === item.id)
        c1[0].is_checked = !item.is_checked 

        const slt = selectedCities.filter(ob=>ob.id !== item.id)
        const ob = [...slt, c1[0]]

        
        let newFaves = favoriteCities.filter((city) => city.id !== item.id)
        setFavoriteCities(newFaves)
        toast.error(`${item.name} removed from favorites`)
        setSelectedCities(ob)
    } 
    
    
    return (
        <div className="home-container" style={{ marginLeft : "200px" }}>
            {(favoriteCities.length > 0) ? favoriteCities.map((city) => {
                return(
                    <div className="single-fav-city" key={city.id}>
                    <div className="single-fav-city-header">
                        {city.name}
                        <div onClick={() =>handleRemoveFavorite(city)}>
                        <Star isFavorite={city.is_checked ? true: false}/>
                        </div>                        
                    </div>
                    <div className="single-fav-city-desc">
                        <p>{city.desc}</p>
                    </div>
                    <div className="single-fav-city-details">
                        <p><span>Temperature: </span>{city.temp}</p>
                        <p><span>Humidity: </span>{city.humidity}</p>
                    </div>
                    
                </div>
                )
                
            }) : <p>There are no cities selected as favorite yet</p>}
            <Toaster />
        </div>
    )
}

export default Home