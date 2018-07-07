import React, { Fragment } from 'react';

const List = ({ users }) => {
  return (
    <Fragment>
      {
        users.map(user => (
          <div key={user.id}>
            {user.login}
          </div>
        ))
      }
    </Fragment>
  );
};

export default List;