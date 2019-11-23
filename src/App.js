import React, { useState, useEffect } from 'react';

import Datee from './components/date/date';
import Time from './components/time/time';
import Details from './components/details/details';

function App() {
  const [page, setPage] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    if (date) setPage(2);
    if (time) setPage(3);
  }, [date, time, page]);

  const handleBack = () =>  {
    setDate(null);
    setTime("");
    setPage(1);
  }
  
  const handleTime = (e) => setTime(e.target.value);

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
              handleBack={handleBack} />
  }
}

export default App;
