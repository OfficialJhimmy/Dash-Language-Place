import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CircleLoader from "react-spinners/CircleLoader";
import Header from "./components/Navigation/Header";
import Home from "./pages/Home/index";
import German from "./pages/German/index";
import French from "./pages/French/index";
import AboutUs from "./pages/About/index";
import Services from "./pages/Our Services/index";
import Courses from "./pages/Courses/index";
import Error404 from "./pages/Error404/index";
import CartIcon from "./pages/Cart/CartIcon";
import Footer from "./components/Footer/index";
import Translation from "./components/ServicesDetails/Translation";
import ExamPreparation from "./components/ServicesDetails/ExamPreparation";
import Admission from "./components/ServicesDetails/Admission";
import WorknTraining from "./components/ServicesDetails/WorknTraining";
import ScrollToTop from "./components/Scroll-to-top/index";
import Cart from "./pages/Cart/Cart";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./pages/Cart/Checkout";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <CircleLoader color={"#50E3C2"} loading={loading} size={150} />
        </div>
      ) : (
        <Router>
          <ToastContainer />
          <ScrollToTop />
          <Header />
          <CartIcon />
          <>
            <Switch>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/german">
                <German />
              </Route>
              <Route exact path="/french">
                <French />
              </Route>
              <Route exact path="/about-us">
                <AboutUs />
              </Route>
              <Route exact path="/our-services">
                <Services />
              </Route>
              <Route exact path="/our-courses">
                <Courses />
              </Route>
              <Route exact path="/translation-of-documents">
                <Translation />
              </Route>
              <Route exact path="/exam-preparation">
                <ExamPreparation />
              </Route>
              <Route exact path="/admission">
                <Admission />
              </Route>
              <Route exact path="/workandtraining">
                <WorknTraining />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="*">
                <Error404 />
              </Route>
            </Switch>
          </>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
