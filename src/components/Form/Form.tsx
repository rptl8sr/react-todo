import './Form.scss';
import React from 'react';
import { Button, FormBlock, Input, Label, Wrapper } from './Form.styled';
import plusIcon from '../../assets/images/plus.png';

export const Form = (props: {createNewTODO: Function}) => {
  const [text, setText] = React.useState('');

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (text) {
      props.createNewTODO(text);
      setText('');
    }
  }

  return (
    <Wrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <Label>
          <Input type="text" onChange={(e) => setText(e.target.value)} value={text} />
          <Button icon={plusIcon}/>
        </Label>
      </FormBlock>
    </Wrapper>
  );
}
