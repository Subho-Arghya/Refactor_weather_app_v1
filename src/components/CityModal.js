import { useState , useContext} from "react"
import { CitiesList } from "../helper/constant"
import { MyContext } from "../context/app-context";
import toast, { Toaster, ToastBar } from 'react-hot-toast';


const CityModal = (props) => {
    //const [allCities, setAllCities] = useState(CitiesList)
    const [textInput,setTextInput] = useState("")
    //const [selectedCities, setSelectedCities] = useState([])

    const cityContext = useContext(MyContext)
    const { selectedCities , setSelectedCities , allCities, setAllCities } = cityContext

        

    const handleInput = (e) => {
        setTextInput(e.target.value)
        const filteredCities = CitiesList.filter((city) => {
            return(
                city.name.toLowerCase().includes(e.target.value.toLowerCase()) && !selectedCities.includes(city)
            )            
        })
        //console.log(filteredCities)
        setAllCities(filteredCities)
    }

    const handleAddCity = (city) => {
        let allSelected = [...selectedCities, city]
        //console.log(allSelected)
        setSelectedCities(allSelected)
        notifyCityAdd(city.name)
        let unselected = allCities.filter((c) => {
            return (
                c !== city
            )
        })
        setAllCities(unselected)
    }

    const handleOutsideClick = (e) => {
        e.preventDefault();
        props.handleModalClose()
    } 

    const notifyCityAdd = (name) => 
    {

        toast.success(`City: ${name} Added.`);
    }
        
    

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-display">
                    <div className="modal-header">
                        <div><h3>Add City Modal</h3></div>
                        <div className="close-button" onClick={props.handleModalClose}>&#10005;</div>
                    </div>
                    <div className="modal-input">
                        <input type="text" 
                        placeholder="Enter city name"
                        onChange={handleInput} value={textInput}></input>
                    </div>
                    <div className="modal-cities-section">
                        {allCities.map( (city) => {
                            return (
                                <div className="single-city" 
                                onClick={() => handleAddCity(city)}
                                key={city.id}>
                                    <div>{city.name}</div>
                                    <div><button style={{cursor: "pointer"}}>
                                    &#43;
                                    </button></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="bg-clicker" onClick={handleOutsideClick}></div>
                <Toaster>
                {(t) => (
                    <ToastBar
                      toast={t}
                      style={{
                        ...t.style,
                        animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
                      }}
                    />
                  )}
                </Toaster>
            </div>
            
        </>
    )
}
export default CityModal
