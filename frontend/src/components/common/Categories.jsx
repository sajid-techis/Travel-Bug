import { useNavigate } from 'react-router-dom';
import React from "react";

const Categories = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div
      className="category-flex"
      onClick={() => navigate("/places?category=" + category.id)}
    >
      <img src={category.image} alt="" />
      <p>{ category.name}</p>
    </div>
  );
};

export default Categories;
