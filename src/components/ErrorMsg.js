import classes from "./ErrorMsg.module.css";

const ErrorMsg = ({ errorMsg }) => {
  return <p className={classes.error}>{errorMsg}</p>;
};

export default ErrorMsg;
