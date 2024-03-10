import React from "react";
import DropDown from "../../components/dropDown";
import { Button } from "antd";
import { DatePicker } from "antd";

const BookAppointment: React.FC = () => {
  
  const doctorsList = [
    { key: '1', label: 'Doctor 1' },
    { key: '2', label: 'Doctor 2' },
    { key: '3', label: 'Doctor 3' },
  ];

  const instituteList = [
    { key: '1', label: 'Institute 1' },
    { key: '2', label: 'Institute 2' },
    { key: '3', label: 'Institute 3' },
  ];

  const specializations = [
    { key: '1', label: 'Specialization 1' },
    { key: '2', label: 'Specialization 2' },
    { key: '3', label: 'Specialization 3' },
  ];
  
  return (
    <div>
      <h2>Book Appointments</h2>
      <div style={{ marginBottom: '20px' }}>
        <DropDown items={doctorsList} buttonText="Doctor" width="200px" />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <DropDown items={instituteList} buttonText="Institute" width="200px" />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <DropDown items={specializations} buttonText="Specialization" width="200px" />
      </div>
      <div style={{ marginBottom: '20px' , width: '200px' }}> 
        <DatePicker style={{ width: '100%' }} /> 
      </div>
      <Button type="primary">Search</Button>
    </div>

  );
  };

export default BookAppointment;
