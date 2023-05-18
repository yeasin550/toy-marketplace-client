
const Blogs = () => {
  return (
    <div className="mt-4 mx-12">
      <div className="py-4 border-b">
        <h2 className="text-xl font-semibold">Questions</h2>
      </div>
      {/* all questions will be here  */}
      <div className="py-4">
        <div>
          <h4 className="text-lg font-medium">Question 01</h4>
          <p className="py-4 text-base text-gray-700">
            <b>
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </b>{" "}
            —/-== Context API is a useful feature in React that allows you to
            share data between components without having to pass props down
            through the entire component tree. when some data needs to be
            accessible by many components at different nesting levels.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Question 02</h4>
          <p className="py-4 text-base text-gray-700">
            <b>Compare SQL and NoSQL databases?</b> === A custom hook in React
            is a JavaScript function that allows you to encapsulate reusable
            logic and stateful behavior in your application, which can then be
            shared across multiple components.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Question 03</h4>
          <p className="py-4 text-base text-gray-700">
            <b>What is express js? What is Nest JS (google it)?</b> ==== It can
            be used to store a mutable value that does not cause a re-render
            when updated. without triggering a re-render when the value changes.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Question 04</h4>
          <p className="py-4 text-base text-gray-700">
            <b>What is MongoDB aggregate and how does it work (google it)?</b>{" "}
            ==== useMemo() is a function that returns a memoized value of a
            passed in resource-intensive function . The useMemo Hook can be used
            to keep expensive, resource intensive functions from needlessly
            running.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
