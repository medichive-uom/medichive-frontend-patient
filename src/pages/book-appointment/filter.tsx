
type FilterProps = {
  handleSearch:Function;
  setSelectedDoctor:Function;
  setSelectedInstitute:Function;
  setSelectedSpecialization:Function;
  setSelectedDate:Function;
};
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
