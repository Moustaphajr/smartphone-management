import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Createsmartphone() {
  const [newSmartphone, setNewSmartphone] = useState({
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

  const navigate = useNavigate();

  const handleCreateSmartphone = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/smartphone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSmartphone),
      });

      const data = await response.json();
      if (data) {
        setNewSmartphone({
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
        <h2 className="text-center mb-4">Créer un Nouveau Smartphone</h2>
        <form onSubmit={handleCreateSmartphone}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="nom">Nom</label>
                <input
                  id="nom"
                  onChange={(e) =>
                    setNewSmartphone({
                      ...newSmartphone,
                      nom: e.target.value,
                    })
                  }
                  value={newSmartphone.nom}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="marque">Marque</label>
                <input
                  id="marque"
                  onChange={(e) =>
                    setNewSmartphone({
                      ...newSmartphone,
                      marque: e.target.value,
                    })
                  }
                  value={newSmartphone.marque}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  onChange={(e) =>
                    setNewSmartphone({
                      ...newSmartphone,
                      description: e.target.value,
                    })
                  }
                  value={newSmartphone.description}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-4 mt-3">
                <label htmlFor="prix">Prix</label>
                <input
                  id="prix"
                  onChange={(e) =>
                    setNewSmartphone({
                      ...newSmartphone,
                      prix: e.target.value,
                    })
                  }
                  value={newSmartphone.prix}
                  type="number"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-4 mt-3">
                <label htmlFor="ram">RAM</label>
                <input
                  id="ram"
                  onChange={(e) =>
                    setNewSmartphone({
                      ...newSmartphone,
                      ram: e.target.value,
                    })
                  }
                  value={newSmartphone.ram}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-4 mt-3">
                <label htmlFor="rom">ROM</label>
                <input
                  id="rom"
                  onChange={(e) =>
                    setNewSmartphone({
                      ...newSmartphone,
                      rom: e.target.value,
                    })
                  }
                  value={newSmartphone.rom}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-4 mt-3">
                <label htmlFor="ecran">Écran</label>
                <input
                  id="ecran"
                  onChange={(e) =>
                    setNewSmartphone({
                      ...newSmartphone,
                      ecran: e.target.value,
                    })
                  }
                  value={newSmartphone.ecran}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-4 mt-3">
                <label htmlFor="couleurs">Couleurs</label>
                <input
                  id="couleurs"
                  onChange={(e) =>
                    setNewSmartphone({
                      ...newSmartphone,
                      couleurs: e.target.value.split(",").map(color => color.trim()),
                    })
                  }
                  value={newSmartphone.couleurs.join(", ")}
                  type="text"
                  className="form-control"
                />
              </div>

              {/* Centering the photo */}
              <div className="col-md-4 mt-3 ">
                <label htmlFor="photo">Photo</label>
                <input
                  id="photo"
                  onChange={(e) =>
                    setNewSmartphone({
                      ...newSmartphone,
                      photo: e.target.value,
                    })
                  }
                  value={newSmartphone.photo}
                  type="text"
                  className="form-control mb-2"
                  required
                />
              </div>
            </div>

            {/* Center the button */}
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-primary">Ajouter un smartphone</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
