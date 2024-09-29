import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Updatesmartphone() {
  const [smartphone, setSmartphone] = useState();
  const [updateSmartphone, setUpdateSmartphone] = useState({
    nom: "",
    marque: "",
    description: "",
    prix: "",
    photo: "",
    ram: "",
    rom: "",
    ecran: "",
    couleurs: [],
  });

  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleUpdateSmartphone = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/smartphone/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateSmartphone),
      });

      const data = await response.json();
      if (data) {
        setUpdateSmartphone({
          nom: "",
          marque: "",
          description: "",
          prix: "",
          photo: "",
          ram: "",
          rom: "",
          ecran: "",
          couleurs: [],
        });

        console.log(data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center py-5">
      <div className="card shadow p-4" style={{ borderRadius: "15px", width: "50%" }}>
        <h2 className="text-center mb-4">Modifier un smartphone</h2>
        <form onSubmit={handleUpdateSmartphone}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="nom">Nom</label>
                <input
                  id="nom"
                  onChange={(e) =>
                    setUpdateSmartphone({
                      ...updateSmartphone,
                      nom: e.target.value,
                    })
                  }
                  value={updateSmartphone.nom}
                  type="text"
                  placeholder={smartphone?.nom || "Nom"}
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="marque">Marque</label>
                <input
                  id="marque"
                  onChange={(e) =>
                    setUpdateSmartphone({
                      ...updateSmartphone,
                      marque: e.target.value,
                    })
                  }
                  value={updateSmartphone.marque}
                  type="text"
                  placeholder={smartphone?.marque || "Marque"}
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  onChange={(e) =>
                    setUpdateSmartphone({
                      ...updateSmartphone,
                      description: e.target.value,
                    })
                  }
                  value={updateSmartphone.description}
                  type="text"
                  placeholder={smartphone?.description || "Description"}
                  className="form-control"
                />
              </div>

              <div className="col-md-4 mt-3">
                <label htmlFor="prix">Prix</label>
                <input
                  id="prix"
                  onChange={(e) =>
                    setUpdateSmartphone({
                      ...updateSmartphone,
                      prix: e.target.value,
                    })
                  }
                  value={updateSmartphone.prix}
                  type="text"
                  placeholder={smartphone?.prix || "Prix"}
                  className="form-control"
                />
              </div>
              <div className="col-md-4 mt-3">
                <label htmlFor="ram">RAM</label>
                <input
                  id="ram"
                  onChange={(e) =>
                    setUpdateSmartphone({
                      ...updateSmartphone,
                      ram: e.target.value,
                    })
                  }
                  value={updateSmartphone.ram}
                  type="text"
                  placeholder={smartphone?.ram || "RAM"}
                  className="form-control"
                />
              </div>
              <div className="col-md-4 mt-3">
                <label htmlFor="rom">ROM</label>
                <input
                  id="rom"
                  onChange={(e) =>
                    setUpdateSmartphone({
                      ...updateSmartphone,
                      rom: e.target.value,
                    })
                  }
                  value={updateSmartphone.rom}
                  type="text"
                  placeholder={smartphone?.rom || "ROM"}
                  className="form-control"
                />
              </div>

              <div className="col-md-4 mt-3">
                <label htmlFor="ecran">Écran</label>
                <input
                  id="ecran"
                  onChange={(e) =>
                    setUpdateSmartphone({
                      ...updateSmartphone,
                      ecran: e.target.value,
                    })
                  }
                  value={updateSmartphone.ecran}
                  type="text"
                  placeholder={smartphone?.ecran || "Écran"}
                  className="form-control"
                />
              </div>
              <div className="col-md-4 mt-3">
                <label htmlFor="couleurs">Couleurs</label>
                <input
                  id="couleurs"
                  onChange={(e) =>
                    setUpdateSmartphone({
                      ...updateSmartphone,
                      couleurs: [e.target.value],
                    })
                  }
                  value={updateSmartphone.couleurs}
                  type="text"
                  placeholder={smartphone?.couleurs?.join(", ") || "Couleurs"}
                  className="form-control"
                />
              </div>

              {/* Centering the photo */}
              <div className="col-md-4 mt-3 ">
                <label htmlFor="photo">Photo</label>
                <input
                  id="photo"
                  onChange={(e) =>
                    setUpdateSmartphone({
                      ...updateSmartphone,
                      photo: e.target.value,
                    })
                  }
                  value={updateSmartphone.photo}
                  type="text"
                  placeholder="Ajouter une photo"
                  className="form-control mb-2"
                />
                
              </div>
            </div>

            {/* Center the button */}
            <div className="d-flex  justify-content-center mt-4">
              <div className="d-flex flex-column">
                 {smartphone?.photo && (
                  <img
                    src={smartphone.photo}
                    alt="smartphone"
                    className="img-thumbnail"
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
                 <button className="btn btn-primary mt-4">Modifier</button>
            </div>
             
             
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
