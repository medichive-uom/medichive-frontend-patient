import React, { useState } from 'react';
import { Select, Space } from 'antd';
import type { ConfigProviderProps, SelectProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];



interface TimeDropDownProps {
    availableTimes: any [];
    setSelectedTimeId: any;
}

const TimeDropDown: React.FC<TimeDropDownProps> = (props) => {
    console.log("gg",props.availableTimes);
    const [size] = useState<SizeType>('middle');
    const options: SelectProps['options'] = [];
    props.availableTimes.forEach((time: any) => {
        console.log(time);
        options.push({ label: time.availableTime, value: time.id });
    });
    const handleSelectChange = (value: any) => {
        // Call the callback function with the selected value
        props.setSelectedTimeId(value);
        console.log(value);
    };

    return (
        <>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Select
                    size={size}
                    defaultValue="Times"
                    style={{ width: 200 }}
                    options={options}
                    onChange={handleSelectChange}
                />
            </Space>
        </>
    );
};

export default TimeDropDown;