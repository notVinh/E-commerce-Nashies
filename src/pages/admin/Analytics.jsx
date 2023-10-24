import React from "react";
import Total from "../../components/admin/Analytic/Total";

const Analytics = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <Total
          title={"Total Sales"}
          quantity={"$65,024"}
          percent={"+81%"}
          color={"#1B9C85"}
        />
        <Total
          title={"Total Sales"}
          quantity={"$65,024"}
          percent={"+81%"}
          color={"#FF0060"}
        />
        <Total
          title={"Total Sales"}
          quantity={"$65,024"}
          percent={"+81%"}
          color={"#6C9BCF"}
        />
      </div>
    </div>
  );
};

export default Analytics;
