import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyCardDetails = () => {
  const { id } = useParams()
  console.log(id)
  const [view, setView] = useState([]);
  console.log(view)
  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setView(data);
      });
  }, [])

  return (
    <div>
      <div className="h-full w-96 bg-base-100 border-2 hover:border-gray-300 hover:shadow-md">
        <figure>
          <img src="" alt="Shoes" />
        </figure>
        <div className="flex p-4">
          <div className="space-y-3 flex-1">
            <h2 className="card-title">h</h2>
            <p>Toy Name : </p>
            <p>Sub-category :g</p>
            <p>Price : d</p>
            <p>Available Quantity : d</p>
            <p>Ratings : o Star</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ToyCardDetails;