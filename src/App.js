import React, { useState } from 'react';

import Datetime from './components/datetime/datetime';
import Details from './components/details/details';

function App() {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage(page + 1);
  }

  switch(page) {
    case 1:
      return <Datetime handleClick={handleNextPage} />
    case 2:
      return <Details handleClick={handleNextPage} />
  }
}

export default App;
