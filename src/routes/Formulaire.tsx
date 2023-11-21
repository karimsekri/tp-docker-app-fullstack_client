import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulaire   = () => {

    const navigate = useNavigate();
    const [nom, setNom] = useState("");

    const handleClickAfficherSaisie = useCallback( async () => {
        console.log(nom);
        if (nom != "") {
            const reponse = await fetch(`http://localhost:1992/hello/${nom}`);
            const data = await reponse.text();
            setNom(data);
           
        }
    }, [nom]);



    const handleClickAfficherHeure = useCallback(  () => {
       navigate("/times");
    }, [navigate]);

    return (
        <div>
                <h1>Formulaire</h1>
                <label htmlFor="Nom">Nom</label>
                <input type="text" name="Nom" id=""  onChange={(e) => setNom(e.target.value)} />
                <button onClick={handleClickAfficherSaisie}>Afficher saisie</button>

                <button onClick={handleClickAfficherHeure}>Afficher Heure</button>

                <label htmlFor="Nom">{nom}</label>
        </div>
    )
}
export default Formulaire