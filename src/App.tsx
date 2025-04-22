
import button from "../src/assets/icons/button.svg"
import quotation from "../src/assets/icons/quotation.svg"
import  twitter from "../src/assets/icons/twitter.svg"
import whatsapp  from "../src/assets/icons/whatsapp.svg"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <header>
        <div className="top-strip" />
      </header>
      <div className="container">
        <div className="quotation-box ">
          <img src={quotation} />
          <div className="quote">
            <p>
              In the end, we will remember not the words of our enemies, but the
              silence of our friends.
            </p>
            <span>- Martin Luther King Jr.</span>
          </div>
          <div className="bottom-navigation">
            <div>
              <img src={button} className="rotate cp"  />
              <img src={button} className="cp" />
            </div>
            <div className="share">
              <span>Share At:</span>
              <img src={twitter} className="logo" alt="Vite logo" />
              <img title="Post this quote on WhatsApp!" src={whatsapp} className="cp" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-strip" />
    </>
  )
}

export default App
