import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

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

useTitle("Register");
  
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
      <div>
        <form
          onSubmit={handleRegister}
          className="max-w-md mx-auto border-2 p-8 shadow-md mt-6 rounded-md"
        >
          <h2 className="text-4xl font-bold mb-4 text-center my-7  animate-bounce animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-pink-700 to-green-700">
            Welcome?
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
              placeholder="Enter your Photo"
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
              placeholder=" Your Email"
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
              placeholder="Input your password"
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
            className="w-full bg-white hover:bg-gray-200 hover:border2 hover:border-pink-400 text-gray-800 font-semibold py-2 px-4 border-2 border-gray-700  rounded-md"
          >
            Sign in with Google
          </button>

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