import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas architecto consectetur dolorem aspernatur molestias voluptates facere animi optio deserunt.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas architecto consectetur dolorem aspernatur molestias voluptates facere animi optio deserunt.",
  },
  {
    title: "Do you ship to countries oustside the EU?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas architecto consectetur dolorem aspernatur molestias voluptates facere animi optio deserunt.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordian data={faqs} />
    </div>
  );
}
export default App;

function Accordian({ data }) {
  const [curOpen, setCurOpen ] = useState(null)
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem 
        curOpen={curOpen}
        onOpen={setCurOpen}
        title={el.title} 
        num={i} key={el.title}
         >{el.text}
         </AccordionItem> 
      ))}

<AccordionItem 
        curOpen={curOpen}
        onOpen={setCurOpen}
        title='Test 1'
        num={22}
        key= 'Test 1'
         >
          <p>Allows React Developers to:</p>
          <ul>
            <li>Break up UI into components</li>
            <li>Make components reusable</li>
            <li>Place state efficiently</li>
          </ul>
          


         </AccordionItem> 
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children}) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === curOpen;
  function handleToggle(){
    onOpen(isOpen ? null: num);
  } 

  return (
    <div className={`item ${isOpen ? 'open' :''} `}onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon"> 
        {isOpen ? '-' : '+'}
      </p>
     
     {isOpen && <div className="content-box">{children}</div> }
    </div>
  );
}
