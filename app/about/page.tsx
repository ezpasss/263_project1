"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebaseConfig";

export default function AboutPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      await addDoc(collection(db, "contact_messages"), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        description: description,
        timestamp: new Date(), 
      });
      alert("message successfully sent");
      setFirstName("");
      setLastName("");
      setEmail("");
      setDescription("");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("There was an error sending your message.");
    }
  };

  return (
  <main>
    <h2 className="text-5xl font-bold text-center">Contact Us</h2>
    <div> 
      <img src="/contact.png" alt="Contact Us" className="contact-image" />
      <p className="contact-par">Hello my name is Rowan Tolfree and I am an amature photographer. 
        I have spent all my life exploring the American national parks and landscapes.
        Over the course of years I have captured thousands of images that can only attempt to show the beauty
        of these places and never had anyone to share them with. With the creation of this website, 
        I hope to share my passion for photography with others. Please feel free to explore my portfolio!</p>
      <p className="contact-info">For more information, please submit your information here or contact us at Rowantolfree@gmail.com</p>
    </div>
     <form onSubmit={handleSubmit} className="contact-form">

      <div className="mb-4">
        <label className="pr-4">First Name:</label>
        <input className="border border-black rounded-md p-2" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>

      <div className="mb-4">
        <label className="pr-4">Last Name:</label>
          <input className="border border-black rounded-md p-2" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>

      <div className="mb-4">
        <label className="pr-4">Email:</label>
        <input className="border border-black rounded-md p-2" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
        
        <div className="mb-4">
          <label className="pr-4">Description:</label>
          <textarea rows={4} className="border border-black rounded-md p-2" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <button className="border border-black rounded-md p-2"type="submit">Submit</button>

    </form>
  </main>
);}