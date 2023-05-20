
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
const AddToys = () => {

useTitle('AddToys')
  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const toys = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description,
    };
    // console.log(
    //   pictureUrl,
    //   name,
    //   sellerName,
    //   sellerEmail,
    //   subCategory,
    //   price,
    //   rating,
    //   availableQuantity,
    //   description
    // );
    fetch(`http://localhost:5000/toys`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toys)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toys booking success",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
    })

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen shadow-md">
      <div className="bg-white p-10 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-6">Add a Toy</h1>
        <form onSubmit={handleAddToys}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="pictureUrl"
            >
              Picture URL
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="pictureUrl"
              name="pictureUrl"
              type="url"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Toy Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="name"
              name="name"
              type="text"
              placeholder="Toy Name" 
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="sellerName"
            >
              Seller Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="sellerName"
              name="sellerName"
              type="text"
              placeholder="Your Name (optional)"
              
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="sellerEmail"
            >
              Seller Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="sellerEmail"
              name="sellerEmail"
              type="email"
              placeholder="Your Email (optional)"
             
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="subCategory"
            >
              Sub-category
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="subCategory"
              name="subCategory"
          
             
              required
            >
              <option value="">Select a sub-category</option>
              <option value="Math Toys">Sports</option>
              <option value="Language Toys">Mini fire truck</option>
              <option value="Science Toys">Mini police car</option>
            </select>
          </div>

          <div className="flex gap-2 ">
            <div className="mb-4 w-1/3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                id="price"
                name="price"
                type="number"
                placeholder="Toy Price"
                min="0"
              
              
                required
              />
            </div>
            <div className="mb-4 w-1/3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                id="rating"
                name="rating"
                type="number"
                placeholder="Toy Rating"
                min="0"
                max="5"
                step="0.1"
               
               
                required
              />
            </div>
            <div className="mb-4 w-1/3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="availableQuantity"
              >
                Available Quantity
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                id="availableQuantity"
                name="availableQuantity"
                type="number"
                placeholder="Toy Quantity"
                min="0"
             
               
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="description"
              name="description"
              placeholder="Toy Description"
              rows="5"
        
           
              required
            ></input>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddToys;
// This form should work fine for adding a toy to a website. However, please note that there are some additional things that you may want to consider when implementing such a feature on a real website, such as validating user input, sanitizing user input to prevent security issues, handling file uploads for the picture URL field, and handling server-side errors.
