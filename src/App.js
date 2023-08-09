//import logo from './logo.svg';
import AppRoute from "./Routes/AppRoute"


import "./App.css";
import { ApplicationContextProvider } from "./context/app-context";

function App() {
  return (

    <div className="App">
      <ApplicationContextProvider>
        <AppRoute />
      </ApplicationContextProvider>
    </div>

  );
}

export default App;
