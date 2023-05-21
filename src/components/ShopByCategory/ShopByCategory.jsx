import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ShopByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("sports");
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://toy-marketplace-server-mu.vercel.app/toys/category/${selectedCategory}`
    )
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((err) =>
        console.error("Error fetcing toys based on sub category", err)
      )
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <div className="lg:my-12 lg:mx-48 text-4xl font-bold mt-12 mr-5">
      <Tabs>
        <TabList>
          <Tab onClick={() => setSelectedCategory("sports")}>Sports </Tab>
          <Tab onClick={() => setSelectedCategory("mini_fire_truck")}>
            Mini fire truck
          </Tab>
          <Tab onClick={() => setSelectedCategory("mini_police_car")}>
            Mini police car
          </Tab>
        </TabList>

        <TabPanel className="mt-16">
          {loading ? (
            <span>Loading....</span>
          ) : (
            <div
              className=" grid grid-cols-1 lg:grid-cols-2"
              data-aos="fade-right"
            >
              {toys?.map((toy) => (
                <div
                  className="card card-compact w-96 bg-base-100 hover:shadow-md border-2"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureUrl} alt={toy.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name:{toy.name}</h2>
                    <p>Price : {toy.price}</p>
                    <p>Rating : {toy.rating}</p>
                    <Link to={`/categoryDetails/${toy._id}`}>
                      <button className="btn btn-primary w-full  mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>

        <TabPanel className="mt-16">
          {loading ? (
            <span>Loading....</span>
          ) : (
            <div
              className=" grid grid-cols-1 lg:grid-cols-2"
              data-aos="fade-up-left"
            >
              {toys?.map((toy) => (
                <div
                  className="card card-compact w-96 bg-base-100 hover:shadow-md border-2"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureUrl} alt={toy.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name:{toy.name}</h2>
                    <p>Price : {toy.price}</p>
                    <p>Rating : {toy.rating}</p>
                    <Link to={`/categoryDetails/${toy._id}`}>
                      <button className="btn btn-primary w-full  mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-red-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-700 hover:to-red-700">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>

        <TabPanel className="mt-16">
          {loading ? (
            <span>Loading....</span>
          ) : (
            <div
              className=" grid grid-cols-1 lg:grid-cols-2"
              data-aos="flip-up"
            >
              {toys?.map((toy) => (
                <div
                  className="card card-compact w-96 bg-base-100 hover:shadow-xl border-2"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureUrl} alt={toy.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name:{toy.name}</h2>
                    <p>Price : {toy.price}</p>
                    <p>Rating : {toy.rating}</p>

                    <Link to={`/categoryDetails/${toy._id}`}>
                      <button className="btn btn-primary w-full  mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-yellow-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
