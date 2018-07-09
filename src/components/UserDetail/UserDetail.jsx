import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`;

const ProfilePic = styled.img`
  width: 200;
  height: 200;
`;
const UserProfileWrapper = styled.div`

`;

const UserDetail = ({ avatar_url }) => {
  return (
    <Wrapper>
      <ProfilePic src={avatar_url} />
      <UserProfileWrapper>
        this is profile
      </UserProfileWrapper>
    </Wrapper>
  );
};

export default UserDetail;
