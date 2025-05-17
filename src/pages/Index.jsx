import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or any icons you're using
import { Link } from "react-router-dom";

const slides = [
    {
      image: "/nganya.webp",
      heading : "Welcome to thenganya.com",
      subheading: "Learn, Showcase, and "
    },
    {
      image: "/nganya1.webp",
      heading: "Rongai 125",
      subheading: ""
    },
    {
      image: "/nganya2.webp",
      heading: "Umoja",
      subheading: ""
    },
    {
      image: "/nganya4.webp",
      heading: "Emba Pesa",
      subheading: ""
    },
    {
      image: "/nganya5.webp",
      heading: "Kasarani",
      subheading: ""
    },    
  ];
export default function HeroSlider() {

    
  const [currentSlide, setCurrentSlide] = useState(0);

  // Go to previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Go to next slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Go directly to a selected slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Optional: Autoplay every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Clear interval when component unmounts
  }, [currentSlide]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background overlay (black transparent layer) */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          {/* Slide Image */}
          <img
            src={slide.image}
            alt="" // Blank alt because it's decorative. Text is handled separately.
            role="presentation" // Tells screen readers to ignore the image
            loading={index === 0 ? "eager" : "lazy"} // Lazy-load images except first one
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Slide Content */}
          <div className="absolute inset-0 flex flex-col justify-center z-20 px-10 md:ml-8">
            <div className="max-w-4xl animate-fade-up">
              {/* Slide Heading */}
              <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {slide.heading}
              </h1>

              {/* Slide Subheading */}
              <p className="text-white text-lg md:text-xl lg:text-2xl mb-8">
                {slide.subheading}Explore Matatu Culture 
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to={'/home'} className="bg-yellow-400 text-white px-6 py-3 rounded-sm hover:bg-blue-400 hover:text-white transition-all font-medium">
                  Get Started
                </Link>
                {/* <a
                  href=""
                  className="border-2 border-white text-white px-6 py-3 rounded-sm hover:bg-blue-400 hover:border-blue-400 transition-all font-medium"
                >
                  Discover More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators (dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-yellow-400" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
