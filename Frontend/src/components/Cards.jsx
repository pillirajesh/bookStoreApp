const Cards = (item) => {
  return (
    <>
      <div className="card cursor-pointer bg-white shadow-xl p-3 my-3 md:mr-3 hover:scale-90 duration-500 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.item.image}
            alt="Shoes"
            style={{ height: "280px", width: "200px", borderRadius: "10px" }}
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {item.item.name}
            <div className="badge badge-secondary">{item.item.category}</div>
          </h2>
          <p>Lorem Ipsum</p>
          <div className="card-actions  justify-between">
            <div className="bg-white p-3 dark:bg-slate-900">
              {item.item.price}/-
            </div>
            <div className="badge badge-outline hover:text-pink-500 cursor-pointer p-5">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
