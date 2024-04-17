const Banner = () => {
  return (
    <>
      <div className="md:px-20 px-2 flex flex-col md:flex-row top-container md:items-center my-10 ">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-32">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mt-">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-600">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Reading books is completely overlooked by most people across the
              world. Most adults don’t read because they are unaware of the
              essence of reading. Countless people stop reading books by the
              time they complete high school, never to open a book again.
              Unfortunately, school books are not that informative because
              formal education is very deficient. Real knowledge is found in
              bookshops.
            </p>

            <label className="input input-bordered  bg-white border-yellow-300 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-secondary bg-pink-600 text-white">
              Send
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img
            src="/banner.jpg"
            alt="image"
            className="w-90 h-90 dark:bg-slate-900 dark:text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
