import { useState } from "react";
import { AboutUs } from "../../components/Home/AboutUs/AboutUs";
import { Banner } from "../../components/Home/Banner/Banner";
import { Blog } from "../../components/Home/Blog/Blog";
import { Categories } from "../../components/Home/Categories/Categories";
import { EcoFriendly } from "../../components/Home/EcoFriendly/EcoFriendly";
import { Galery } from "../../components/Home/Galery/Galery";
import { Offer } from "../../components/Home/Offer/Offer";
import { Testimonials } from "../../components/Home/Testimonials/Testimonials";
import { OrderGood } from "../../types/orderGood";
import { Subscribe } from "../../components/Subscribe/Subscribe";


export const Home = () => {

  return (
    <>
      <Banner />
      <AboutUs />
      <Categories />
      <Testimonials />
      <Offer />
      <EcoFriendly />
      <Galery />
      <Blog />
      <Subscribe />
    </>
  )
}