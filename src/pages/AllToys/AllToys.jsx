import AllToyCard from "./AllToyCard";
import { useLoaderData } from "react-router-dom";
import { FaInfoCircle, } from "react-icons/fa";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";
const AllToys = () => {
 
  const toyCars = useLoaderData();
  // console.log(toyCars);
 const [searchQuery, setSearchQuery] = useState("");

 const handleSearch = (event) => {
  event.preventDefault()
   const toyName = event.target.search.value;
   setSearchQuery(toyName)
   console.log("Search:", searchQuery);
 };
 useTitle("AllToys");

  
    return (
      <div>
        <div className=" text-center my-4">
          <form onSubmit={handleSearch} className="form-control mx-auto">
            <div className="input-group">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="input input-bordered"
                id=""
              />
              <input type="button" value="Search" className="btn" />
            </div>
          </form>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Toys Photos</th>
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

