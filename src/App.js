import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import Main from './components/Main';



function App() {

  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    })

  return (

          <div className="portfolio">
            { isLoading==true?
                <Loading />:
                <Main />
              }

          </div>
  );
}

export default App;
