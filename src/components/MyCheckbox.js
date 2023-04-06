import React, { forwardRef, useState } from 'react';

function MyInput(props, ref) {
  const [checked, setChecked] = useState(props.checked ? props.checked : false);
  console.log(props.checked, checked);
  
  return (
    <input 
      type="checkbox"
      className={props.className}
      onClick={props.onChange ? props.onChange : e => setChecked(!e.target.checked)}
      checked={checked}
      id={props.id}
      ref={ref} />
  );
}

export default forwardRef(MyInput);