import { useEffect, useState } from "react"
import {button,quotation,twitter,whatsapp} from "../assets/index"
import axios from "axios"

interface Quote{
    content: string,
    author: string
  }


export const QuoteGen = ()=>{
    const [quote,setQuote] = useState<Quote | null>(null)

const fetchQuote = async() =>{
  try{
  const response = await axios.get("https://zenquotes.io/api/random")
  setQuote(response.data)
  }catch(error){
    console.log("Error fetching quote", error)
  }
}
useEffect(()=>{
  fetchQuote()
},[])

const shareOnTwitter = () => {
  const text = `"${quote?.content}" - ${quote?.author}`
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

const shareOnWhatsApp = () => {
  const text = `"${quote?.content}" - ${quote?.author}`
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
    return(
    <>
        <div className="container">
            <div className="quotation-box ">
                <img src={quotation} />
                <div className="quote">
                    <p>
                        {quote?.content || "Loading quote . . . "}
                    </p>
                    <span>
                        {quote?.author || ". . ."}
                    </span>
                </div>
                <div className="bottom-navigation">
                    <div>
                        <img src={button} className="rotate cp" onClick={fetchQuote} title="Get new quote" />
                        <img src={button} className="cp" />
                    </div>
                    <div className="share">
                        <span>Share At:</span>
                        <img 
                            src={twitter} 
                            className="logo" 
                            alt="Vite logo"
                            onClick={shareOnTwitter} 
                        />
                        <img 
                            title="Post this quote on WhatsApp!" 
                            src={whatsapp} 
                            className="cp"
                            onClick={shareOnWhatsApp}
                        />
                    </div>
                </div>
            </div>
        </div><div className="bottom-strip" />
    </>
    )
}