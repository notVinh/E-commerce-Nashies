import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct } from "../redux/slices/productSlide";

const Home = () => {
  // const dispatch = useDispatch();
  // const [query, setQuery] = useState("");
  // useEffect(() => {
  //   dispatch(getAllProduct(query));
  // }, [query]);
  return (
    <div className="">
      <div>
        <video
          src="https://res.cloudinary.com/dshvydi5f/video/upload/v1709050189/vShop/videos/showcase_nndtm4.mp4"
          autoPlay
          muted
          loop
        ></video>
        {/* <img src="img/bg-main.png" alt="" /> */}
        <nav className="mt-12 mb-24">
          <div className="font-extrabold text-6xl">SHAPE YOUR STYLE</div>
          <div className="text-lg py-3">
            Wear what you like and do what you want
          </div>
          <a
            href="/products"
            className="py-2 px-5 bg-black text-white rounded-full m-auto"
          >
            Shop
          </a>
        </nav>
        <nav className="flex mx-10 mb-20">
          <div className="w-1/2 relative ">
            <img
              className="object-contain pr-1 "
              src="https://res.cloudinary.com/dshvydi5f/image/upload/v1709050095/vShop/images/mansplash_b2odzw.png"
              alt=""
            />
            <div className="absolute left-[42px] bottom-[42px] text-white font-semibold text-left">
              <div>{`Men's Lifestyle`}</div>
              <div className="mb-6">Everyday classic kick</div>
              <a
                href="/products"
                className="rounded-full py-2 px-5 bg-white text-black"
              >
                Shop Now
              </a>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img
              className=" object-contain pl-1"
              src="https://res.cloudinary.com/dshvydi5f/image/upload/v1709050096/vShop/images/womansplash_j6ahxo.png"
              alt=""
            />
            <div className="absolute right-[42px] bottom-[42px] text-white font-semibold text-right">
              <div>{`Women's Lifestyle`}</div>
              <div className="mb-6">Fresh everyday</div>
              <a
                href="/products"
                className="rounded-full py-2 px-5 bg-white text-black"
              >
                Shop Now
              </a>
            </div>
          </div>
        </nav>
        <nav className="mx-10 my-10">
          <div className="text-left font-medium text-2xl mb-6">The Latest</div>
          <video
            src="https://res.cloudinary.com/dshvydi5f/video/upload/v1709050188/vShop/videos/showcase2_cdv95u.mp4"
            autoPlay
            muted
            loop
          ></video>
        </nav>
        <nav className="t-12 mb-24">
          <div className="font-extrabold text-6xl">RUN YOUR RUN</div>
          <div className="text-lg py-3">
            Follow the feeling that keeps you running your best in the city
          </div>
          <a
            href="/products"
            className="py-2 px-5 bg-black text-white rounded-full m-auto"
          >
            Shop
          </a>
        </nav>
        <nav className="mx-10">
          <div className="text-left font-medium text-2xl mb-6">Trending</div>
        </nav>
        <nav className="flex mx-10 mb-20">
          <div className="w-1/2 relative ">
            <img
              className="object-cover w-full h-screen pr-1 "
              src="https://res.cloudinary.com/dshvydi5f/image/upload/v1709050093/vShop/images/product1_bflole.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 relative">
            <img
              className=" object-cover w-full h-screen pl-1"
              src="https://res.cloudinary.com/dshvydi5f/image/upload/v1709050095/vShop/images/product2_lmlsf9.jpg"
              alt=""
            />
          </div>
        </nav>
        <nav className="mx-10 my-10">
          <div className="text-left font-medium text-2xl mb-6">
            Alway Iconic
          </div>
        </nav>
        <nav></nav>
      </div>
    </div>
  );
};

export default Home;
