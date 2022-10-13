import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
    return ( 
        <div className="home">

          <div className="home_container">
              <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="chumma" 
                    className="home_image"/>
          </div>

          <div className="home_row">
            <Product 
                id="12321341"
                title="The Lean Startup" 
                image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184l/10127019._SY475_.jpg" 
                price={19.99} 
                rating={4}  
            />
            <Product 
              id="49538094"
              title="Kenwood kMix Stand mixer for Baking, Stylish kitchen mixer with 
                      K-beater, Dough hook and Whirpool, 5L glass jar"
              price={239.0}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
              />
            <Product 
              id="4903850"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
          </div>

          <div className="home_row">
            <Product
              id="23445930"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"              
            />
            <Product 
              id="3254354345"
              title="Asus TUF Gaming FX505DGE-BR5 Gaming Laptop, Intel Core i7-9750H, NVIDIA GeForce GTX 1660 Ti 6GB, 16GB DDR4, 240GB SSD, 15.6-inch FHD IPS Display, Windows 10 Home"
              price={600.99}
              rating={4}
              image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgGcbAY2POf1swTQ3wn03l4xe3VaHyr06obiInQIS0SLFVKdTf7SN5_XFAnN_0zfqapzDFm3Wue5Q&usqp=CAc"
            />
         </div>

          <div className="home_row">
            <Product 
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
     );
}
 
export default Home;