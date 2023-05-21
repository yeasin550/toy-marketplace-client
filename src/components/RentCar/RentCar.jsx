
const RentCar = () => {
    return (
      <div className="lg:flex justify-around items-center mt-12 p-7 gap-5 border-2">
        <div className="lg:w-1/2 space-y-5" data-aos="zoom-in-up">
          <h1 className=" font-bold text-5xl ">
            <span className="text-blue-600">
              {" "}
              Benefits of Toy Cars in Toddlers for{" "}
            </span>{" "}
            <br />
            <span className="text-yellow-500 mt-2">Child Development</span>
          </h1>
          <p className="text-xl">
            Playing with vehicles affords a wonderful opportunity for
            interactive play and the development of social skills such as
            communication and turn taking. This allows children to build
            confidence and establish relationships with other children and
            siblings, as well as enhancing language skills and building
            vocabulary
          </p>
          <input
            className="border-2 pl-2 py-3 mr-3"
            type="email"
            name=""
            id=""
            placeholder="Enter Email"
          />
          <button className="  mr-4 gap-2 px-7 py-3  bg-gradient-to-r from-orange-500 to-indigo-500 text-white shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
            Submit
          </button>
        </div>

        <div
          className="sm:mt-5 lg:w-1/2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="carousel w-full rounded-md">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?w=740&t=st=1684393489~exp=1684394089~hmac=52e9944a753b76fec3c2d1928b45d2e32bdc42dddb85de0dcd5f61769c9294d8"
                className="w-full"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.freepik.com/free-photo/closeup-toy-car-with-christmas-ornaments-it-artificial-snow-against-white-background_181624-25114.jpg?w=740&t=st=1684393590~exp=1684394190~hmac=d5540096f8d6137dbe09fda126e1462adc77376d334972e768a035e432875ad8"
                className="w-full"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view_176474-7732.jpg?w=740&t=st=1684393543~exp=1684394143~hmac=31e50ecd493a052017d86b852035df38de8caf7606189f657fb24555176acae1"
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.freepik.com/free-photo/green-easter-car-with-brown-egg-copy-space_23-2149301303.jpg?w=826&t=st=1684393647~exp=1684394247~hmac=4e3d00df9716caf0c6ee9bca1333b66c16ea751afb864442e3f9881d3235984b"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
    );
};

export default RentCar;