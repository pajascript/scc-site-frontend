import { useState } from "react";
import './App.css';
import Header from "./components/Header";
import  Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import EnrollmentPage from "./pages/Enrollment";
import ConfirmationPage from "./pages/Confirmation";
import LoginPage from "./pages/Login";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

const App = () => {
  //State
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  //Functions
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>

      <Switch>

        <Route path='/login' exact >
          <LoginPage />
        </Route>

        <div>
          <Header toggle={toggle} />
          <Sidebar toggle={toggle} isOpen={isOpen} />

          <Route path="/" exact  >
            <Home />
          </Route>

          <Route path="/enrollment" exact  >
            <EnrollmentPage setIsVerified={setIsVerified} />
          </Route>

          <Route path="/enrollment/confirmation" exact  >
            <ConfirmationPage isVerified={isVerified} />
          </Route>

          <Footer />
        </div>
      </Switch>

    </Router>
  )
} 

export default App;
