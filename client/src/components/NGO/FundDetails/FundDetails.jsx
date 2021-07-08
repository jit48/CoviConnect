import CircularProgressWithLabel from "../../CircularProgressBar/CircularProgressBar";
import { CircularProgress } from "@material-ui/core";
import "./fund.scss";

const FundDetails = (props) => {
  const { fundData, handleDeleteFund, isLoading} = props;

  const handleDelete = async (fund) => {
    handleDeleteFund(fund);
  };


  return (
    isLoading ? (<div className="fundsNgo">
      {fundData.map((fund) => (
        <div className="fundCardNgo">
          <div className="fundCard__Info">
            <div className="fundCard__progress">
            <b>
              <CircularProgressWithLabel
                value={((fund.raised / fund.amount) * 100) > 100 ? 100 : (fund.raised / fund.amount)*100}
                color="inherit"
                size="4rem"
                thickness={5}
              />
              </b>
            </div>
            <div className="fundCard__Details">
              <p>{fund.title}</p>
              <p>Created For:  {fund.name}</p>
              <p>
                Amount Raised: <b>{fund.raised}</b> of <b>{fund.amount}</b>
              </p>
            </div>
          </div>

          <div className="fundCard__Actions">
            <button type="submit" onClick={() => handleDelete(fund)}>
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>) : (
            <div className="spinner">
              <CircularProgress color="primary" size="4rem"/>
            </div>
          )
  );
};

export default FundDetails;
