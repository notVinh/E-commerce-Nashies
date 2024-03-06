import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    if (message.includes("hello")) {
      actions.handleHello();
    }
    if (
      message.includes(
        "bạn có thể cho tôi biết thêm một vài sản phẩm khác đc không"
      )
    ) {
      actions.handleProduct();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
