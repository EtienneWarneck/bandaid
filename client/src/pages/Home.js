import React, { Component } from "react";
import Navigation from '../components/Navigation/Navigation';
// import Featured from '../components/Featured';
// import Footer from '../components/Footer';
// import FormLogin from '../components/FormLogin';
// import FormSignUp from '../components/FormSignUp';
// import Search from '../components/Search';
// import API from '../utils/API';
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";



class Home extends Component {
  state = {
    results: []
  }
  render() {
    return (
      <div className="divApp" >
        <Navigation />
      </div>
    );
  }
}

export default Home;