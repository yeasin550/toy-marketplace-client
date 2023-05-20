/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const AllToyCard = ({ toy }) => {

  const {
      _id,
      availableQuantity,
      name,
      pictureUrl,
      price,
      sellerName,
      subCategory
    } = toy;
    console.log(toy)
  
    return (
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask w-24 h-24">
                <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>{sellerName}</td>
        <td>${price}</td>
        <td>{availableQuantity}</td>

        <th className="flex items-center gap-3">
          <Link to={`/toyCarDetails/${_id}`}>
            <button className=" rounded-md my-3 relative px-5 py-2.5  bg-gradient-to-r from-orange-500 to-indigo-500 text-white  shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
              Vew Details
            </button>
          </Link>
        </th>
      </tr>
    );
};

export default AllToyCard;
 



  