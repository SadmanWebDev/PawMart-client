import React from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/SXNBhLy1/a-compassionate-animal-shelter-volunteer-j-G5f-N68i-Q9yp-Xt6-Xz-OJkww-h-CVS-Va-YT4e-JUIw4-Fzn-W7w.jpg",
      title: "Find Your Furry Friend Today!",
      text: "Discover adorable pets waiting to join your family.",
    },
    {
      id: 2,
      img: "https://i.ibb.co/JFHdkdKZ/a-warm-candid-photograph-of-a-joyful-fam-c-Bxv-Icsv-Qgu-Br13a5qel-QA-p-SN03-Ee-XROKizkk-Dq437j-A.jpg",
      title: "Adopt, Don’t Shop — Give a Pet a Home.",
      text: "Every adoption makes a world of difference.",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/ZRqytrQj/a-bright-professional-campaign-style-pho-KPd-TM1-Tv-T-WIJdw-BJAz5sg-IX6-Gh-UYRRQOHvj-Ca-C8-Mzt-Q.jpg",
      title: "Because Every Pet Deserves Love and Care.",
      text: "Join us in making their lives happier and healthier.",
    },
  ];

  return (
    <div className="carousel w-full rounded-3xl overflow-hidden shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.img}
            className="w-full object-cover h-[400px] md:h-[500px]"
            alt={slide.title}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl">{slide.text}</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
            <a
              href={`#slide${
                index === 0 ? slides.length : slides[index - 1].id
              }`}
              className="btn btn-circle bg-white/70 hover:bg-white text-black border-none"
            >
              ❮
            </a>
            <a
              href={`#slide${
                index === slides.length - 1
                  ? slides[0].id
                  : slides[index + 1].id
              }`}
              className="btn btn-circle bg-white/70 hover:bg-white text-black border-none"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
