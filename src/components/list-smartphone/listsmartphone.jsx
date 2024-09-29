import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Assurez-vous que Bootstrap est importé
import { SearchContext } from "../../context/searchcontext";

export default function Listsmartphone() {
  const [smartphones, setSmartphone] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);

  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    getSmartphone();
  }, []);

  async function getSmartphone() {
    try {
      const response = await fetch("http://localhost:3000/smartphone");
      const data = await response.json();
      if (data) {
        setSmartphone(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(`http://localhost:3000/smartphone/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        getSmartphone();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="py-5 px-4">
      {isLoading ? (
        <h1 className="mt-3"> données en chargement</h1>
      ) : (
        <div className="container py-5">
          <h3 className="">Liste des Smartphones</h3>
          <div className="row py-4">
            {smartphones
              .filter(
                (smartphone) =>
                  smartphone.nom.toLowerCase().includes(searchValue) ||
                  smartphone.nom.toUpperCase().includes(searchValue)
              )
              .map((smartphone) => (
                <div className="col-md-4" key={smartphone.id}>
                  <div className="card mb-4">
                    <img
                      src={smartphone.photo}
                      className="card-img-top"
                      alt={smartphone.nom}
                      height={200}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{smartphone.nom}</h5>
                      <p className="card-text">{smartphone.prix}£ </p>
                      <div className="d-flex justify-content-between">
                        <Link
                          to={`/detail-smartphone/admin/${smartphone.id}`}
                          className="btn btn-primary"
                        >
                          Details
                        </Link>

                        {isAuthenticated ? (
                          <>
                            <Link
                              to={`/edit-smartphone/admin/${smartphone.id}`}
                              className="btn btn-success"
                            >
                              Modifier
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(smartphone.id)}
                            >
                              Supprimer
                            </button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
