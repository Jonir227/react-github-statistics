import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { InputForm, List } from '../components';
import { user } from '../store/actions';

class SearchContainer extends Component {
  handleFetchUser = query => {
    this.props.userActions.fetchUser(query);
  }

  render() {

    const {
      handleFetchUser,
    } = this;

    const {
      searchCondition,
      users,
      pending,
    } = this.props;

    return (
      <Fragment>
        <InputForm onClick={handleFetchUser} />
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