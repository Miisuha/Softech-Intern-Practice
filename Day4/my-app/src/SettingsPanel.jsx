import React from 'react';
import DisplaySetting from './DisplaySetting';

const SettingsPanel = ({ theme }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '6px' }}>
      <h3>Settings Panel</h3>
      <DisplaySetting theme={theme} />
    </div>
  );
};

export default SettingsPanel;
