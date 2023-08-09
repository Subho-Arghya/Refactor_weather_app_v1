import { useState } from "react"
import Button from "./Button.js"
import CityModal from "./CityModal.js"

const Header = (props) => {

    const [ showModal, setShowModal] = useState(false)

   /* const headerMessage = () => {
        return "My Favorite cities"
    }*/

    const handleClickButton = () => {
        console.log("Will Launch Modal")
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }
    return (
        <div>
        <div className="header-wrapper">
            <div>
                <h3>{props.headerMessage && props.headerMessage}</h3>
            </div>
            <div>
                <Button title="Add New City" handleClick={handleClickButton} />
            </div>
        </div>
            {showModal ? <CityModal handleModalClose={handleModalClose}/> : <></>}
        </div>
    )

}

export default Header