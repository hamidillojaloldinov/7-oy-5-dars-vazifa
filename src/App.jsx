import { useState } from "react";
import IconCard from "/icon-cart.svg";
import logo from "/logo.svg";
import next from "/icon-next.svg";
import previous from "/icon-previous.svg";
import close from "/icon-close.svg";
import delete2 from "/icon-delete.svg";
import avatar from "/image-avatar.png";
import image1 from "/image-product-1.jpg";
import image1Thumbnail from "/image-product-1-thumbnail.jpg";
import image2Thumbnail from "/image-product-2-thumbnail.jpg";
import image3Thumbnail from "/image-product-3-thumbnail.jpg";
import image4Thumbnail from "/image-product-4-thumbnail.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [images, setimages] = useState(false);
  const [korzinka, setkorzinka] = useState(false);

  // function dataFromLocalStorage() {
  //   return (
  //     JSON.parse(localStorage.getItem("count")) || {
  //       count: 0,
  //     }
  //   );
  // }
  // dataFromLocalStorage();

  console.log(korzinka);
  return (
    <>
      <header>
        <nav>
          <div className="flex">
            <div>
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <ul>
              <li>
                <a href="/">Collections</a>
              </li>
              <li>
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Women</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex itmes-center gap-10">
            <div className="flex">
              {korzinka && (
                <div className="div-4 inline">
                  <div>
                    <h3 className="div-12">Card</h3>
                    <div className="div-5">
                      {count2 == 0 ? (
                        <h3>Your cart is empty.</h3>
                      ) : (
                        <div>
                          <div className="flex gap-2">
                            <img
                              className="img12"
                              width={30}
                              src={image1Thumbnail}
                              alt=""
                            />
                            <div>
                              <p>Fall Limited Edition Sneakers</p>
                              <div>
                              $125.00 x {count2} ${count2*125}.00
                              </div>
                            </div>
                            <button onClick={()=> setCount2(0)} className="pointer">
                              <img src={delete2} alt="" />
                            </button>
                          </div>
                          <button className="button flex jcc m-auto inline">Checkout</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <img
                className="pointer"
                onClick={() => setkorzinka(!korzinka)}
                src={IconCard}
                alt=""
              />
              <p className="p-p">{count2 == 0 ? "" : count2}</p>
            </div>
            <div>
              <img
                onClick={() => setkorzinka(!korzinka)}
                width="50px"
                src={avatar}
                alt=""
              />
            </div>
          </div>
        </nav>
      </header>
      <main className="flex">
        <div className="">
          <div className="flex jcc place-items m-auto">
            {images && (
              <div className="overlay flex place-items m-auto jcc">
                <div className="gap-10">
                  <img
                    onClick={() => setimages(false)}
                    className="p"
                    src={close}
                    alt=""
                  />
                  <div className="m-auto flex jcc gap-10 auto">
                    <div className="div2">
                      <img src={previous} alt="" />
                    </div>
                    <img className="auto img1" src={image1} alt="" />
                    <div className="div2">
                      <img src={next} alt="" />
                    </div>
                  </div>
                  <div className="flex jcc">
                    <img
                      className="img1Thumbnail auto"
                      src={image1Thumbnail}
                      alt=""
                    />
                    <img
                      className="imgThumbnail auto"
                      src={image2Thumbnail}
                      alt=""
                    />
                    <img
                      className="imgThumbnail auto"
                      src={image3Thumbnail}
                      alt=""
                    />
                    <img
                      className="imgThumbnail auto"
                      src={image4Thumbnail}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
            <div>
              <img
                onClick={() => setimages(true)}
                className="img1"
                src={image1}
                alt=""
              />
              <div className="divdiv">
                <img
                  onClick={() => setimages(true)}
                  className="img1Thumbnail"
                  src={image1Thumbnail}
                  alt=""
                />
                <img
                  onClick={() => setimages(true)}
                  className="imgThumbnail"
                  src={image2Thumbnail}
                  alt=""
                />
                <img
                  onClick={() => setimages(true)}
                  className="imgThumbnail"
                  src={image3Thumbnail}
                  alt=""
                />
                <img
                  onClick={() => setimages(true)}
                  className="imgThumbnail"
                  src={image4Thumbnail}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="h42">Sneaker Company</h4>
          <h1>
            Fall Limited Edition <br /> Sneakers
          </h1>
          <p>
            These low-profile sneakers are your perfect casual wear <br />
            companion. Featuring a durable rubber outer sole, they’ll <br />
            withstand everything the weather can offer.
          </p>
          <div>
            <div className="flex gap-10">
              <h3>$125.00</h3> <h4 className="h4">50%</h4>
            </div>
            <h4 className="text">$250.00</h4>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-10">
              <button
                className="btn-2"
                onClick={() => setCount(count - 1)}
                disabled={count2 == 0 ? true : false}
              >
                -
              </button>
              {count}
              <button className="btn-2" onClick={() => setCount(count + 1)}>
                +
              </button>
            </div>
            <button
              disabled={count == 0 ? true : false}
              onClick={() => {
                setCount2(count + count2);
                setCount(0);
              }}
              className="button"
            >
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
