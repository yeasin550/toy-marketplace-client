import AllToyCard from "./AllToyCard";
import { useLoaderData } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";
const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const toyCars = useLoaderData();
  // console.log(toyCars);
  //  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
  };
  useTitle("AllToys");

  const handleFilter = (toy) => {
    if (searchText) {
      if (toy?.name?.toLowerCase()?.includes(searchText?.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    } else return true;
  };

  return (
    <div>
      <div className=" text-center my-4">
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border-2 border-gray-600"
          />{" "}
          <button
            className="bg-red-700 text-white py-2 px-3"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Toys Photos</th>
                <th>ToysnName</th>
                <th>Sub-category</th>
                <th>Seller-Name</th>
                <th>Price:</th>
                <th>Quantity</th>
                <th className="flex justify-center items-center gap-2">
                  Details
                  <FaInfoCircle className="text-2xl mr-10"></FaInfoCircle>
                </th>
              </tr>
            </thead>
            <tbody>
              {toyCars.filter(handleFilter).map((toy, i) => (
                <AllToyCard key={toy._id} index={i} toy={toy}></AllToyCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
