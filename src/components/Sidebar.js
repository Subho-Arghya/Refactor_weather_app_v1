import { useState } from 'react'
//import SideButton from './SideButton'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const [active , setActive ] = useState('Home')
    const navigate = useNavigate()

    const tabsList = [
        {
            id: 1,
            name: "Home",
            
        },
        {
            id: 2,
            name: "Cities",
            
        }
    ]

    const handleClick = (name) => {
        setActive(name)
        console.log(name + " was clicked")
        if (name === "Home") {
            navigate("/")
        } else if (name === "Cities") {
            navigate("/cities")
        }
        
    }
    
    return (
        <div className="sidebar-container">
            {tabsList.map((tab) => {
                return (
                    
                    <button  key={tab.id}
                className={active === tab.name ? 'active-button' : 'inactive-button'} 
                onClick={() => handleClick(tab.name)}>{tab.name}</button>
                
                )
                
            })}
        </div>
    )
}

export default Sidebar
