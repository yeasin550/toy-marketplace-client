import{ useState } from 'react';

const AddToys = () => {
  const [pictureUrl, setPictureUrl] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [availableQuantity, setAvailableQuantity] = useState('');
  const [description, setDescription] = useState('');

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
    console.log(pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, availableQuantity);

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-6">Add a Toy</h1>
        <form onSubmit={handleAddToys}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="pictureUrl">
              Picture URL
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="pictureUrl"
              name="pictureUrl"
              type="url"
            //   placeholder="https://example.com/toy-picture.jpg"
              value={pictureUrl}
              onChange={(e) => setPictureUrl(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="name"
              name="name"
              type="text"
              placeholder="Toy Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="sellerName">
              Seller Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="sellerName"
              name="sellerName"
              type="text"
              placeholder="Your Name (optional)"
              value={sellerName}
              onChange={(e) => setSellerName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="sellerEmail">
              Seller Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="sellerEmail"
              name="sellerEmail"
              type="email"
              placeholder="Your Email (optional)"
              value={sellerEmail}
              onChange={(e) => setSellerEmail(e.target.value)}
            />
          </div>
         
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="subCategory">
              Sub-category
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="subCategory"
              name="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            >
              <option value="">Select a sub-category</option>
              <option value="Math Toys">Math Toys</option>
              <option value="Language Toys">Language Toys</option>
              <option value="Science Toys">Science Toys</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="price"
              name="price"
              type="number"
              placeholder="Toy Price"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
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
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="availableQuantity">
              Available Quantity
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="availableQuantity"
              name="availableQuantity"
              type="number"
              placeholder="Toy Quantity"
              min="0"
              value={availableQuantity}
              onChange={(e) => setAvailableQuantity(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="description"
              name="description"
              placeholder="Toy Description"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
