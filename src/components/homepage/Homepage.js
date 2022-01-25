import React from "react";
import "./homepage.css";
import axios from "axios";
import Search from "../search/Search";
import { Col, Container, Row } from "react-bootstrap";


class Homepage extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            repo: []
        }
    }

    fetchData = () => {

        const headers = {
            'Authorization': `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`

        };
        axios.get("https://api.github.com/users/stefanstefanovic94", { headers })
            .then(response => {
                console.log(response)
                this.setState({
                    data: response.data

                })
            }
            );
    }

    fetchRepo = () => {
        const headers = {
            'Authorization': `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`

        };

        axios.get("https://api.github.com/users/StefanStefanovic94/repos")
            .then(response => {
                console.log(response);
                this.setState({
                    repo: response.data

                })
            }
            );
    }


    componentDidMount() {
        this.fetchData()
        this.fetchRepo()
    }



    render() {
        return (<div>
            {console.log(this.state.repo)}
            <Search />
            <div className="homepage">
                <Container>
                    <Row>
                        <Col sm="12" md="6" lg="6">
                            <div className="userInfo">
                                <img src={this.state.data.avatar_url} />
                                <p>{this.state.data.name}</p>
                                <p>{this.state.data.bio}</p>
                            </div>
                        </Col>
                        <Col sm="12" md="6" lg="6">
                            <div className="userRepo">
                                <h1 className="repo">Repositories:</h1>
                                {this.state.repo.map((element) => {
                                    return <a href={element.html_url}><p className="elementRepo">{element.name}</p> </a>
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* <Route exact path="/" component={Homepage}></Route> */}
            {/* <Route exact path="/" component={<Homepage imgUrl={this.state.data.avatar_url} name={this.state.data.name} bio={this.state.data.bio} repo={this.state.repo} key={this.state.data.id} />} /> */}

        </div>)
    }
}
export default Homepage 