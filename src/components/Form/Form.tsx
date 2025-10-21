import './Form.scss';
import React from 'react';

export const Form = (props: {createNewTODO: Function}) => {
  const [text, setText] = React.useState('');

  const formSubmit = () => {
    if (text) {
      props.createNewTODO(text);
      setText('');
    }
  }

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
          <button></button>
        </label>
      </form>
    </div>
  );
}
