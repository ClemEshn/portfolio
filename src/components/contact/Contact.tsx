import { useState } from "react";
import "./contact.scss";
import Swal from 'sweetalert2'

export default function Contact(){
  const [result, setResult] = useState("");
  const onSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    console.log([...formData.entries()]);
    formData.append("access_key", "43a859a3-7729-4c1a-92c4-08c052858178");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title : "Succès",
        text: "Message envoyé avec succès",
        icon : "success"
      })
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


    return(
        <div id="contact" className="my-container">
            <section className="contact">
                <form onSubmit={onSubmit}>
                    <h2>Contactez-moi</h2>
                    <div className="input-box">
                        <label>Nom</label>
                        <input type="text" className="field" name="Nom" placeholder="Entrez votre nom" required />
                    </div>
                    <div className="input-box">
                        <label>Email</label>
                        <input type="email" className="field" name="Mail" placeholder="Entrez votre email" required />
                    </div>
                    <div className="input-box">
                        <label>Message</label>
                        <textarea name="Message" id="" className="field mess"  placeholder="Entrez votre message" required></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </section>
        </div>
    )
}