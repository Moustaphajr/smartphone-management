import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

    const  handleUpdateSmartphone=async(e)=> {
      
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

           
           console.log(data)
            
         navigate("/");
       }
     } catch (error) {
       console.log(error);
     }
  }

  return (
    <div>
      <form  onSubmit={handleUpdateSmartphone}>
        <div>
          <input
            onChange={(e) =>
              setUpdateSmartphone({ ...updateSmartphone, nom: e.target.value })
            }
            value={updateSmartphone.nom}
            type="text"
            placeholder={smartphone?.nom}
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setUpdateSmartphone({
                ...updateSmartphone,
                marque: e.target.value,
              })
            }
            value={updateSmartphone.marque}
            type="text"
            placeholder={smartphone?.marque}
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setUpdateSmartphone({
                ...updateSmartphone,
                description: e.target.value,
              })
            }
            value={updateSmartphone.description}
            type="text"
            placeholder={smartphone?.description}
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setUpdateSmartphone({ ...updateSmartphone, prix: e.target.value })
            }
            value={updateSmartphone.prix}
            type="text"
            placeholder={smartphone?.prix}
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setUpdateSmartphone({ ...updateSmartphone, ram: e.target.value })
            }
            value={updateSmartphone.ram}
            type="text"
            placeholder={smartphone?.ram}
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setUpdateSmartphone({ ...updateSmartphone, rom: e.target.value })
            }
            value={updateSmartphone.rom}
            type="text"
            placeholder={smartphone?.rom}
          />
        </div>

        <div>
          <input
            onChange={(e) =>
              setUpdateSmartphone({
                ...updateSmartphone,
                ecran: e.target.value,
              })
            }
            value={updateSmartphone.ecran}
            type="text"
            placeholder={smartphone?.ecran}
          />
        </div>

        <div>
          <input
            onChange={(e) =>
              setUpdateSmartphone({
                ...updateSmartphone,
                couleurs: [e.target.value]
              })
            }
            value={updateSmartphone.couleurs}
            type="text"
            placeholder={smartphone?.couleurs?.map((couleur) => couleur)}
          />
        </div>

        <div>
          <input
            onChange={(e) =>
              setUpdateSmartphone({
                ...updateSmartphone,
                photo: e.target.value,
              })
            }
            value={updateSmartphone.photo}
            type="text"
            placeholder="Ajouter une photo"
          />
          <img src={smartphone?.photo} />
        </div>
        <div>
          <button>Modifier</button>
        </div>
      </form>
    </div>
  );
}
