import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const NavBar = () => {
     const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
    };
    
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="w-40 h-24" src={logo} alt="" />
            </div>
            <div className="hidden md:block lg:ml-24">
              <div className="ml-10 flex items-baseline space-x-4 ">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600" : "default"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/allToys"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600" : "default"
                      }
                    >
                      All Toys
                    </NavLink>
                  </li>
                  {user ? (
                    <li>
                      <NavLink
                        to="/myToys"
                        className={({ isActive }) =>
                          isActive ? "text-blue-600" : "default"
                        }
                      >
                        My Toys
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}
                  {user ? (
                    <li>
                      <NavLink
                        to="/addToys"
                        className={({ isActive }) =>
                          isActive ? "text-blue-600" : "default"
                        }
                      >
                        Add A Toy
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600" : "default"
                      }
                    >
                      Blogs
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
                      {/* logout and profile */}
            <div className="flex items-center mb-3">
              <div className="avatar placeholder mt-3 mr-2">
                {user && (
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <img
                      className="cursor-pointer"
                      title={user.displayName}
                      src={user?.photoURL}
                    />
                  </div>
                )}
              </div>
              <div className="lg:ml-48">
                {user ? (
                  <Link to="/login">
                    <button
                      onClick={handleLogOut}
                      className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-orange-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500"
                    >
                      LogOut
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <ul className="menu px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToys"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                All Toys
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink
                  to="/myToys"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  My Toys
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li>
                <NavLink
                  to="/addToys"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Add A Toy
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
          {/* {user ? (
            <Link to="/login">
              <button
                onClick={handleLogOut}
                className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-orange-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500"
              >
                LogOut
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                Login
              </button>
            </Link>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
