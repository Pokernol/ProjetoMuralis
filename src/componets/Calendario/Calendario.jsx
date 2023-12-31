import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Calendario() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }
    return (
        <Calendar
        onChange={onChange}
        value={value}
      />
    )
}
export default Calendario;