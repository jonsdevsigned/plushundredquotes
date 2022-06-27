import React, {useState} from 'react'
import quotes from '../quotes.json'

const colors = [ 'darkblue', 'darkgray', 'darkgoldenrod', 'darkcyan', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet' ]

const QuoteBox = () => {
    
   const randomIndex = Math.floor(Math.random() * quotes.length)
   const[ index, setIndex ] = useState(randomIndex) 
    
   const changeQuote = () =>{

       const randomIndex = Math.floor(Math.random() * quotes.length)
       setIndex(randomIndex)
   } 

   const randomColor = Math.floor(Math.random() * colors.length)
   document.body.style = `background: ${colors[randomColor]}`

   return (
        <div className='content'>
           <div className='quote'>
           <i class="fa-solid fa-quote-left" style={{color: colors[randomColor]}}></i>
            <p>{quotes[index].quote}</p>
           </div>
           <small style={{color: colors[randomColor]}}>{quotes[index].author}</small> 
           <br />
           <button onClick={changeQuote} style={{backgroundColor: colors[randomColor]}}> <i class="fa-solid fa-angle-right"></i></button>
           
        </div>
    );
};

export default QuoteBox;