import { useState } from "react";
import "./Contact.scss";
import Swal from 'sweetalert2'
import { useLanguage } from "../../context/LanguageContext";
import {nom, name, envoyer, send, entrezMessage, enterName, entrezNom, enterMessage, entrezMail, enterMail, contactezMoi, contactMe} from "./ContactText";

export default function Contact(){
  const { language } = useLanguage();
  const [result, setResult] = useState("");
  const onSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
    result; //remove warning
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    console.log([...formData.entries()]);
    formData.append("access_key", "6f42ced6-b5b0-4f46-809a-381916888e5e");

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
                    <h2>{language === "fr" ? contactezMoi : contactMe}</h2>
                    <div className="input-box">
                        <label>{language === "fr" ? nom : name}</label>
                        <input type="text" className="field" name="Nom" placeholder={language === "fr" ? entrezNom : enterName} required />
                    </div>
                    <div className="input-box">
                        <label>Email</label>
                        <input type="email" className="field" name="Mail" placeholder={language === "fr" ? entrezMail : enterMail} required />
                    </div>
                    <div className="input-box">
                        <label>Message</label>
                        <textarea name="Message" id="" className="field mess"  placeholder={language  === "fr" ? entrezMessage : enterMessage} required></textarea>
                    </div>
                    <button type="submit" className="btn-contact">{language === "fr" ? envoyer : send}</button>
                </form>
            </section>
        </div>
    )
}