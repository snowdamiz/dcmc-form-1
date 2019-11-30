import React, { useState, useEffect } from 'react';
import Datee from './components/date/date';
import Time from './components/time/time';
import Details from './components/details/details';

function App() {
  const [page, setPage] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  // const [stockNumber, setStockNumber] = useState(gaObjects['VehicleObject'].StockNumber);
  // const [year, setYear] = useState(gaObjects['VehicleObject'].Year);
  // const [make, setMake] = useState(gaObjects['VehicleObject'].Make);
  // const [model, setModel] = useState(gaObjects['VehicleObject'].Model);

  useEffect(() => {
    if (date) setPage(2);
    if (time) setPage(3);
  }, [date, time, page]);

  const handleBack = () =>  {
    setDate(null);
    setTime(null);
    setName(null);
    setEmail(null);
    setPhone(null);
    setPage(1);
  }
  
  const handleTime = (e) => setTime(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);

  const handleSubmit = (e) => {
    const templateId = 'dcmc_form_one';
    const parsedDate = date._d;

    sendFeedback(templateId, {
      date: parsedDate,
      time: time,
      name: name,
      email: email,
      phone: phone,
      // stockNumber: stockNumber,
      // year: year,
      // make: make,
      // model: model
    });
  }

  const sendFeedback = (templateId, variables) => {
    console.log(templateId, variables);

    window.emailjs.send('gmail', templateId, variables)
      .then(res => console.log('Email successfully sent!'))
      .catch(err => console.error('Failed to send', err))
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
              handleSubmit={handleSubmit} />
  }
}

export default App;
