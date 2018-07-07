import React, { PureComponent } from 'react';
import * as Rx from 'rxjs';
import { map } from 'rxjs/operators';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormHeadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  display: block;
  width: 80%;
  font-size: 2.5rem;
  border-radius: 10px;
  border: none;
  padding: 12px;
  background: #99aab5;
`;

const Button = styled.button`
  display: block;
  background: transparent;
`;

class InputForm extends PureComponent {
  state = {
    text: '',
  };

  constructor(props) {
    super(props);
    this.text$ = new Rx.Subject();
    this.button$ = new Rx.Subject();
  }

  componentDidMount() {
    // text modification code
    this.text$
      .pipe(map(event => event.target.value))
      .subscribe(text => this.setState({ text }));

    this.button$
      .subscribe(text => this.props.onClick(text));
  }

  onTextChange = event => {
    this.text$.next(event);
  }

  onButtonClick = () => {
    this.button$.next(this.state.text);
  }

  render() {

    const {
      onTextChange,
      onButtonClick
    } = this;

    return (
      <FormHeadWrapper>
        <Input type="text" onChange={onTextChange} />
        <Button onClick={onButtonClick}>
          Find User
        </Button>
      </FormHeadWrapper> 
    );
  }
}

InputForm.propTypes = {
  onClick: PropTypes.func.isRequired,
}; 

export default InputForm;