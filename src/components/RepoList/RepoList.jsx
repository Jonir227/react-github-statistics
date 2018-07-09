import React, { Component } from 'react';
import axios from 'axios';
import RepoListItem from './RepoListItem';

class RepoList extends Component {
  state = {
    pending: true,
    data: [],
  }

  componentDidMount() {
    this.getRepoData(this.props.url);
  }

  getRepoData = (query) => {
    axios.get(query)
      .then(res =>
        this.setState({
          pending: false,
          data: res.data,
        }))
      .catch(err => {
        console.error(err);
      })
  }
  
  render() {
    const {
      pending,
      data,
    } = this.state;

    return (
      <div>
        <p>Repos</p>
        <ul>
          {
            pending ||
              data.map(item => (
                <RepoListItem key={item.id} {...item} />
              ))
          }
        </ul>
      </div>
    );
  }
}

export default RepoList;
