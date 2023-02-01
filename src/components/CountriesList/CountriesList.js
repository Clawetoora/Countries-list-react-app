import Card from "../Card/Card";
import classes from "./CountriesList.module.css";
const CountriesList = ({ data }) => {
  return (
    <section className={classes.list}>
      {data.map((country, idx) => {
        return (
          <Card
            key={idx}
            name={country.name}
            region={country.region}
            area={country.area}
            flag={country.flag}
          />
        );
      })}
    </section>
  );
};

export default CountriesList;
