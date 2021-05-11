import { useRef } from "react";
import "../styles/App.css";
import Contact from "./Contact/Contact";
import Exhibitions from "./Events/Exhibitions";
import Footer from "./Footer/Footer";
import HeroHeader from "./HeroHeader/HeroHeader";
import Purchase from "./Purchase/Purchase";
import Visit from "./Visit/Visit";

function App() {
  const exhibitionsRef = useRef();
  const visitRef = useRef();
  const purchaseRef = useRef();
  const contactRef = useRef();
  return (
    <div className="App">
      <header>
        <HeroHeader
          props={{ exhibitionsRef, visitRef, purchaseRef, contactRef }}
        />
      </header>
      <section>
        <Exhibitions ref={exhibitionsRef} />
        <Visit ref={visitRef} />
        <Purchase ref={purchaseRef} />
        <Contact ref={contactRef} />
      </section>
      <footer>
        <Footer props={{ exhibitionsRef, visitRef, purchaseRef, contactRef }} />
      </footer>
    </div>
  );
}

export default App;
