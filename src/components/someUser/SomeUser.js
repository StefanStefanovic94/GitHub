import React from "react";
import axios from "axios";
import { FetchData, FetchShows } from "../../services/Fetch"
import Search from "../search/Search";
import { Col, Container, Row } from "react-bootstrap";

class SomeUser extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      repo: [],
      // id: this.props.match.params.id


    }
  }
  fetchData = () => {

    const headers = {
      'Authorization': `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`

    };
    axios.get(`${`https://api.github.com/users/`}${this.props.match.params.id}`, { headers })
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

    axios.get(`${`https://api.github.com/users/`}${this.props.match.params.id}/repos`, { headers })
      .then(response => {
        console.log(response);
        this.setState({
          repo: response.data

        })
      }
      );
  }
  componentDidMount() {
    //     { console.log(this.props.match.params.id) }
    //     FetchData(`${`https://api.github.com/users/`}${value.matches.params.id}`)
    //         .then((response) =>console.log(this.props));
    this.fetchData()
    this.fetchRepo()

  }

  // renderShow = () => {
  //     return (
  //         <div>
  //             <div>

  //             </div>
  //         </div>
  //     )
  // }


  render() {
    return (
      <div>
        {console.log(this.state.data)}
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
                    return <a href={element.html_url}><p className="elementRepo">{element.name}</p></a>
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {console.log(this.state.repo)}
      </div>

    )
  }
}
export default SomeUser