import React from 'react'
import product_1 from "../../Assets/product_1.jpg"
import product_2 from "../../Assets/product_2.jpg"
import product_3 from "../../Assets/product_3.jpg"
import product_4 from "../../Assets/product_4.jpg"
import product_5 from "../../Assets/product_5.jpg"

export default function Carousal() {
     let c_height = {
          height: "55vh"
     }
     return (
          <div>
               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner">
                         <div class="carousel-item active">
                              <img src={product_2} class="d-block w-100" style={c_height} alt="Not Found" />
                         </div>
                         <div class="carousel-item">
                              <img src={product_1} class="d-block w-100" style={c_height} alt="Not Found" />
                         </div>
                         <div class="carousel-item">
                              <img src={product_3} class="d-block w-100" style={c_height} alt="Not Found" />
                         </div>
                         <div class="carousel-item">
                              <img src={product_4} class="d-block w-100" style={c_height} alt="Not Found" />
                         </div>
                         <div class="carousel-item">
                              <img src={product_5} class="d-block w-100" style={c_height} alt="Not Found" />
                         </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                         <span class="sr-only">Next</span>
                    </button>
               </div>
          </div>
     )
};
