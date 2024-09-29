import { Route, Routes } from "react-router-dom";
import Listsmartphone from "./components/list-smartphone/listsmartphone";
import Addsmartphone from "./components/add-smartphone/addsmartphone";
import Updatesmartphone from "./components/update-smartphone/updatesmartphone";
import Detailsmatphone from "./components/details-smartphone/detailsmatphone";
import Navbar from "./components/layouts/navbar";
import Login from "./auth/login";


function App() {
 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route   exact path="/"   element={<Listsmartphone />} />
        <Route path="/login"   element={<Login />} />
        <Route path="/add-smartphone/admin" element={<Addsmartphone />} />
        <Route path="/edit-smartphone/admin/:id" element={< Updatesmartphone/>} />
        <Route path="/detail-smartphone/admin/:id" element={< Detailsmatphone/>} />
      </Routes>
    </div>
  );
}

export default App
