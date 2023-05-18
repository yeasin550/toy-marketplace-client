
const Gallery = () => {
    return (
      <div>
        <h1 className="text-center text-4xl my-9 font-bold">Our Gallery</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?w=740&t=st=1684387003~exp=1684387603~hmac=1f35e1b5c0cc61b3ac333824e50c19a812d01caca680404eb52cf06eefa69167"
                alt="Shoes"
              />
            </figure>
          </div>
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
                src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=740&t=st=1684387711~exp=1684388311~hmac=fba5c2ba8f7c9667ff3b7427690d40e5b9fe6644226756f69a5c05a9ea1a0a3c"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/red-car-with-christmas-ball-top_1252-296.jpg?w=740&t=st=1684387740~exp=1684388340~hmac=2ff8723b995890cbb717fc779d564f931adceadd248b04dfb0379d4371162fc3"
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
        </div>
      </div>
    );
};

export default Gallery;