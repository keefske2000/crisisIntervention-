/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import resources from "./pages/resources";
import About from "./pages/About";
import questionaire from "./pages/questionaire";
import contact from "./pages/contact";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

// import logo from './logo.svg';
import './App.css';
// import Auth from './Auth/Auth.js';
// import Callback from './Callback/Callback';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import './routes';




function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/questionaire" component={questionaire} />
          <Route exact path="/resources" component={resources} />
          <Route exact path="/contact" component={contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

// const auth = new Auth();
// auth.login();


// class Login extends Component {
//   goTo(route) {
//     this.props.history.replace(`/about`)
//   }

//   login() {
//     this.props.auth.login();
//   }

//   logout() {
//     this.props.auth.logout();
//   }

//   componentDidMount() {
//     const { renewSession } = this.props.auth;

//     if (localStorage.getItem('isLoggedIn') === 'true') {
//       renewSession();
//     }
//   }

//   render() {
//     const { isAuthenticated } = this.props.auth;

//     return (
//       <div>
//         <Navbar fluid>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#">Auth0 - React</a>
//             </Navbar.Brand>
//             <Button
//               bsStyle="primary"
//               className="btn-margin"
//               onClick={this.goTo.bind(this, '/about')}
//             >
//               Home
//             </Button>
//             {
//               !isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.login.bind(this)}
//                   >
//                     Log In
//                   </Button>
//                 )
//             }
//             {
//               isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.logout.bind(this)}
//                   >
//                     Log Out
//                   </Button>
//                 )
//             }
//           </Navbar.Header>
//         </Navbar>
//       </div>
//     );
//   }
// }




export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




