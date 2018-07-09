
import React from 'react';
import styled from 'styled-components';

const ListItemWrapper = styled.li`
  float: left;
  width: 150px;
`;

const RepoListItem = ({ name }) => {
  return (
    <ListItemWrapper>
      {name}
    </ListItemWrapper>
  );
};

export default RepoListItem;
