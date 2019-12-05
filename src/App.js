import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Datee from './components/date/date';
import Time from './components/time/time';
import Details from './components/details/details';
import Validate from './validate';
import Axios from 'axios';

function App() {
  const [page, setPage] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [err, setErr] = useState([]);
  const [nameErr, setNameErr] = useState(0);
  const [emailErr, setEmailErr] = useState(0);
  const [phoneErr, setPhoneErr] = useState(0);
  // const [stockNumber, setStockNumber] = useState(gaObjects['VehicleObject'].StockNumber);
  // const [year, setYear] = useState(gaObjects['VehicleObject'].Year);
  // const [make, setMake] = useState(gaObjects['VehicleObject'].Make);
  // const [model, setModel] = useState(gaObjects['VehicleObject'].Model);

  useEffect(() => {
    let width = window.innerWidth

    if (width > 600) ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    if (page === 0) ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    
    if (date) setPage(2);
    if (time) setPage(3);
  }, [date, time, page]);

  const handleBack = () =>  {
    setDate(null);
    setTime(null);
    setName("");
    setEmail("");
    setPhone("");
    setPage(1);
  }
  
  const handleTime = (e) => setTime(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataSubmitted = {
      date,
      time,
      name,
      email,
      phone,
      // stockNumber,
      // year,
      // make,
      // model
    }

    // Validate(dataSubmitted, setPage());

    function validate(data) {
      const d = Object.keys(data).map(i => data[i]);
      const name = d[2];
      const email = d[3];
      const phone = d[4];
      
      const regexName = /^[a-zA-Z\s]*$/;
      const regexNumber = /^\d+$/;
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      console.log(d);

      if (name === null || name === "") setNameErr(1);
      else if (name.length > 5) {
        if (!regexName.test(name)) setNameErr(1);
        else setNameErr(0);
      } else setNameErr(1);

      if (email === null || email === "" ) setEmailErr(1);
      else if (email.length > 10) {
        if (!regexEmail.test(email)) setEmailErr(1);
        else setEmailErr(0);
      } else setEmailErr(1);

      if (phone === null || phone === "") setPhoneErr(1);
      else if (phone.length >= 10) {
        if (!regexNumber.test(phone)) setPhoneErr(1);
        else setPhoneErr(0);
      } else setPhoneErr(1);
    }

    validate(dataSubmitted);

    // Axios.post("https://dcwebleads.herokuapp.com/api/send", dataSubmitted);
    // setPage(0);
  }

  switch(page) {
    case 1:
      return <Datee
              date={date}
              setDate={setDate}
              page={page} />
    case 2:
      return <Time 
              time={time}
              handleTime={handleTime} />

    case 3:
      return <Details
              handleBack={handleBack}
              handleName={handleName}
              handleEmail={handleEmail}
              handlePhone={handlePhone}
              handleSubmit={handleSubmit}
              phoneErr={phoneErr}
              emailErr={emailErr}
              nameErr={nameErr} />
  }
}

export default App;
