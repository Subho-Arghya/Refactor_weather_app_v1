import Header from "./Header";
import Sidebar from "./Sidebar";

const StaticUI = (props) => {
    return (
        <>
        <Header headerMessage={props.headerMessage}/>
        <Sidebar />
        {props.children}
        </>
    )
}

export default StaticUI