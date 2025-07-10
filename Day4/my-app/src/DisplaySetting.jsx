import React from 'react';

const DisplaySetting = ({ theme }) => {
  return (
    <div style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
      Current Theme: <strong>{theme}</strong>
    </div>
  );
};

export default DisplaySetting;
