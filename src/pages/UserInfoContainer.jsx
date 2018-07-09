import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BackBar, UserDetail, RepoList } from '../components';
import { userInfo } from '../store/actions';

class UserInfoContainer extends Component {
  componentDidMount() {
    this.handleUserInfoActions(this.props.match.params.username);
  }

  handleUserInfoActions = query => {
    this.props.userInfoActions.getUserInfo(query);
  }
  
  render() {
    const {
      userInfo,
      pending,
    } = this.props;

    return (
      <div>
        <BackBar history={this.props.history}>
          Information About {this.props.match.params.username}
        </BackBar>
        {
          pending ||
            <Fragment>
              <UserDetail {...userInfo} />
              <RepoList url={userInfo.repos_url}/>
            </Fragment>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo.userInfo,
  pending: state.userInfo.pending,
});

const mapDispatchToProps = dispatch => ({
  userInfoActions: bindActionCreators(userInfo, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer);
