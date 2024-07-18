import React from "react";
import { FaStar } from "react-icons/fa";
import NewsFeedItem from "../components/NewsFeedItem";
import Pcart from "../components/Pcart";
import { FaArrowRight } from "react-icons/fa6";
import  { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() 
{
  useEffect(() => {
    AOS.init();
    document.title ="Home Page"
  }, [])
  return <>
  <section id="section2 ">
  <div className="container">
    <div className="row py-5">
    
      <div className="col-12 col-lg-8 mb-3 mb-lg-0 ">
       <a href="/SingleProduct"> <img src="banner-1.png" alt="Banner 1" className="img-fluid" /></a>
      </div>
   <div className="col-12 col-lg-4 d-flex flex-xl-column">
      <div className="col-6 col-lg-4 mb-3 mb-lg-4 ms-1 d-none d-lg-block">
       <a href="/SingleProduct"> <img src="banner-2.png" alt="Banner 2"  /></a>
      </div>
      <div className="col-6 col-lg-4 mb-3 mb-lg-4 ms-1 d-lg-none ">
       <a href="/SingleProduct"> <img src="banner-2.png" alt="Banner 2" className="img-fluid"  /></a>
      </div>
  
      <div className="col-6 col-lg-4 d-none d-lg-block">
        <a href="/SingleProduct"><img src="banner-3.png" alt="Banner 3"  /></a>
      </div>
      <div className="col-6 col-lg-4 d-lg-none">
        <a href="/SingleProduct"><img src="banner-3.png" alt="Banner 3" className=" img-fluid"  /></a>
      </div>
      </div>
    </div>
  </div>
</section>

   <section id="section3 " data-aos='fade-up' data-aos-offset='200' data-aos-duration='700'>
    <div className="container col-12 py-4 bg-white ">
  
      <div className="row">
        <div className=" col-12 col-md-6 col-lg-3">
          <div className="d-flex">
            <div><img src="/download (1).png" alt="" /></div>
            <div className="ms-4"><p className="fw-bold m-0">Free Shipping</p><p className="text-secondary small">When ordering over $100</p></div>
          </div>
          
        </div>
        <div className=" col-12 col-md-6 col-lg-3">
          <div className="d-flex">
            <div><img src="/download (5).png" alt="" /></div>
            <div className="ms-4"><p className="fw-bold m-0">Free Return</p><p className="text-secondary small">Get Return within 30 days</p></div>
          </div>
          
        </div>
        <div className=" col-12 col-md-6 col-lg-3">
          <div className="d-flex">
            <div><img src="/download (2).png" alt="" /></div>
            <div className="ms-4"><p className="fw-bold m-0">Secure Payment</p><p className="text-secondary small">100% Secure Online Payment</p></div>
          </div>
          
        </div>
        <div className=" col-12 col-md-6 col-lg-3">
          <div className="d-flex">
            <div><img src="/download (4).png" alt="" /></div>
            <div className="ms-4"><p className="fw-bold m-0">Best Quality</p><p className="text-secondary small">Original Product Guarenteed</p></div>
          </div>
          
        </div>
      </div>
    </div>

   </section>
 <section>
  <div className="container py-4">
<div className="row py-4 ">
  <div className="d-flex col-lg-12">
<div className="mb-3 col-lg-10"><h1>Gamer World</h1></div>
<div className="mb-3 col-lg-2">
      <a href="#" className="text-decoration-none text-black fs-5 fw-bold">
        <div>
        <a href="/AllProduct" className="text-decoration-none text-black"> <p>View More < FaArrowRight/></p></a> 
        </div>
      </a>
    </div>
 </div>
<div className="col-12 col-md-6 col-lg-3  bg-cover d-none d-md-block">
      <div className="category-card-wrapper py-4 ">
        <p className="fw-bold mb-2">Mobile & Tablet</p>
        <a href="#" className="d-block mb-1 py-1">Xiaomi</a>
        <a href="#" className="d-block mb-1 py-1 ">Apple</a>
        <a href="#" className="d-block mb-1  py-1">Google</a>
        <a href="#" className="d-block mb-1 py-1 ">Samsung</a>
        <a href=""><p className="fw-bold mb-5 py-5">Shop Now</p></a>
      </div>
    </div>
  <div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Xoggle aute et pariatur adipisicing nostrud et'}
 rate={3}
  pic={'/product-img-1.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>

<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Geeky ipsum esse repreh est consequat'}
 rate={5}
  pic={'/product-img-2.png'}
  pprice={'$24.55'}
  nprice={'$17.79'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Conjurica ea magna eiusmod esse cupt anim'}
 rate={5}
  pic={'/product-img-3.png'}
  pprice={'$32.63'}
  nprice={'$18.03'}
  />

</div>
</div>
  </div>
 </section>
 <section>
  <div className="container mb-5">
    <div className="d-flex justify-between item-center mb-5 fs-2 fw-bold">Shop by Brand</div>
    <div className="row py-4 d-flex col-12  justify-content-center align-items-center  bg-white "
    data-aos='fade-up' data-aos-offset='200' data-aos-duration='700'>
<img src="/brand-1.png" alt="" className="col-6 col-lg-2 p-5  "  />
<img src="/brand-2.png" alt="" className="col-6 col-lg-2 p-5" />
<img src="/brand-3.png" alt="" className="col-6 col-lg-2 p-5 " />
<img src="/brand-4.png" alt="" className="col-6 col-lg-2 p-5 " />
<img src="/brand-5.png" alt="" className="col-6 col-lg-2 p-5 " />
<img src="/brand-6.png" alt="" className="col-6 col-lg-2 p-5 " />
<img src="/brand-7.png" alt="" className="col-6 col-lg-2 p-5 " />
<img src="/brand-8.png" alt="" className="col-6 col-lg-2 p-5 " />
<img src="/brand-9.png" alt="" className="col-6 col-lg-2 p-5 " />
<img src="/brand-10.png" alt="" className="col-6 col-lg-2 p-5 " />
<img src="/brand-11.png" alt="" className="col-6 col-lg-2 p-5 " />
<img src="/brand-12.png" alt="" className="col-6 col-lg-2 p-5 " />
    </div>
  </div>
 </section>

 <section>
  <div className="container mb-5 align-items-center overflow-hidden col-12"
   data-aos='fade-right' data-aos-offset='200' data-aos-duration='700'>
<a href="">
    <img src="/ads-3.png" alt="Responsive image" className="img-fluid" />
    </a>
  </div>
</section>
 <section>
  <div className="container py-4">
<div className="row py-4 ">
  <div className="d-flex col-lg-12">
<div className="mb-3 col-lg-10"><h1>New Arrivals</h1></div>
<div className="mb-3 col-lg-2">
      <a href="#" className="text-decoration-none text-black fs-5 fw-bold">
        <div>
          <a href="/AllProduct" className="text-decoration-none text-black"><p>View More < FaArrowRight/></p></a>
        </div>
      </a>
    </div>
 </div>

  <div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Xoggle aute et pariatur adipisicing nostrud et'}
 rate={3}
  pic={'/product-img-1.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Geeky ipsum esse repreh est consequat'}
 rate={3}
  pic={'/product-img-2.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Conjurica ea magna eiusmod esse cupt anim'}
 rate={3}
  pic={'/product-img-3.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Senmei ipsum dolore eiusmod dolor officia do nisi'}
 rate={3}
  pic={'/product-img-4.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Canopoly duis voluptate dolor sunt sit adipisicing in'}
 rate={3}
  pic={'/product-img-5.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Unisure aliqua repreh ex cupt qui elit officia'}
 rate={3}
  pic={'/product-img-6.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Kenegy consectetur id ex nulla in adipisicing deserunt'}
 rate={3}
  pic={'/product-img-7.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Bizmatic consequat enim quis sit et est eiusmod'}
 rate={3}
  pic={'/product-img-8.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Anarco consectetur magna nostrud commodo tempor'}
 rate={3}
  pic={'/product-img-9.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Plasto cillum ad minim elit fugiat esse dolore'}
 rate={3}
  pic={'/product-img-10.png'}
  pprice={'$27.27'}
  nprice={'$18.73'}
  />

</div>


<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Geeky ipsum esse repreh est consequat'}
 rate={5}
  pic={'/product-img-2.png'}
  pprice={'$24.55'}
  nprice={'$17.79'}
  />

</div>
<div className="col-12 col-md-6 col-lg-3">
  
  <Pcart
  title={'Conjurica ea magna eiusmod esse cupt anim'}
 rate={5}
  pic={'/product-img-1.png'}
  pprice={'$32.63'}
  nprice={'$18.03'}
  />

</div>
</div>
  </div>
 </section>
 


<section>
  <div className="container mb-5 align-items-center overflow-hidden col-12"
  data-aos='fade-right' data-aos-offset='200' data-aos-duration='700'>
<a href="">
    <img src="/ads-4.png" alt="Responsive image" className="img-fluid" />
    </a>
  </div>
</section>
<section data-aos='fade-up' data-aos-offset='200' data-aos-duration='700' >
<div className="container py-4">
<div className="row py-4 ">
  <div className="d-flex col-lg-12">
<div className="mb-3 col-lg-10"><h1>Popular Sales</h1></div>
<div className="mb-3 col-lg-2">
      <a href="#" className="text-decoration-none text-black fs-5 fw-bold">
        <div>
          <a href="/AllProduct" className="text-decoration-none text-black"><p>View More < FaArrowRight/></p></a>
        </div>
      </a>
    </div></div>
  
   <div className="container ">
   <div className="row">
<div className="col-12 col-lg-4">

<NewsFeedItem 
fpicurl={"/product-img-4.png"} 
ftitle ={'Xoggle aute et pariatur'}
fpprice={'$27.27'}
fnprice={'$18.73'}
/>
</div>
<div className="col-12 col-lg-4">

<NewsFeedItem 
fpicurl={"/product-img-1.png"} 
ftitle ={'Xoggle aute et pariatur'}
fpprice={'$27.27'}
fnprice={'$18.73'}
/>
</div>
<div className="col-12 col-lg-4">

<NewsFeedItem 
fpicurl={"/product-img-3.png"} 
ftitle ={'Xoggle aute et pariatur'}
fpprice={'$27.27'}
fnprice={'$18.73'}
/>
</div>
<div className="col-12 col-lg-4">

<NewsFeedItem 
fpicurl={"/product-img-4.png"} 
ftitle ={'Xoggle aute et pariatur'}
fpprice={'$27.27'}
fnprice={'$18.73'}
/>
</div>
<div className="col-12 col-lg-4">

<NewsFeedItem 
fpicurl={"/product-img-1.png"} 
ftitle ={'Xoggle aute et pariatur'}
fpprice={'$27.27'}
fnprice={'$18.73'}
/>
</div>
<div className="col-12 col-lg-4">

<NewsFeedItem 
fpicurl={"/product-img-3.png"} 
ftitle ={'Xoggle aute et pariatur'}
fpprice={'$27.27'}
fnprice={'$18.73'}
/>
</div>


</div>
 </div>
</div>
</div> 

</section>

  </>;
}
