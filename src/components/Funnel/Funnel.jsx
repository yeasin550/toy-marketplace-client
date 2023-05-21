
const Funnel = () => {
    return (
      <div className="lg:flex justify-around items-center my-12 p-5 lg:hover:shadow-md lg:hover:shadow-green-500 lg:hover:border-2 lg:hover:border-orange-500">
        <div className="lg:w-1/2 sm:w-full" data-aos="zoom-in-right">
          <img
            src="https://i.ibb.co/HVCB5sQ/Screenshot-2023-05-18-122024-removebg-preview.png"
            alt=""
          />
        </div>
        <div
          className="lg:w-1/2 sm:w-full space-y-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <h1 className="lg:text-left sm:text-center font-bold text-5xl">
            Development and sale of children cars toys
          </h1>
          <p className="text-xl">
            Playing with vehicles affords a wonderful opportunity for
            interactive play and the development of social skills such as
            communication and turn taking. This allows children to build
            confidence and establish relationships with other children and
            siblings, as well as enhancing language skills and building
            vocabulary
          </p>
          <button className=" mr-4 gap-2 px-7 py-3 rounded-md  bg-gradient-to-r from-red-500 to-indigo-500 text-white shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-500 hover:to-red-500">
            Get Started
          </button>
        </div>
      </div>
    );
};

export default Funnel;