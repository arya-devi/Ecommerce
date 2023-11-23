import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} product</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          at quia deserunt vitae nam quaerat, a nihil veritatis veniam
          exercitationem beatae illo in ullam explicabo ea consequatur magni ex
          mollitia molestias praesentium! Architecto quisquam.
        </p>
      </div>
      <div className="bottom">
        {error ? "Somthing went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
