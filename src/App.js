import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import ServiceRegister from "./routes/register/service-register.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Service from "./routes/services/service.component";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='register/*' element={<ServiceRegister/>}/>
                <Route path='sign-in' element={<SignIn/>}/>
                <Route path='service' element={<Service/>}/>

            </Route>
        </Routes>
    );
}

export default App;
