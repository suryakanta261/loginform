import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Team from "./components/Team";
import Company from "./Company";
import DataPost from "./DataPost";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import LoginForm from "./components/LoginForm";
import DataFetch from "./components/DataFetch";
import Career from "./components/Career"
import Technologies from "./Technologies";

import './App.css';
import SimpleLogin from "./components/SimpleLogin";

function App() {
    return (
        <div>
            <h1>Let's learn some routing</h1>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/datapost">Data Post</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li><Link to="/calculator">Calculator</Link></li>
                        <li><Link to="/loginform">Login Form</Link></li>
                        <li><Link to="/datafetch">Data Fetch</Link></li>
                        <li><Link to="/Career">Current Openings</Link></li>
                        <li><Link to="/Technologies">our technoloies</Link></li>
                        <li> <Link to="/SimpleLogin">simple login</Link></li>
                    </ul>
                </nav>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home className="component" />} />
                        <Route path="/about" element={<About className="component" />}>
                            <Route path="team" element={<Team className="component" />} />
                            <Route path="company" element={<Company className="component" />} />
                        </Route>
                        <Route path="/contact" element={<Contact className="component" />} />
                        <Route path="/datapost" element={<DataPost className="component" />} />
                        <Route path="/counter" element={<Counter className="component" />} />
                        <Route path="/calculator" element={<Calculator className="component" />} />
                        <Route path="/loginform" element={<LoginForm className="component" />} />
                        <Route path="/datafetch" element={<DataFetch className="component" />} />
                        <Route path="/career" element={<Career className="component" />} />
                        <Route path="/technologies" element={<Technologies className="component" />} />
                        <Route path="/simplelogin" element={<SimpleLogin className="component"/>}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
