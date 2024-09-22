import { Route, Routes } from "react-router-dom";
import Listsmartphone from "./components/list-smartphone/listsmartphone";
import Addsmartphone from "./components/add-smartphone/addsmartphone";
import Updatesmartphone from "./components/update-smartphone/updatesmartphone";
import Detailsmatphone from "./components/details-smartphone/detailsmatphone";


function App() {
 

  return (
    <div>
      <Routes>
        <Route   exact path="/"   element={<Listsmartphone />} />
        <Route path="/add-smartphone" element={<Addsmartphone />} />
        <Route path="/edit-smartphone/:id" element={< Updatesmartphone/>} />
        <Route path="/detail-smartphone/:id" element={< Detailsmatphone/>} />
      </Routes>
    </div>
  );
}

export default App
