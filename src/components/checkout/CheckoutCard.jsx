import React from "react";

const CheckoutCard = ({ data }) => {
  return (
    <div className="flex my-5">
      <div>
        <img
          className="h-[150px] w-[150px] object-cover"
          src={
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa4fa66b-198e-447e-a241-ff44a6dc639f/lebron-xxi-akoya-ep-basketball-shoes-4tVgfH.png"
          }
          alt=""
        />
      </div>
      <div className="pl-2 text-left">
        <div>
          Name: <span className="font-medium">{data.name}</span>{" "}
        </div>
        <div>
          Quantity: <span className="font-medium">{data.quantity}</span>
        </div>
        <div>
          Price: <span className="font-medium">{data.total}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
