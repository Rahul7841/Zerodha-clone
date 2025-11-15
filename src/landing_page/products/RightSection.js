import React from "react";

function RightSection({
  imageURl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>

            <a href={learnMore}>
              Learn More
            </a>
          
        </div>
        <div className="col-6">
            <img src={imageURl} />
          </div>
      </div>
    </div>
  );
}

export default RightSection;
