import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as Rx from 'rxjs';
import { map, filter } from 'rxjs/operators';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormHeadWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
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
  font-size: 2.5rem;
  color: #ffffff;
  background: transparent;
  text-decoration: none;
  border: none;
  margin-top: 24px;
`;

class InputForm extends PureComponent {
  state = {
    text: '',
    hasText: false,
    pressEnter: false,
  };

  constructor(props) {
    super(props);
    this.text$ = new Rx.Subject();
    this.enter$ = new Rx.fromEvent(document, 'keydown');
  }

  componentDidMount() {
    // text modification code
    this.text$
      .pipe(
        map(event => event.target.value),
      )
      .subscribe(text =>
        this.setState({
          text,
          hasText: text === '' ? false : true
        }));

    this.enter$
      .pipe(
        map(event => event.keyCode),
        filter(keyCode => keyCode === 13),
      )
      .subscribe(() => this.setState({ pressEnter: true }));
  }

  onTextChange = event => {
    this.text$.next(event);
  }

  render() {

    const {
      onTextChange,
    } = this;

    const {
      text,
      hasText,
      pressEnter,
    } = this.state;

    if (pressEnter)
      return <Redirect to={`/search?q=${text}`} />;

    return (
      <FormHeadWrapper>
        <Input type="text" onChange={onTextChange} placeholder="Search Github ID"/>
        {
          hasText &&
            <Link to={`/search?q=${text}`}>
              <Button>
                Go
              </Button>
            </Link>
        }
      </FormHeadWrapper> 
    );
  }
}

export default InputForm;