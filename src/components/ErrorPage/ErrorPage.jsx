
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="">
            <img
              src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-21190.jpg?w=740&t=st=1684501146~exp=1684501746~hmac=0e844cf4cccb6b891fb38f30f34a20179ef47c063e509be9b160fb60ab6fcfd7"
              alt=""
              className=" w-96"
            />
          </div>

          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600 hidden">
              <span className="sr-only">Error</span> {status || 404}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link to="/" className="bg-green-500 text-white font-bold px-3 py-2 rounded-lg">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
