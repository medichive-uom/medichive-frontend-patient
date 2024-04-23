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
