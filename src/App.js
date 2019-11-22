import React, { useState } from 'react';

import Datetime from './components/datetime/datetime';
import Details from './components/details/details';

function App() {
  const [page, setPage] = useState(1);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleBack = () => {
    setPage(page - 1);
  }

  const handleTime = (e) => {
    setTime(e.target.value);
    
    if (date) {
      setPage(page + 1);
      console.log(date);
      console.log(time);
    } else {
      
    }
  }

  switch(page) {
    case 1:
      return <Datetime
              handleTime={handleTime}
              handleDate={handleDate}
              date={date}
              setDate={setDate} />
    case 2:
      return <Details
              handleBack={handleBack}
              date={date}
              handleDate={handleDate} />
  }
}

export default App;
