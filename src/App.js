import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Search from "./components/Search";
import Login from "./components/Login";


const App =()=> {
  return (
    <>
      <Header />
        <Routes>
            <Route path='home' element={<Home />} />
            <Route path='edit' element={<Edit/>} />
            <Route path='search' element={<Search />} />
            <Route path='login' element={<Login />} />
        </Routes>
    </>
  );
}

export default App;
