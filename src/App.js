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
import {useState} from "react";
import {useCallback} from "react";


const App =()=> {
    const [edit, setEdit] = useState({})


    const handleEdit = useCallback((editObj) =>{
        setEdit(editObj)
    }, [])

  return (
    <>
      <Header />
        <Routes>
            <Route path='home' element={<Home edit ={edit} />} />
            <Route path='edit' element={<Edit handleEdit={handleEdit} />} />
            <Route path='search' element={<Search />} />
            <Route path='login' element={<Login />} />
        </Routes>
    </>
  );
}

export default App;
