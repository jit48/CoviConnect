import React from "react";

function Symptoms() {
  return (
    <div className="Symptoms">
      COVID-19 affects different people in different ways. Most infected people
      will develop mild to moderate illness and recover without hospitalization.
      <h4><b>Most common symptoms:</b></h4>
      <ul>
        <li>fever</li>
        <li>dry cough</li>
        <li>tiredness</li>
      </ul>
      <h4><b>Less common symptoms:</b></h4>
      <ul>
        <li>aches and pains.</li>
        <li>sore throat.</li>
        <li>diarrhoea.</li>
        <li>conjunctivitis.</li>
        <li>headache.</li>
        <li>loss of taste or smell.</li>
        <li>a rash on skin, or discolouration of fingers or toes.</li>
      </ul>
      <h4><b>Serious symptoms:</b></h4>
      <ul>
        <li>difficulty breathing or shortness of breath.</li>
        <li>chest pain or pressure.</li>
        <li>loss of speech or movement.</li>
      </ul>
      <br />
      <b className="important">
        Seek immediate medical attention if you have serious symptoms. Always
        call before visiting your doctor or health facility. People with mild
        symptoms who are otherwise healthy should manage their symptoms at home.
        On average it takes 5–6 days from when someone is infected with the
        virus for symptoms to show, however it can take up to 14 days.
      </b>
    </div>
  );
}

export default Symptoms;
