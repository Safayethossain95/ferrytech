import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ProductPortfolioComp = ({ version = "desktop" }) => {
  const sliderImages = [
    {
      id: 1,
      src: "/assets/images/product-portfolio/slider_excavators.jpg",
      alt: "Construction Machinery Lineup",
    },
    {
      id: 2,
      src: "/assets/images/product-portfolio/slider_reachstackers_line.jpg",
      alt: "Reach Stackers and Heavy Equipment",
    },
    {
      id: 3,
      src: "/assets/images/product-portfolio/slider_cvs_reachstacker.jpg",
      alt: "CVS Reach Stacker",
    },
    {
      id: 4,
      src: "/assets/images/product-portfolio/slider_straddle_carrier.jpg",
      alt: "Straddle Carrier",
    },
    {
      id: 5,
      src: "/assets/images/product-portfolio/slider_rmg_gantry.jpg",
      alt: "Rail Mounted Gantry Crane",
    },
    {
      id: 6,
      src: "/assets/images/product-portfolio/slider_cantilever_gantry.jpg",
      alt: "Cantilever Port Crane",
    },
  ];

  return (
    <section className={`product-portfolio-section ${version}`}>
      <div className="portfolio-container">
        {/* Main Content: Text Left, Grid Right */}
        <div className="portfolio-main-grid">
          {/* Left Column: Heading & Detailed Description */}
          <div className="portfolio-text-col">
            <h1 className="portfolio-title">Product Portfolio</h1>
            <p className="portfolio-description">
              Ferrytech is a proven-and-tested, premier supplier of varied product portfolio, consisting of but not limited to the following: Container Handling Equipment for seaports and land ports: Terminal Tractor, Empty/Loaded Container Lifter, Empty/Loaded Reach Stacker, Straddle Carrier, Rubber Tyred Gantry Crane (RTGC), Rail Mounted Gantry Cranes (RMGC),VARIABLE REACH TRUCK, Ship-To-Shore Gantry Cranes, Automatic Stacking Cranes, Mobile Harbour cranes, Yard IT For Container Handling, Shipyard Cranes, Portal Cranes, Container Positioning Information System, etc. Mobile Cranes (RT & AT), Overhead Cranes, Forklifts, Excavators, Construction equipment, etc. Industrial plant and equipment / license business, Steel Re-Rolling Mills/Plant, Water Treatment Plant, Oil & Gas, Trading, Energy & Power, RMG & Fashion, Environmental, Turnkey Plant, Petrochemical, Facilities Management, Intelligent & Defense, IT & Communication, Solar, etc. Marine engine spare parts for commercial applications. Various components for marine applications such as steel plates for shipbuilding, radar equipment for vessels, heavy-duty chains for anchoring, etc. In addition to providing world class superior Air Ambulance, Boat Ambulance, Mobile Hospital, Ambulance (Intensive Care, Box Type Newborn, Comfort, Trend, Classical, Multiple Patients Transports, etc.), Vehicles (Mobile Health Care, ICU & Surgery, Surgery Trailer, Mobile Mammography Screening, Mobile Laboratory, Mobile Pulmonary / Cardiology Screening, Mobile Auditory Screening, Medical Rescue Team, Gynecology, Ophthalmology & ENT, etc.), Hospital and Medical equipment, etc.
            </p>
            <p className="portfolio-description secondary-paragraph">
              Ferrytech ventured out on a new line of business providing long term contracts for maintaining those equipment. This is yet another example of how Ferrytech provides the best and most ingenuous service and products, so that customers remain engaged with their own lines of business without having to invest resources to track or maintain their equipment. Ferrytech is able to provide such superior products and services only due to its long history with each of its principal companies.
            </p>
          </div>

          {/* Right Column: 2-Column Staggered Image Gallery */}
          <div className="portfolio-gallery-col">
            {/* Sub-column 1 */}
            <div className="gallery-subcol subcol-1">
              <div className="portfolio-img-card card-landscape">
                <img
                  src="/assets/images/product-portfolio/grid_gantry_shipyard.jpg"
                  alt="Shipyard Gantry Crane"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-img-card card-portrait">
                <img
                  src="/assets/images/product-portfolio/grid_reachstacker_poster.jpg"
                  alt="Ferrari Experience The Future Reach Stacker"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-img-card card-square">
                <img
                  src="/assets/images/product-portfolio/grid_mantsinen_crane.jpg"
                  alt="Mantsinen 160 Material Handler Crane"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-img-card card-landscape">
                <img
                  src="/assets/images/product-portfolio/grid_sts_crane.jpg"
                  alt="Ship to Shore STS Port Crane"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Sub-column 2 */}
            <div className="gallery-subcol subcol-2 mx-auto w-[80%]">
              <div className="portfolio-img-card card-landscape">
                <img
                  src="/assets/images/product-portfolio/grid_terminal_tractor.jpg"
                  alt="Port Terminal Tractor"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-img-card card-tall">
                <img
                  src="/assets/images/product-portfolio/grid_container_handler_mast.jpg"
                  alt="Empty Container Handler High Mast"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-img-card card-tall">
                <img
                  src="/assets/images/product-portfolio/grid_straddle_carrier.jpg"
                  alt="Port Straddle Carrier"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Autoplay Carousel Slider */}
        <div className="portfolio-slider-wrap">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.8}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 2.2,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4.8,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 18,
              },
            }}
            className="portfolio-swiper"
          >
            {[...sliderImages, ...sliderImages].map((item) => (
              <SwiperSlide key={item.id} className="portfolio-slide">
                <div className="portfolio-slide-card">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolioComp;
