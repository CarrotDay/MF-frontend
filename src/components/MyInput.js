import React, { forwardRef, useState } from 'react';

function MyInput(props, ref) {
  const [value, setValue] = useState(props.value ? props.value : '');
  
  return (
    <input 
      type={props.type || 'text'} 
      className={props.className}
      placeholder={props.placeholder}
      value={value} 
      onChange={props.onChange ? props.onChange : e => setValue(e.target.value)}
      checked={props.checked}
      id={props.id}
      ref={ref} />
  );
}

export default forwardRef(MyInput);