import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyCardDetails = () => {
  useTitle('ToyDetails')
  const { id } = useParams()
  // console.log(id)
  const [view, setView] = useState([]);
  const {
    pictureUrl,
    name,
    sellerEmail,
    sellerName,
    rating,
    price,
    availableQuantity,
    description,
  } = view;
  console.log(view)
  useEffect(() => {
    fetch(`http://localhost:5000/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setView(data);
      });
  }, []);

  return (
    <div>
      <div className="lg:flex lg:card-side bg-base-100 hover:border-2 hover:border-red-300 p-2 hover:shadow-xl mt-9">
        <figure className="lg:w-1/2 rounded-xl">
          <img src={pictureUrl} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="text-xl font-semibold mb-2">
            Seller Name : {sellerName}
          </h2>
          <p className="text-gray-600 mb-4">Seller Email : {sellerEmail}</p>
          <p className="text-gray-600 mb-4">Toy Name : {name}</p>
          <p className="text-gray-600 mb-4">Ratings : {rating}</p>
          <p className="text-gray-600 mb-4">Price : {price}</p>
          <p className="text-gray-600 mb-4">Quanttiy : {availableQuantity}</p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Description</span> : {description}
          </p>
        </div>
      </div>
    </div>
  ); 
};

export default ToyCardDetails;