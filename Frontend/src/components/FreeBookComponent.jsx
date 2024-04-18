import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
// import Cards from "./Cards";

const FreeBookComponent = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await axios.get("http://localhost:4001/book");
      setBooks(response.data);
    } catch (e) {
      console.log("Error from API", e);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const freeBooks = books.filter((book) => book.category === "Free");
  console.log(freeBooks);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" md:px-20 px-2">
        <h1 className=" font-bold">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolar sit armet, consecuter adispiricing eit. Accusantism
          veriatis featyre newx js aooder allong with lot of ofrers for free.
        </p>

        <div className="slider-container ">
          <Slider {...settings}>
            {freeBooks.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBookComponent;
