
const Gallery = () => {
    return (
      <div>
        <div className="flex justify-center items-center">
          <h1 className="text-center my-7 text-4xl font-bold animate-bounce animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-pink-700 to-green-700">
            Our GallerY
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?w=740&t=st=1684387003~exp=1684387603~hmac=1f35e1b5c0cc61b3ac333824e50c19a812d01caca680404eb52cf06eefa69167"
                alt="Shoes"
              />
            </figure>
          </div>

          <div className="grid grid-cols-2">
            <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/red-pickup-model-black-floor_1150-16352.jpg?w=740&t=st=1684387505~exp=1684388105~hmac=36f1b2627e94fbc08b6ca8dafeb4d2bc0c44fc81f5f0d5b06c19d8eca9157326"
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/supply-chain-representation-with-yellow-truck_23-2149853111.jpg?w=740&t=st=1684387793~exp=1684388393~hmac=ebe96dd79633355dec76befd84efc4429aa892053cfd12425aaf12effbee0330"
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/3d-cartoon-background-children_23-2150150802.jpg?w=740&t=st=1684388028~exp=1684388628~hmac=feb42b6c143f847a8d00a38d0cc3f8543b0bb925959b6fbec1d00e8eb5a294a7"
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=740&t=st=1684387711~exp=1684388311~hmac=fba5c2ba8f7c9667ff3b7427690d40e5b9fe6644226756f69a5c05a9ea1a0a3c"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>

          {/* 2nd row */}

          <div>
            <div className="lg:flex">
              <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks_176474-9256.jpg?w=740&t=st=1684665114~exp=1684665714~hmac=76febb06274dd27e936f9a0a881a06c76de1b6cb6a5d675fc65c67e434abbb69"
                    alt="Shoes"
                  />
                </figure>
              </div>
              <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/toy-truck-with-christmas-trees_1252-293.jpg?w=740&t=st=1684665304~exp=1684665904~hmac=f8b2ffa7e8744a7790354119d681e090d7d8fdcd267c070baacd7c498e9994e2"
                    alt="Shoes"
                  />
                </figure>
              </div>
            </div>

            <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
              <figure>
                <img
                  className="h-80  w-full"
                  src="https://img.freepik.com/free-photo/toy-car-with-pinecone-top_1252-7.jpg?w=740&t=st=1684665349~exp=1684665949~hmac=6f1b4278ca43f789d58641b6c641a8775b6899fdba1eeae598716b55e9ad5df2"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>

          <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
            <figure>
              <img
                className="lg:h-[530px] w-full"
                src="https://img.freepik.com/free-photo/vintage-miniature-car-fake-landscape_155003-1097.jpg?w=740&t=st=1684665465~exp=1684666065~hmac=880c3948ed481c5a8705d68be2da19dc1258ea81c501ef17a148e45c24288ece"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    );
};

export default Gallery;