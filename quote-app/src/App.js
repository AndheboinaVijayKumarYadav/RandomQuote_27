import {useState,useEffect} from 'react';
import './App.css';



function App() {

  const [quotes,setQuotes] = useState([]);
  const [quote,setQuote] = useState(null);

  function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  useEffect(() => {
    fetchingData();

    async function fetchingData(){
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      setQuotes(data)
      setQuote(data[0])
    }

  },[])

  return (
    <main>
        <h3>Random Quote Generator</h3>
        <section>
            <button onClick={() =>  setQuote(randomQuote())}>New Quote</button>
            <h3>
                <span>“</span>
                {quote?.text}
            </h3>
            <i>- {quote?.author}</i>
        </section>
    </main>
  );
}

export default App;
