import React from "react";

const Card = ({ computer$office }) => {
  return (
    <>
      <div className="border w-fit px-4">
        <div className="flex w-full">
          <img
            loading="lazy"
            className="h-[220px] w-60 rounded-sm"
            src={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1.1-Benefits-for-business-manage-more-616x498?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=808&qlt=100&fmt=png-alpha&fit=constrain"}
            alt=""
          />
        </div>
        <div className="">
          <div>
            <span>www</span>
          </div>
          <div>
            <p style={{ fontSize: "12px" }}></p>
          </div>
          <div>
            <span>AED </span>
          </div>
          <div className="flex  justify-between items-center">
            <span className="bg-[#FF0000] p-1 rounded-tl-xl rounded-bl-xl rounded-br-xl  md:text-[14px] max-sm:text-[9px] animate-pulse">
              Best Deal
            </span>
            <span className="text-[#E4730A] max-sm:text-[9px] text-[14px]">
              Only 3 left in stock
            </span>
          </div>
        </div>
      </div>
    </>

  );
};

export default Card;
