import Footer from "../Footer";
import Navbar from "../Navbar";
import booksList from "../../../public/booksList";
import Cards from "../Cards";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <Navbar />

      <div className=" md:px-20 px-2">
        <div className="mt-27 items-center justify-center text-center pt-40">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-12">
            Hello world i am ready to come and play some meaninful game with
            you. Are ready to play and enjoy with us and are world is so
            beautiful and life is also so beautiful. So why are waiting and
            enjoy your self.{" "}
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {booksList.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
