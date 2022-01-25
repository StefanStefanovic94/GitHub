import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./search.css"
import { FetchData } from "../../services/Fetch"
import SomeUser from "../someUser/SomeUser";
import { Col, Container, Row } from "react-bootstrap";

// token = "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"
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            search: [],
            value: ``
        }
    }


    searchedSeries = (event) => {
        let ancx = event.target.value
        this.setState({
            value: ancx
        })
    }
    // change = (event) => {
    //     this.searchedSeries(event.target.value);
    // }


    // trying() {
    //     FetchData("https://api.github.com/search/users?q=" + this.state.value)
    //         .then((response) => this.setState({ search: response.items })
    //         );
    // }


    fetchData = () => {
        axios.get("https://api.github.com/search/users?q=" + this.state.value)
            .then(response => {
                console.log(response);
                this.setState({
                    search: response.data.items

                })
            }
            );
    }
    // funcToSetState = () => {
    //     this.setState({
    //         search: []
    //     })
    // }
    componentDidMount() {
        // this.fetchData()
        // this.funcToSetState()
    }


    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.fetchData()
        }
    }


    render() {
        return (
            <Container>

                <div className="wrapSearch">
                    <Row>
                        {console.log(this.state.search)}
                        <Col sm="8" md="9" lg="10">
                            <input onKeyPress={this.handleKeyPress} onChange={this.searchedSeries} placeholder="search here for user..."></input>
                        </Col>
                        {/* {this.state.value ? this.fetchData() : null} */}



                        <Col sm="4" md="3" lg="2">
                            <button className="button" onClick={this.fetchData}>search</button>
                        </Col>
                        <Col sm="8" md="9" lg="10">
                            <div className="parentList" >
                                {this.state.value === "" ? "" : this.state.search.map(show => (
                                    <Link to={`/user/${show.login}`}>
                                        <div className="list">
                                            <img className="image" src={show.avatar_url} />
                                            <p className="text">{show.login}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </Col>
                    </Row>
                </div>

            </Container>
        )
    }
}
export default Search