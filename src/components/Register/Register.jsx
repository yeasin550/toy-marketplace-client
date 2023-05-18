import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { createUser, googleSingIn, updateProfileLogin } =
    useContext(AuthContext);
//  console.log(updateProfileLogin)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
      // console.log(name, photo, email, password);
      
      
      setError("")
      createUser(email, password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess("Registration successful");
            form.reset("");
            handleProfile(name, photo)
          })
          .catch((error) => {
            console.log(error);
          });
    }
    const handleProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateProfileLogin(profile)
      .then(() => {
      })
      .catch(error => {
        setError(error.message);
      })
  }
  
  const handleGoogleSignIn = () => {
    googleSingIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error => {
      console.log(error)
    })
  }

    return (
      <div
        // className="hero min-h-screen text-white"
        // style={{
        //   backgroundImage: `url("https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg?w=826&t=st=1684379082~exp=1684379682~hmac=c9da4306fd8493d1f2c03b28197f79814ee19cfea11f2d75e8ab3c7c61cdd522")`,
        // }}
      >
        <form
          onSubmit={handleRegister}
          className="max-w-md mx-auto border-2 p-8 shadow-md mt-6 rounded-md"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Create a new account?
          </h2>
          <div className="mb-4 ">
            <input
              className="border-2 border-gray-400 py-2 px-4 rounded-lg w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="photo">
              Photo URL
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md"
              id="photo"
              name="photo"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md"
              id="password"
              name="password"
              type="password"
              required
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600   rounded w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4">
            Register
          </button>
          <div className="flex items-center justify-center">
            <hr className="border-gray-400 flex-grow" />
            <span className="px-4 text-gray-500 font-semibold">Or</span>
            <hr className="border-gray-400 flex-grow" />
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md"
          >
            Sign in with Google
          </button>
          {/* <div className="flex mt-3 gap-2">
            <button
              onClick={handleGoogleSignIn}
              className="relative flex items-center justify-center w-full gap-2 py-2 px-4  bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500"
            >
              <FaGoogle></FaGoogle>
            </button>
          </div> */}
          <p className="mt-3">
            Already Have An Account ?
            <Link className="text-primary" to="/login">
              Login
            </Link>
          </p>
          <p className="text-red-700">{error}</p>
          <p className="text-green-700">{success}</p>
        </form>
      </div>
    );
};

export default Register;