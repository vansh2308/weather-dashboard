

const getWeatherDetails = async (lat, long) => {
  const url = `https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?timesteps=1m&location=${lat}%2C%20${long}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6a9667dd60mshc70da3aafabb8a0p1b8ebfjsnea66bffd6270',
      'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export default getWeatherDetails