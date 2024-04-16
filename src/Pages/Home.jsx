import React, { useContext, useState } from "react";
// import Navbar from "../Components/Navbar/Header";
import { formContext } from "../AuthProvider/AuthProvider";
import "./Home.css";
import Header from "../Components/Navbar/Header";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const naviagte = useNavigate(); // const [delay, setDelay] = useState(100);
  const [
    product,
    currentUser,
    setCurrentUser,
    selectProduct,
    setSelectProduct,
  ] = useContext(formContext);

  localStorage.setItem("user", currentUser)
  function stars() {
    const rating = document.querySelectorAll(".rating");
    rating.forEach((rate) => {
      const ratingId = rate.dataset.productRating;
      rate.innerHTML = `<i class="fa fa-star"></i>`.repeat(
        Math.floor(ratingId)
      );
    });
  }
  // console.log(product);
  console.log(selectProduct)
  
  let delay = 20;
  return (
    <>
      <Header />
      <section className="products">
        {product.map((product) => {
          setSelectProduct(product);
          delay += 100;
          return (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={delay}
              class="product"
              onClick={()=>setSelectProduct(product)}
            >
              <p class="category">{product.category}</p>
              <div class="image-content">
                <img src={product.image} alt="" />
              </div>
              <div class="desc">
                <h3 class="title">{product.title.slice(0, 20)}...</h3>
                <div class="rating" data-product-rating={product.rating.rate}>
                  ${stars()}
                </div>
                <div class="description">
                  {product.description.slice(0, 100)}....
                </div>
                <div class="price">${product.price.toFixed(2)}</div>
              </div>
              <button
                data-product-id="${product.id}"
                onClick={() => naviagte("/details")}
              >
                View Details
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}
