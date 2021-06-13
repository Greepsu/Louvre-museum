import { useRef, useState, useEffect } from "react";

//import style
import "../styles/App.css";

//import Components
import Contact from "./Contact/Contact";
import Exhibitions from "./Events/Exhibitions";
import Footer from "./Footer/Footer";
import HeroHeader from "./HeroHeader/HeroHeader";
import Loader from "./Loader";
import Purchase from "./Purchase/Purchase";
import Visit from "./Visit/Visit";

//import GSAP
import { gsap } from "gsap";

function App() {
  
  //Define a Ref for each section
  const exhibitionsRef = useRef();
  const visitRef = useRef();
  const purchaseRef = useRef();
  const contactRef = useRef();

  //Create Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
    if (loading === false) {
      let tl = gsap.timeline({ defaults: { ease: "Power0.easeout" } });
      tl.fromTo(
        "h1",
        { opacity: 0 },
        { opacity: 1, delay: 0.5, duration: 1.8 }
      );
      tl.fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, [loading]);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <header>
            <HeroHeader
              props={{ exhibitionsRef, visitRef, purchaseRef, contactRef }}
            />
          </header>
          <section>
            <Exhibitions ref={exhibitionsRef} props={{ purchaseRef }} />
            <Visit ref={visitRef} />
            <Purchase ref={purchaseRef} />
            <Contact ref={contactRef} />
          </section>
          <footer>
            <Footer
              props={{ exhibitionsRef, visitRef, purchaseRef, contactRef }}
            />
          </footer>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
