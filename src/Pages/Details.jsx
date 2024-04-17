import React, { useContext } from "react";
import { formContext } from "../AuthProvider/AuthProvider";
import NavTwo from "../Components/NavTwo";
import Footer from "../Components/Navbar/Footer";

export default function Details() {
  const [
    product,
    currentUser,
    setCurrentUser,
    selectProduct,
    setSelectProduct,
  ] = useContext(formContext);
  localStorage.setItem("details", JSON.stringify(selectProduct));

  function stars() {
    const rating = document.querySelectorAll(".rating");
    rating.forEach((rate) => {
      const ratingId = rate.dataset.productRating;
      rate.innerHTML = `<i class="fa fa-star"></i>`.repeat(
        Math.floor(ratingId)
      );
    });
  }

  return (
    <>
      
      
      <NavTwo />
      <div style={{ height: "95vh" }} className="hold-details">
        {
          <div
            key={selectProduct.id}
            data-aos="fade-up"
            class="product detail-pro"
            style={{ border: "none" }}
          >
            <p class="category">{selectProduct.category}</p>
            <div class="image-content">
              <img src={selectProduct.image} alt="" />
            </div>
            <div class="desc">
              <h3 class="title">{selectProduct.title}</h3>
              <div
                class="rating"
                data-product-rating={selectProduct.rating.rate}
              >
                {stars()}
              </div>
              <div class="description">
                {selectProduct.description}
              </div>
              <div class="price">${selectProduct.price.toFixed(2)}</div>
            </div>
            <button data-product-id="${selectProduct.id}">Add to basket</button>
          </div>
        }
      </div>
      <Footer />

    </>
  );
}
