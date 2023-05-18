
const Banner = () => {
    return (
      <div className="carousel h-screen rounded-md">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/little-toy-truck-carrying-christmas-tree_23-2147576826.jpg?w=740&t=st=1684386073~exp=1684386673~hmac=b9284ba1a10779d744fab476336939dda467b6f1aa72709cf692e5a0d8411070"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318357.jpg?w=740&t=st=1684386137~exp=1684386737~hmac=98885646e77b6e7c3ff597ad3c3c5fa2c035a0da6f5860a2f907f52c6c4833d0"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870780.jpg?w=740&t=st=1684386223~exp=1684386823~hmac=405c19320b4f7ce0c88cbdd1e57135eeed980e21d42061fc1ddef484630b9d5b"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870772.jpg?w=740&t=st=1684386273~exp=1684386873~hmac=4f69533fb2df79e487a4ccdda6b4e71d456c30cc3e49893dae5e73175d0fbb31"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Banner;