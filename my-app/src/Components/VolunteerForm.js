import React, { useState } from "react";

function VolunteerForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [available, setAvailable] = useState("");
  const [comment, setComment] = useState("");

  

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        city: city,
        state: state,
        available: available,
        comment: comment
      }),
    })
      .then((r) => r.json())
      .then((newVolunteer) => console.log(newVolunteer));
  }

  return (
    <div className="new-volunteer-form">
      <h2>Volunteer With Us!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="text"
        name="city"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
         <input
          type="text"
          name="state"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
         <input
          type="text"
          name="available"
          placeholder="Your Availability"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        />
         <input
          type="text"
          name="comment"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />



        <button type="submit">Submit Volunteer Form</button>
      </form>
    </div>
  );
}



export default VolunteerForm;

