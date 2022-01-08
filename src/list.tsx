import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

type Props = {
  value: string,
  valChange: (value: string) => void,
}

const CountrySelector: React.FC<Props> = (props) => {
  return (
    <>
      <PhoneInput country={'in'} value={props.value} onChange={props.valChange} />
    </>
  );
};

export default CountrySelector;
