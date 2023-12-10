import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <ThreeDots
      height="25"
      width="25"
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
      visible={true}
    >
      Spinner
    </ThreeDots>
  );
};

export default Spinner;
