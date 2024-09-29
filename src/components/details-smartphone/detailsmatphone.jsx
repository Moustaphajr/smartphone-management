import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detailsmatphone() {
  const [smartphone, setSmartphone] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOneSmartphone();
  }, []);

  async function getOneSmartphone() {
    try {
      const response = await fetch(`http://localhost:3000/smartphone/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        setSmartphone(data); 
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container py-5">
      {smartphone ? (
        <div className="card shadow p-4" style={{ borderRadius: "15px" }}>
          <h2 className="text-center mb-4">Détails du smartphone {smartphone.nom} </h2>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">Photo</th>
                <td>
                  <img 
                    src={smartphone.photo} 
                    alt={smartphone.nom} 
                    className="img-fluid" 
                    style={{ maxWidth: "80px" }} 
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Marque</th>
                <td>{smartphone.marque}</td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td>{smartphone.description}</td>
              </tr>
              <tr>
                <th scope="row">Prix</th>
                <td>{smartphone.prix}</td>
              </tr>
              <tr>
                <th scope="row">RAM</th>
                <td>{smartphone.ram}</td>
              </tr>
              <tr>
                <th scope="row">ROM</th>
                <td>{smartphone.rom}</td>
              </tr>
              <tr>
                <th scope="row">Écran</th>
                <td>{smartphone.ecran}</td>
              </tr>
              <tr>
                <th scope="row">Couleurs</th>
                <td>{smartphone.couleurs.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h3>Chargement des détails du smartphone...</h3>
      )}
    </div>
  );
}
