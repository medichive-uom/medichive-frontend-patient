import React, { useState } from 'react';
import {  Select, Space } from 'antd';
import type { ConfigProviderProps, SelectProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const DropDown: React.FC = () => {
  const [size] = useState<SizeType>('middle');

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Select
          size={size}
          defaultValue="Doctor"
          style={{ width: 200 }}
          options={options}
        />
       <Select
          size={size}
          defaultValue="Institute"
          style={{ width: 200 }}
          options={options}
        />
       <Select
          size={size}
          defaultValue="Specialization"
          style={{ width: 200 }}
          options={options}
        />
      </Space>
    </>
  );
};

export default DropDown;