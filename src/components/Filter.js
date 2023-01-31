import classes from "./Filter.module.css";

const Filter = ({ changeOrder, onFilterValueSelected, setCurrentPage }) => {
  const onFilterValueChange = (e) => {
    setCurrentPage(1);
    onFilterValueSelected(e.target.value);
  };

  return (
    <>
      <div className={classes.filter}>
        <div>
          <label htmlFor="sort">Sort by country name:</label>
          <select name="sort" id="sort" onChange={() => changeOrder()}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div>
          <label htmlFor="filter">Filter by:</label>
          <select name="filter" id="filter" onChange={onFilterValueChange}>
            <option value="all">Show all</option>
            <option value="area">Smaller than Lithuania</option>
            <option value="oceania">Region: Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
