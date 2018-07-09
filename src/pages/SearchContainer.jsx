import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, BackBar, Pagenation } from '../components';
import { user } from '../store/actions';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.qs = queryString.parseUrl(this.props.location.search);
  }

  componentDidMount() {
    this.handleFetchUser(this.qs.query.q);
  }

  handleFetchUser = query => {
    this.props.userActions.fetchUser(query);
  }
  render() {
    const {
      qs,
    } = this;

    const {
      users,
      pending,
    } = this.props;

    return (
      <Fragment>
        <BackBar history={this.props.history}>
          <div>
            Search Result of {qs.query.q}
          </div>
        </BackBar>
        {
          pending ?
            <div>로딩중입니다!!! 기다려주세요</div>
          :
            <Fragment>
              <List users={users} />
              <Pagenation />
            </Fragment>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.user,
  pending: state.user.pending,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(user, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
