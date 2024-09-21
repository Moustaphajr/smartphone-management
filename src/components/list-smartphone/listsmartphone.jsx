import { useEffect, useState } from "react";

export default function Listsmartphone() {
  const [smartphones, setSmartphone] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div>
      {isLoading ? (
        <h1> données en chargement</h1>
      ) : (
        <div>
          {smartphones.map((smartphone) => (
            <div key={smartphone.id}>
              <h2>{smartphone.nom}</h2>
              <p>{smartphone.prix}</p>
              <img
                height={120}
                width={120}
                src={smartphone.photo}
                alt={smartphone.name}
              />
              <div>
                <button>Details</button>
                <button>Modifier</button>
                <button onClick={() => handleDelete(smartphone.id)}>
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
