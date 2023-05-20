import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    console.log(toys)
    useEffect(() => {
      fetch(`http://localhost:5000/toys/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setToys(data);
        });
    }, [user]);
    return (
      <div>

        <div>
          <div className="overflow-x-auto w-full">
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
                  <MyToysCard key={toy._id} toy={toy}></MyToysCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyToys;