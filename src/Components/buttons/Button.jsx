import React from 'react';
import "../buttons/button.styles.scss"
const buttonTypes = {
  google: 'google-sign-in',
  inverter: 'inverter',
};

const Button = ({ children, buttonType, ...otherprops }) => {
  return (
    <button className={`button-container ${buttonTypes[buttonType]}`} {...otherprops}>
      {children}
    </button>
  );
};

export default Button;







