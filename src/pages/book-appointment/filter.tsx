import React, { useState, useEffect } from 'react';
import { Select, Space ,Button,Layout,DatePicker,DatePickerProps} from 'antd';
import type { ConfigProviderProps } from 'antd';
import axios from 'axios';
import type { Dayjs } from 'dayjs';

type FilterProps = {
  handleSearch:Function;
  setSelectedDoctor:Function;
  setSelectedInstitute:Function;
  setSelectedSpecialization:Function;
  setSelectedDate:Function;
};
type SizeType = ConfigProviderProps['componentSize'];

const Filter: React.FC<FilterProps> = (props) => {
  const [size] = useState<SizeType>('middle');
  const [doctors, setDoctors] = useState<any[]>([]);
  const [institutes, setInstitutes] = useState<any[]>([]);
  const [specializations, setSpecializations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);           
  const [error, setError] = useState<string | null>(null);

    // Function to handle date change in DatePicker
    const onChange: DatePickerProps<Dayjs[]>['onChange'] = (_ , dateString) => {
      props.setSelectedDate(Array.isArray(dateString) ? dateString.join('') : dateString);
    };

  useEffect(() => {
    const fetchData = async (url: string, setData: Function) => {
      try {
        const response = await axios.get(url);
        const { data } = response;
        console.log(data);
        if (Array.isArray(data)) {
          setData(data);
        }
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData('http://localhost:8080/patient/doctors', setDoctors);
    fetchData('http://localhost:8080/patient/institutes', setInstitutes);
    fetchData('http://localhost:8080/patient/specializations', setSpecializations);
  }, []);

  const handleDoctorChange = (value: string) => {
    props.setSelectedDoctor(value);
  };

  const handleInstituteChange = (value: string) => {
    props.setSelectedInstitute(value);
  };

  const handleSpecializationChange = (value: string) => {
    props.setSelectedSpecialization(value);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Select
          size={size}
          defaultValue="Doctor"
          style={{ width: 200 }}
          loading={loading}
          options={doctors.map((doctor) => ({ value: doctor.id, label: doctor.name }))}
          onChange={handleDoctorChange}
        />
        <Select
          size={size}
          defaultValue="Institute"
          style={{ width: 200 }}
          loading={loading}
          options={institutes.map((institute) => ({ value: institute.id, label: institute.instituteName }))}
          onChange={handleInstituteChange}
        />
        <Select
          size={size}
          defaultValue="Specialization"
          style={{ width: 200 }}
          loading={loading}
          options={specializations.map((specialization) => ({ value: specialization.id, label: specialization.name }))}
          onChange={handleSpecializationChange}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </Space>
      <Layout style={{ marginTop: '10px', width: '200px', backgroundColor: 'white' }}>
        <DatePicker style={{ width: '100%' }} onChange={onChange} />
      </Layout>
      <Button style={{ marginTop: '10px', width: '200px' }} type="primary" onClick={()=>props.handleSearch()}>Search</Button>
    </>
  );
};

export default Filter;
