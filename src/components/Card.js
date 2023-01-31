import classes from "./Card.module.css";

const Card = ({ name, region, area, flag }) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-text"]}>
        <div className={classes.name}>
          <h3>Country: {name}</h3>
        </div>
        <h5>Region: {region}</h5>
        <p>
          With an area of {area}km<sup>2</sup>
        </p>
      </div>
      <img src={flag} alt="" />
    </div>
  );
};

export default Card;
