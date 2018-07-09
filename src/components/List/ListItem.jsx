import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemWrapper = styled.li`
  width: 325px;
  float: left;
  display: flex;
  padding: 10px;
  margin: 10px;
  border-color: #99aab5;
  border-radius: 5px;
  border: solid 1px;
`;

const ProfilePic = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 15px;
  margin-right: 8px;
`;

const Username = styled.div`
  width: 100px;
  font-size: 24px;
`;

const ListItem = ({ login, avatar_url, type }) => {
  return (
    <Link to={`/info/${login}`}>
      <ItemWrapper>
        <ProfilePic src={avatar_url} alt="profile" />
        <div>
          <Username>
            {login}
          </Username>
          <div>
            {type}
          </div>
        </div>
      </ItemWrapper>
    </Link>
  );
};

export default ListItem;