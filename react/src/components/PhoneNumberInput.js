import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

function PhoneNumberInput(props) {
  const {...other } = props;

  return (
    <MaskedInput
      {...other}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}

export default PhoneNumberInput;