import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, BackBar } from '../components';
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
      handleFetchUser,
      qs,
    } = this;

    const {
      searchCondition,
      users,
      pending,
    } = this.props;

    return (
      <Fragment>
        <BackBar>
          <div>
            Search Result of {qs.query.q}
          </div>
        </BackBar>
        {
          searchCondition && 
              (pending ? <div>로딩중입니다!!! 기다려주세요</div> : <List users={users} />)
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.user,
  searchCondition: state.user.searchCondition,
  pending: state.user.pending,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(user, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
