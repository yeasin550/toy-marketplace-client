import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div className="mt-4 mx-12">
      <div className="py-4 border-b">
        <h2 className="text-xl font-semibold text-green-600 text-center                  ">
          Questions
        </h2>
      </div>
      {/* all questions will be here  */}
      <div className="py-4">
        <div>
          <p className="py-4 text-base text-gray-700">
            <b>
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </b>{" "}
            <br />
            —/-=== Access Token: An access token is a credential that is issued
            by an authentication server to a client application after a user
            successfully authenticates. It is a string of characters that
            represents the authorization granted to the client application to
            access protected resources on behalf of the authenticated user.
            Access tokens typically have a limited lifespan and expire after a
            certain period of time.
          </p>
        </div>
        <div>
          <p className="py-4 text-base text-gray-700">
            <b>Compare SQL and NoSQL databases?</b> <br />
            === NoSQL databases excel at horizontal scalability, allowing them
            to handle large volumes of data by distributing it across multiple
            servers in a cluster. They can easily scale out to accommodate
            increased data and traffic. SQL databases enforce data integrity
            rules, such as primary key constraints and referential integrity,
            which ensure the consistency and reliability of the data.
          </p>
        </div>
        <div>
          <p className="py-4 text-base text-gray-700">
            <b>What is express js? What is Nest JS?</b> <br /> ==== Express is a
            node js web application framework that provides broad features for
            building web and mobile applications. It is used to build a single
            page, multipage, and hybrid web application. NestJS embraces the
            concept of dependency injection, making it easy to manage and inject
            dependencies throughout your application. It helps you write
            modular, testable, and extensible code by decoupling components and
            promoting loose coupling.
          </p>
        </div>
        <div>
          <p className="py-4 text-base text-gray-700">
            <b>What is MongoDB aggregate and how does it work?</b> <br /> 
            In MongoDB, the aggregate function is a powerful tool used for
            performing advanced data processing and analysis on collections of
            documents. It allows you to perform complex operations,
            transformations, and aggregations on the data stored in a MongoDB
            collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
