import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
    state = {
        text: ""
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.searchBands(this.state.text);
        this.setState({ text: "" });
    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="whiteSpace"></div>

                    <form
                        className="form"
                        onSubmit={this.onSubmit}>

                        <input //Search input
                            className="searchInput"
                            type="text"
                            name="text"
                            placeholder="Search bands..."
                            value={this.state.text}
                            onChange={this.onChange}>
                        </input>

                        <button //Search button 
                            type="submit"
                            value="search"
                            className="searchButton"
                            // disabled={!(this.state. && this.state.)}
                            onClick={this.handleFormSubmit}
                        > Search
                        </button>
                    </form>

                </div>

            </div>
        )
    }
}

export default Search



// function Image() {
//     return (
//         <div>
//             <div className="whiteSpace"></div>
//             <div>
//                 <img src={homeImg} alt="homeImg" className="homeImg" />
//             </div>
//         </div>
//     )
// }

// export default Image;
