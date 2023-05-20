import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ShopByCategory = () => {
  return (
    <div className="my-12 mx-48 text-4xl font-bold mr-5">
      <Tabs>
        <TabList>
          <Tab>Sports </Tab>
          <Tab>Mini fire truck</Tab>
          <Tab>Mini police car</Tab>
        </TabList>

        <TabPanel className="mt-16">
          <div className=" grid grid-cols-1 lg:grid-cols-2">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks_176474-9256.jpg?w=740&t=st=1684504791~exp=1684505391~hmac=fe8df1c0f3f480c506293e09136896998a8b08c8416307070bc163935f37148e"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks_176474-9256.jpg?w=740&t=st=1684504791~exp=1684505391~hmac=fe8df1c0f3f480c506293e09136896998a8b08c8416307070bc163935f37148e"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=740&t=st=1684504970~exp=1684505570~hmac=1363f92d5d52be19393b8468dae575665001772d993ac272258e5599679ea9da"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=740&t=st=1684504970~exp=1684505570~hmac=1363f92d5d52be19393b8468dae575665001772d993ac272258e5599679ea9da"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=740&t=st=1684504970~exp=1684505570~hmac=1363f92d5d52be19393b8468dae575665001772d993ac272258e5599679ea9da"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=740&t=st=1684504970~exp=1684505570~hmac=1363f92d5d52be19393b8468dae575665001772d993ac272258e5599679ea9da"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

      
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
