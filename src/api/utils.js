const API_URL = "https://restcountries.com/v2/all?fields=name,region,area,flag";

const getAllCountries = async () => {
  const data = await fetch(API_URL)
    .then((response) => response.json())
    .catch(() => `something wrong`);
  return data;
};

export default getAllCountries;
