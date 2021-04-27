import React from 'react';

const Title = ({children}) => {
  console.log("children",children)
  return (
      <div><p>{children}</p></div>
  );
};

export default Title;
