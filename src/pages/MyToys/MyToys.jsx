import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToysCard from "./MyToysCard";
import useTitle from "../../hooks/useTitle";

// ?sort=desc = boro theke choto / choto

const MyToys = () => {
  const [isDescending, setIsDescending] = useState(false); // setIsDescending(true) - boro theke choto

  useTitle("MyToys");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  // console.log(toys)
  useEffect(() => {
    const url = `https://toy-marketplace-server-mu.vercel.app/toys/${
      user?.email
    }${isDescending ? "?sort=desc" : ""}`;

    // console.log("url is ", url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, [isDescending]);

  const handleClick = () => {
    setIsDescending(!isDescending);
    console.log(isDescending);
 }

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full">
          <button className="bg-green-500 py-2 px-4 my-5 text-white font-bold" onClick={handleClick}>Ascending</button>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Toys-Photos & Name</th>
                <th>Sub-category</th>
                <th>Seller-Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {toys.map((toy) => (
                <MyToysCard
                  key={toy._id}
                  toy={toy}
                  setToys={setToys}
                ></MyToysCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
