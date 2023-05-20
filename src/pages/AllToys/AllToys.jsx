import AllToyCard from "./AllToyCard";
import { useLoaderData } from "react-router-dom";
import { FaInfoCircle, } from "react-icons/fa";
// import CreatableSelect from "react-select/creatable";
// import Select from "react-select";
// import { useState } from "react";
const AllToys = () => {
  //  const [selectedOption, setSelectedOption] = useState(null);
  const toyCars = useLoaderData();
  // console.log(toyCars);

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
//  const [searchQuery, setSearchQuery] = useState("");

//  const handleSearch = () => {
//    // Perform search action with searchQuery
//    console.log("Search:", searchQuery);
//  };
    return (
      <div>
        <div className=" text-center my-4">
          {/* <div className="flex items-center justify-center">
            <input
              type="text"
              className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="px-4 py-2 rounded-r-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div> */}

          {/* <CreatableSelect
            className="w-75"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            // isMulti
          /> */}
          {/* <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          /> */}
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Toys-Photos</th>
                  <th>Toys-Name</th>
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
                {toyCars.map((toy) => (
                  <AllToyCard key={toy._id} toy={toy}></AllToyCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllToys;

