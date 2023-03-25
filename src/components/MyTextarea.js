import React, { forwardRef } from 'react';

function MyTextarea({ className, style, valueInit }, ref) {
  return (
    <textarea ref={ref} style={style} value={valueInit} className={className}></textarea>
  );
}

export default forwardRef(MyTextarea);