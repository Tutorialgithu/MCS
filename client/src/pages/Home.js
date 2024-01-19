import React, { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
import MainSlider from "./MainSlider";
import Footer from "./Footer";
import Header from "./Header";
import "./Hr.css";
import "./Spinner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import repair from "../assets/images/repair.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import saloon from "../assets/images/saloon.jpg";
import tiffin from "../assets/images/tiffin.png";
import Travels from "../assets/images/travels.jpg";

const Spinner = () => (
  <div>
    <div className="overlay">
      <div className="loader">
        <div className="loader-inner ball1"></div>
        <div className="loader-inner ball2"></div>
      </div>
    </div>
  </div>
);

const tiffinData = [
  /* Tiffin Service */
  {
    imageUrl:
      "https://www.shutterstock.com/image-photo/indian-hindu-veg-thali-food-260nw-1435372313.jpg",
    altText: "Card 1",
    description: "Basic Thali starts from 60/-",
  },
  {
    imageUrl:
      "https://thumbs.dreamstime.com/b/indian-vegetarian-lunch-box-tiffin-made-up-stainless-steel-office-workplace-includes-dal-fry-gobi-masala-rice-190422052.jpg",
    altText: "Card 2",
    description: "Deluxe Thali starts from 80/-",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-also-known-as-food-platter-is-complete-lunch-dinner-meal-closeup-selective-focus_466689-9082.jpg",
    altText: "Card 3",
    description: "Premium Thali starts from 100/-",
  },
  {
    imageUrl:
      "https://www.shutterstock.com/image-photo/indian-food-thali-north-260nw-694601056.jpg",
    altText: "Card 4",
    description: "Special Thali starts from 120/-",
  },
  {
    imageUrl:
      "https://www.shutterstock.com/image-photo/indian-food-thali-north-260nw-694601056.jpg",
    altText: "Card 5",
    description: "Special Thali starts from 120/-",
  },
];

/* Saloon Service*/

const saloonData = [
  {
    imageUrl:
      "https://c0.wallpaperflare.com/preview/682/321/234/barber-barbershop-facial-expression-facial-hair.jpg",
    altText: "Card 1",
    description: "Hair Cutting starting from 50/-",
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/851007946/photo/woman-getting-hair-shampooed-at-salon.webp?b=1&s=170667a&w=0&k=20&c=1869mjAAf8EMPjTR0mOjIBBI-iVxbK4jw8mNHUEy5KE=",
    altText: "Card 2",
    description: "SPA Starting From 1150/-",
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/465356691/photo/beautician-waxing-a-womans-leg.jpg?s=612x612&w=0&k=20&c=SmX1cMtzDIpY99TTresVixzPW6fyyvFjadw89Iwi0iM=",
    altText: "Card 3",
    description: "waxing charges starting from 150",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pedicurist-master-makes-pedicure-woman-s-legs-spa-treatment-concept_186202-7772.jpg",
    altText: "Card 4",
    description: "Pedicure starting from 1500",
  },
  {
    imageUrl:
      "https://st2.depositphotos.com/1004918/8230/i/450/depositphotos_82307580-stock-photo-hair-straighteners.jpg",
    altText: "Card 5",
    description: "hair Straightening starting from 1500",
  },
];

/* restaurant Service*/
const restaurantData = [
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/table-full-food-including-rice-curry-plate-food_900958-7307.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=ais",
    altText: "Card 1",
    description: "Indian thali starting from 150/-",
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/951170986/photo/pasta-with-different-kinds-of-sauce.jpg?s=612x612&w=0&k=20&c=oMPwoEeeNgZds2L612xEcZgaB3NT5h75DrOzAtTTThA=",
    altText: "Card 2",
    description: "Italian food Starting From 115/-",
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1366953086/photo/korean-dishes.jpg?s=612x612&w=0&k=20&c=3nYEdg3y3HfAeJu-Vf5GQYO3iEhFm-syRgSFr6hL874=",
    altText: "Card 3",
    description: "Chinese food starting from 89/-",
  },
  {
    imageUrl:
      "https://st.depositphotos.com/2702761/3312/i/450/depositphotos_33121705-stock-photo-traditional-indian-sweets.jpg",
    altText: "Card 4",
    description: "Indian dessert starting from 50/-",
  },
  {
    imageUrl:
      "https://f.hubspotusercontent00.net/hubfs/4662006/Beverage_compounds_drinks.jpg",
    altText: "Card 5",
    description: "Beverages starting from 100/-",
  },
];

/* restaurant Service*/
const repairData = [
  {
    imageUrl:
      "https://media.istockphoto.com/id/1392033182/photo/man-plumber-at-work-plumbing-repair-service-assemble-and-install-concept.jpg?s=612x612&w=0&k=20&c=oHZVXvF7Cg88xB11_-n7IN3Tq4DkNJqfbheGUMqOQps=",
    altText: "Card 1",
    description: "Plumbering Service",
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1015452484/sv/foto/hem-elsystem.jpg?s=612x612&w=0&k=20&c=paB92qZeyvbAZj6vEskTHayMNfL-N_ujLmyiBtgTRwg=",
    altText: "Card 2",
    description: "Electrician Service",
  },
  {
    imageUrl:
      "https://c1.wallpaperflare.com/preview/363/11/782/service-it-computers-repair-electronics-computer.jpg",
    altText: "Card 3",
    description: "Computer Repair Service",
  },
  {
    imageUrl:
      "https://png.pngtree.com/thumb_back/fh260/background/20220817/pngtree-repairman-repairing-tv-at-home-checking-appliance-job-photo-photo-image_33281264.jpg",
    altText: "Card 4",
    description: "Home Appliances Repair service",
  },
  {
    imageUrl:
      "https://png.pngtree.com/thumb_back/fw800/background/20230301/pngtree-repairman-carpenter-cutting-sawing-a-wooden-board-with-an-electr-repairman-photo-image_1736970.jpg",
    altText: "Card 5",
    description: "Carpentry services",
  },
];

/* Cake Service*/
const cakeData = [
  {
    imageUrl:
      "https://www.craftybaking.com/images/uploads/old/recipe_images/PhotoDraw36584120.jpg",
    altText: "Card 1",
    description: "Yellow Butter Cake",
  },
  {
    imageUrl:
      "https://sahnibakery.com/cdn/shop/products/Iloveyouredvelvetcake1kg-1999_2kg-2999@2x.jpg?v=1609478546",
    altText: "Card 2",
    description: "Red Velvet Cake",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/chocolate-cake-with-dried-fruit_144627-9029.jpg",
    altText: "Card 3",
    description: "Chocolate Cake",
  },
  {
    imageUrl:
      "https://thecaketown.com/wp-content/uploads/2018/10/premium-vanilla-1.jpg",
    altText: "Card 4",
    description: "Vanilla Cake",
  },
  {
    imageUrl:
      "https://milkandhoney.in/wp-content/uploads/2013/06/Pineapple-cake-600x600.png",
    altText: "Card 5",
    description: "ButterScotch Cake",
  },
];

/* Cake Service*/
const travelData = [
  {
    imageUrl:
      "https://t3.ftcdn.net/jpg/01/40/51/56/360_F_140515612_0MMpqpsIvs6xno5YXmPVy9FUmZ4uLnFB.jpg",
    altText: "Card 1",
    description: "Goa trip starting @5000/-",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VsbHUlMjBtYW5hbGl8ZW58MHx8MHx8fDA%3D",
    altText: "Card 2",
    description: "Manali trip starting @3999/-",
  },
  {
    imageUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/558/388/desktop-wallpaper-shimla-thumbnail.jpg",
    altText: "Card 3",
    description: "Shimla trip starting @2999/-",
  },
  {
    imageUrl:
      "https://feeds.abplive.com/onecms/images/uploaded-images/2021/12/08/42f66ea496eda15419abdcb1b93a2797_original.jpg?impolicy=abp_cdn&imwidth=650",
    altText: "Card 4",
    description: "Gulmarg trip starting @6999/-",
  },
  {
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgrandholidayparkvacation.com%2Fblog%2Fexplore-and-fall-in-love-with-the-beauty-of-ladakh-india-13&psig=AOvVaw0ooiggKTb_Fj_FXbaUCNlU&ust=1704967686784000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJC92d7J0oMDFQAAAAAdAAAAABAN",
    altText: "Card 5",
    description: "ladakh trip starting @6666/-",
  },
];

/* Cake Service*/
const sweetsData = [
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/04/02/64/13/360_F_402641396_FrqmI5MgDB7jyKKr5hYguhdgNp9vnESt.jpg",
    altText: "Card 1",
    description: "jalebi starting @20/-",
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/521803129/photo/gulab-jamun-11.jpg?s=612x612&w=0&k=20&c=wyJaXY7Uu0hMBCXkcTDRaujSKN6Rp9roJeKDvF6CfHI=",
    altText: "Card 2",
    description: "Gulabjamun starting @12/- per peice",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/04/14/19/67/360_F_414196779_ua86vCuLrSwOmRZVrCQfL4kayWLYlXLV.jpg",
    altText: "Card 3",
    description: "Rasmalai starting @40/-",
  },
  {
    imageUrl:
      "https://t3.ftcdn.net/jpg/02/28/08/80/360_F_228088062_PZRir5uGnh0enxCcgdKk4PfOtFDJIw6Y.jpg",
    altText: "Card 4",
    description: "Kaju katli starting @100/-",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/01/88/67/39/360_F_188673900_ca1P6BPJPbwPI97vAEg6Ik58pBFjMv1o.jpg",
    altText: "Card 5",
    description: "Rasgulla starting @10/-",
  },
];

/* Cake Service*/
const namkeenData = [
  {
    imageUrl:
      "https://4.imimg.com/data4/GT/WY/ANDROID-30649053/product-500x500.jpeg",
    altText: "Card 1",
    description: "Khatta Meetha Namkeen",
  },
  {
    imageUrl:
      "https://img2.exportersindia.com/product_images/bc-full/dir_37/1099994/papad-chavanu-namkeen-179162.jpg",
    altText: "Card 2",
    description: "Papad Mix Namkeen",
  },
  {
    imageUrl:
      "https://tiimg.tistatic.com/fp/1/007/925/pack-of-1-kilogram-yellow-salty-tasty-corn-flakes-namkeen-074.jpg",
    altText: "Card 3",
    description: "Corn Namkeen",
  },
  {
    imageUrl:
      "https://www.nehascookbook.com/wp-content/uploads/2022/09/Chakri-WS.jpg",
    altText: "Card 4",
    description: "Chakli",
  },
  {
    imageUrl:
      "https://static.langimg.com/photo/imgsize-189264,msid-97498785/navbharat-times.jpg",
    altText: "Card 5",
    description: "Aloo Bhujiya",
  },
];

function Home() {
  const [loading, setLoading] = useState(true);

  // Simulating a delay of 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run the effect only once on mount
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000, // Slide transition duration in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
  };
  return (
    <>
      <Header />

      {/* sl;ider */}
      <div >
        <Slider {...settings} className="rounded-xl mt-[5.5rem] mb-0 mr-5 ml-5">
          <div>
            <img src={repair} alt="rep" className=" w-auto object-cover" />
          </div>
          <div>
            <img
              src={restaurant}
              alt="res"
              className=" w-full object-cover"
            />
          </div>
          <div>
            <img src={tiffin} alt="tif" className=" w-auto object-cover" />
          </div>

          <div>
            <img src={saloon} alt="sal" className=" w-auto object-cover" />
          </div>
          <div>
            <img src={Travels} alt="tra" className=" w-auto object-cover" />
          </div>
        </Slider>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            overflowX: "hidden",
            overflow: "hidden",
            background: "white",
          }}
        >
          <div style={{ marginTop: "50px" }}>
            <h5 className="text-3xl text-center mt-5 mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
              Tiffin Service
            </h5>
            <MainSlider>
              {tiffinData.map((card, index) => (
                <div key={index} className="mx-2">
                  <Card className="w-80 p-2 ml-7 md:ml-60 my-4 flex flex-col flex-1 transition duration-300 ease-in-out hover:scale-110 items-center">
                    <img
                      width={200}
                      height={100}
                      src={card.imageUrl}
                      alt={card.altText}
                      className="max-w-full h-40" // Set a fixed height
                    />
                    <div className="mt-4 text-center">
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {card.description}
                      </p>
                      <Button className="bg-blue-500 h-10 text-white rounded-full hover:bg-blue-700 mt-3 mx-auto">
                        Book Now
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </MainSlider>
          </div>

          <div className="animated-line"></div>

          <h5 className="text-3xl text-center mt-5 mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
            Saloon Service
          </h5>
          <MainSlider>
            {saloonData.map((card, index) => (
              <div key={index} className="mx-2">
                <Card className="w-80 p-2 ml-7 my-4 md:ml-60 flex flex-col flex-1 transition duration-300 ease-in-out hover:scale-110 items-center">
                  <img
                    width={200}
                    height={200}
                    src={card.imageUrl}
                    alt={card.altText}
                    className="max-w-full h-40" // Set a fixed height
                  />
                  <div className="mt-4 text-center">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                    <Button className="bg-blue-500 h-10 text-white rounded-full hover:bg-blue-700 mt-3 mx-auto">
                      Book Now
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </MainSlider>
          <div className="animated-line"></div>

          <h5 className="text-3xl text-center mt-5   mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
            Restaurant Service
          </h5>
          <MainSlider>
            {restaurantData.map((card, index) => (
              <div key={index} className="mx-2">
                <Card className="w-80 p-2 ml-7 md:ml-60 my-4 flex flex-col flex-1 transition duration-300 ease-in-out hover:scale-110 items-center">
                  <img
                    width={200}
                    height={200}
                    src={card.imageUrl}
                    alt={card.altText}
                    className="max-w-full h-40" // Set a fixed height
                  />
                  <div className="mt-4 text-center">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                    <Button className="bg-blue-500 h-10 text-white rounded-full hover:bg-blue-700 mt-3 mx-auto">
                      Book Now
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </MainSlider>
          <div className="animated-line"></div>

          <h5 className="text-3xl text-center mt-5 mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
            Repair Service
          </h5>
          <MainSlider>
            {repairData.map((card, index) => (
              <div key={index} className="mx-2">
                <Card className="w-80 p-2 ml-7 md:ml-60 my-4 flex flex-col flex-1 transition duration-300 ease-in-out hover:scale-110 items-center">
                  <img
                    width={200}
                    height={200}
                    src={card.imageUrl}
                    alt={card.altText}
                    className="max-w-full h-40" // Set a fixed height
                  />
                  <div className="mt-4 text-center">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                    <Button className="bg-blue-500 h-10 text-white rounded-full hover:bg-blue-700 mt-3 mx-auto">
                      Book Now
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </MainSlider>
          <div className="animated-line"></div>

          <h5 className="text-3xl text-center mt-5 mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
            Cake
          </h5>
          <MainSlider>
            {cakeData.map((card, index) => (
              <div key={index} className="mx-2">
                <Card className="w-80 p-2 ml-7 md:ml-60 my-4 flex flex-col flex-1 transition duration-300 ease-in-out hover:scale-110 items-center">
                  <img
                    width={200}
                    height={200}
                    src={card.imageUrl}
                    alt={card.altText}
                    className="max-w-full h-40" // Set a fixed height
                  />
                  <div className="mt-4 text-center">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                    <Button className="bg-blue-500 h-10 text-white rounded-full hover:bg-blue-700 mt-3 mx-auto">
                      Book Now
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </MainSlider>
          <div className="animated-line"></div>

          <h5 className="text-3xl text-center mt-5 mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
            Travels
          </h5>
          <MainSlider>
            {travelData.map((card, index) => (
              <div key={index} className="mx-2">
                <Card className="w-80 p-2 ml-7 md:ml-60 my-4 flex flex-col flex-1 transition duration-300 ease-in-out hover:scale-110 items-center">
                  <img
                    width={200}
                    height={200}
                    src={card.imageUrl}
                    alt={card.altText}
                    className="max-w-full h-40" // Set a fixed height
                  />
                  <div className="mt-4 text-center">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                    <Button className="bg-blue-500 h-10 text-white rounded-full hover:bg-blue-700 mt-3 mx-auto">
                      Book Now
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </MainSlider>
          <div className="animated-line"></div>

          <h5 className="text-3xl text-center mt-5 mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
            Sweets
          </h5>
          <MainSlider>
            {sweetsData.map((card, index) => (
              <div key={index} className="mx-2">
                <Card className="w-80 p-2 ml-7 md:ml-60 my-4 flex flex-col flex-1 transition duration-300 ease-in-out hover:scale-110 items-center">
                  <img
                    width={200}
                    height={200}
                    src={card.imageUrl}
                    alt={card.altText}
                    className="max-w-full h-40" // Set a fixed height
                  />
                  <div className="mt-4 text-center">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                    <Button className="bg-blue-500 h-10 text-white rounded-full hover:bg-blue-700 mt-3 mx-auto">
                      Book Now
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </MainSlider>
          <div className="animated-line"></div>

          <h5 className="text-3xl text-center mt-5 mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
            Namkeens
          </h5>
          <MainSlider>
            {namkeenData.map((card, index) => (
              <div key={index} className="mx-2">
                <Card className="w-80 p-2 ml-7 md:ml-60 my-4 flex flex-col flex-1 transition duration-300 ease-in-out hover:scale-110 items-center">
                  <img
                    width={200}
                    height={200}
                    src={card.imageUrl}
                    alt={card.altText}
                    className="max-w-full h-40" // Set a fixed height
                  />
                  <div className="mt-4 text-center">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                    <Button className="bg-blue-500 h-10 text-white rounded-full hover:bg-blue-700 mt-3 mx-auto">
                      Book Now
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </MainSlider>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Home;
