import React, { useContext, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { formContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../Navbar";

export default function Header() {
  let items, next, prev, refreshInterval, countItem, itemActive;
  const [product, currentUser, setCurrentUser] = useContext(formContext);

  useEffect(() => {
    items = document.querySelectorAll(".slider .list .item");
    next = document.getElementById("next");
    prev = document.getElementById("prev");
    countItem = items.length;
    itemActive = 0;

    next.onclick = function () {
      itemActive = itemActive + 1;
      if (itemActive === countItem) {
        itemActive = 0;
      }
      showSlider();
    };
    prev.onclick = function () {
      itemActive = (itemActive - 1 + countItem) % countItem;
      showSlider();
    };

    refreshInterval = setInterval(() => {
      next.click();
    }, 5000);

    function showSlider() {
      let itemActiveOld = document.querySelector(".slider .list .item.active");
      if (itemActiveOld) {
        itemActiveOld.classList.remove("active");
      }

      items.forEach((item, index) => {
        if (index === itemActive) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 10000);
    }

    return () => {
      clearInterval(refreshInterval);
    };
  });
  return (
    <header className="header">
      <Navbar />
      <div className="slider">
        <div class="list">
          <div class="item active">
            <img src="/images/pexels-negative-space-34577.jpg" />
            <div class="content">
              <h1>Hey {currentUser}</h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </h1>
              <button>DISCOVER</button>
            </div>
          </div>
          <div class="item">
            <img src="/images/pexels-nataliya-vaitkevich-6214476.jpg" />
            <div class="content">
              <h1>Hey {currentUser}</h1>

              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </h1>
              <button>DISCOVER</button>
            </div>
          </div>
          <div class="item">
            <img src="/images/pexels-laryssa-suaid-1667071.jpg" />
            <div class="content">
              <h1>Hey {currentUser}</h1>

              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </h1>
              <button>DISCOVER</button>
            </div>
          </div>
          <div class="item">
            <img src="/images/pexels-igor-ovsyannykov-205961.jpg" />
            <div class="content">
              <h1>Hey {currentUser}</h1>

              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </h1>
              <button>DISCOVER</button>
            </div>
          </div>
          <div className="arrows">
            <button id="prev">{"<"}</button>
            <button id="next">{">"}</button>
          </div>
        </div>
      </div>
    </header>
  );
}
