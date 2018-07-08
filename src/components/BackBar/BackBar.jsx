import React, { PureComponent } from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
  width: 90%;
  margin-left: 5%;
  padding-bottom: 8px;
  border-bottom: solid 2px #ffffff;
  display: flex;
  justify-content: space-between;
`;

const BackButton = styled.button`
  display: block;
  font: 1.5em Prata;
  color: #7289da;
  background: transparent;
  border: none;
`;

const RightElement = styled.div`
  font: 1.5em Prata;
  color: #FFFFFF;
`;

class BackBar extends PureComponent {
  onButtonClick = () => {
    window.history.back();
  }
  render() {
    const {
      onButtonClick,
    } = this;

    const {
      children,
    } = this.props;

    return (
      <BarWrapper>
        <BackButton onClick={onButtonClick}>
          &lt; Back
        </BackButton>
        <RightElement>
          {children}
        </RightElement>
      </BarWrapper>
    );
  }
}

BackBar.defaultProps = {
  children: (<div />)
}

export default BackBar;