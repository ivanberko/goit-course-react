import React from "react";
import PropTypes from "prop-types";

const HeadTransaction = ({
  type = "Type",
  amount = "Amount",
  currency = "Currency",
}) => (
  <thead>
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  </thead>
);

HeadTransaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}

export default HeadTransaction;
