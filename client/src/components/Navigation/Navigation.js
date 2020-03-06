import React, { Component } from 'react';
import "./Navigation.css";
import bandaid from "../../assets/bandaid.png";
import Modal from "../FormLogIn/Modal";
import {Link} from 'react-router-dom';

class Navigation extends Component {
    state = {
        show: false,
        bandName: "",
        password: ""
    };

    render() {
        const handleClick = (event) => {
            console.log("function")
            this.setState({ show: true })
        }
        const handleClose = (event) => {
            console.log("function")
            this.setState({ show: false })
        }

        const handleInputChange = (event) => {
            // Getting the value and name of the input which triggered the change
            const { name, value } = event.target;

            // Updating the input's state
            this.setState({
                [name]: value
            });
        };

        const handleFormSubmit = (event) => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            event.preventDefault();

            console.log(this.state)
            // this.setState({  //reset empty
            //   bandName: "",
            //   password: ""
            // });
        };

        return (
            <nav>
                <div className="divLogo">
                    <img src={bandaid} alt="Logo" className="logoNav" />
                </div>
                <div className="leftNav">

                <ul>
                    <li>

                    <a href="#" >Sign Up  | </a>
                    <a href="#" onClick={handleClick}>  Login</a>

                    {/* <Link to="#" onClick={handleClick}>  Login | </Link>
                    <Link to="#" >Sign Up</Link> */}

                    </li>
                </ul>


                    {/* <Modal /> */}
                    {this.state.show ?
                        <Modal
                            close={handleClose}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleFormSubmit} />
                        : null
                    }
                </div>
            </nav>
        );
    }
}


export default Navigation;
