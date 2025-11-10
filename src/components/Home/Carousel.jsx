import React from "react";
// import pet1 from "../assets/pet1.jpg"; // Replace with your actual image paths
// import pet2 from "../assets/pet2.jpg";
// import pet3 from "../assets/pet3.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-full rounded-3xl overflow-hidden shadow-lg">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src=""
          className="w-full object-cover h-[400px] md:h-[500px]"
          alt="Find your furry friend"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Find Your Furry Friend Today!
          </h2>
          <p className="text-lg md:text-xl">
            Discover adorable pets waiting to join your family.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src=""
          className="w-full object-cover h-[400px] md:h-[500px]"
          alt="Adopt don't shop"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Adopt, Don’t Shop — Give a Pet a Home.
          </h2>
          <p className="text-lg md:text-xl">
            Every adoption makes a world of difference.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src=""
          className="w-full object-cover h-[400px] md:h-[500px]"
          alt="Every pet deserves love"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Because Every Pet Deserves Love and Care.
          </h2>
          <p className="text-lg md:text-xl">
            Join us in making their lives happier and healthier.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide2" className="btn btn-circle">
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

export default Carousel;
