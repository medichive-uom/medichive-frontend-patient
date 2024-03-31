import React, { useState } from "react";
import DropDown from "../../components/dropDown";
import { Button, Layout, Table } from "antd";
import { DatePicker } from "antd";

const BookAppointment: React.FC = () => {
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [showAvailableTimes, setShowAvailableTimes] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [availableDoctors, setAvailableDoctors] = useState<any[]>([]);
    // Logic for performing the search goes here
    setSearchPerformed(true); // Set the state to indicate that the search has been performed
  };

  const data = [
    { key: '1', name: 'Dr. John Doe', specialization: 'Cardiologist' },
    { key: '2', name: 'Dr. Jane Smith', specialization: 'Neurologist' },
  ];

  return (
    <Layout style={{ backgroundColor: 'white'}}>
      <h2>Book Appointments</h2>
      <DropDown></DropDown>
      <Layout style={{ marginTop: '10px' , width: '200px',backgroundColor: 'white' }}> 
        <DatePicker style={{ width: '100%' }} /> 
      </Layout>
      <Button style={{ marginTop: '10px',width:'200px'}} type="primary" onClick={handleSearch}>Search</Button>

      {searchPerformed && (
        <Layout style={{ backgroundColor: 'white'}}>
          {/* Additional content to display after the search */}
          <h3>Available Doctors</h3>
          <Table
            dataSource={data}
            bordered
            title={() => 'Asiri Institute'}
            columns={[
              { title: 'Name', dataIndex: 'name', render: (text) => <a>{text}</a> },
              { title: 'Specialization', dataIndex: 'specialization'},
              {
                render: () => (
                  <Button type="primary">Book</Button>
                ),
              },
            ]}
          />
        </Layout>
      )}
    </Layout>
  );
};

export default BookAppointment;
