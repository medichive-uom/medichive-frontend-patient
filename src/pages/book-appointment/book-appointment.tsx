import React, { useState } from "react";
import DropDown from "../../components/dropDown";
import { Button, DatePickerProps, Layout, Table } from "antd";
import { DatePicker } from "antd";
import type { Dayjs } from 'dayjs';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookAppointment: React.FC = () => {
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [showAvailableTimes, setShowAvailableTimes] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [availableDoctors, setAvailableDoctors] = useState<any[]>([]);
  const fetchData = async () => {
    // Fetch data from the server
    const response = await axios.get(`http://localhost:8080/patient/available-doctors?date=${selectedDate}`);
    console.log(response.data);
    return response.data;
  };
  const handleSearch = async () => {
    // Logic for performing the search goes here
    const doctors = await fetchData();
    setAvailableDoctors(doctors); // Set the available doctors in the state
    setSearchPerformed(true); // Set the state to indicate that the search has been performed

  };
  const handleBookAppointment = (instituteId:number,doctorId:number) => {
    console.log(instituteId,doctorId);
    navigate(`/bookappointment/doctor?instituteId=${instituteId}&doctorId=${doctorId}&date=${selectedDate}`);
  };
  const onChange: DatePickerProps<Dayjs[]>['onChange'] = (_ , dateString) => {
    setSelectedDate(Array.isArray(dateString) ? dateString.join('') : dateString);
  };

  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <h2>Book Appointments</h2>
      <DropDown/>
      <Layout style={{ marginTop: '10px', width: '200px', backgroundColor: 'white' }}>
        <DatePicker style={{ width: '100%' }} onChange={onChange} />
      </Layout>
      <Button style={{ marginTop: '10px', width: '200px' }} type="primary" onClick={handleSearch}>Search</Button>

      {searchPerformed && (
        <Layout style={{ backgroundColor: 'white' }}>
          {/* Additional content to display after the search */}
          <h3>Available Doctors</h3>
          {availableDoctors.map((institute) => (
          <Table
          key={institute.instituteDetails.id}
          dataSource={institute.availableDoctors}
            bordered
          title={() => `${institute.instituteDetails.instituteName}`}
            columns={[
            { title: 'Name', dataIndex: 'name', width: 500 },
            { title: 'Specialization',width: 500, dataIndex: 'specializations', render: (specializations: string[]) => specializations.join(', ') },
              {
              render: (_,record) => (
                <Button type="primary"  onClick={()=> handleBookAppointment(institute.instituteDetails.id,record.doctorId)}>Book</Button>
                ),
              },
            ]}
          />
          ))}
        </Layout>
      )}
    </Layout>
  );
};

export default BookAppointment;
