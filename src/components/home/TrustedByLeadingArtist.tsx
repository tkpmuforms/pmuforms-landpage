"use client";

import { useState } from "react";
import "./trustedbyleadingartist.scss";
import image1 from "../../assets/images/pexels-cottonbro-6862594 1.png";
import image2 from "../../assets/images/pexels-polina-tankilevitch-3735625 1.png";
import image3 from "../../assets/images/pexels-shkrabaanthony-5486145 1.png";
import { NikelogoTrustedPmuSvg } from "../../assets/svgs/Svg";

const TrustedByLeadingArtist = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      review:
        "I just wanted to reach out and express my gratitude once more for adding Botox when I previously requested it - it's been such a valuable addition! Your app has truly simplified the process of managing consent forms and waivers, making it much more efficient for my business.",
      nikeImage: <NikelogoTrustedPmuSvg />,
      rating: 5,
      name: "Michelle Groner",
      jobdescription: "Brow Artist",
      location: "California",
      backgroundImage: image1,
      profileImage: "/professional-woman-headshot.png",
    },
    {
      id: 2,
      review:
        "Good afternoon, I'm eager to try out your PMU forms as I've heard great things about them. However, I would prefer to use my own forms. Is there a way to import them into your system or will I need to retype each question into the new forms?",
      nikeImage: <NikelogoTrustedPmuSvg />,
      rating: 5,
      name: "Laura Catherine",
      jobdescription: "Brow Artist",
      location: "California",
      backgroundImage: image2,
      profileImage: "/professional-blonde-headshot.png",
    },
    {
      id: 3,
      review:
        "Good afternoon, I'm eager to try out your PMU forms as I've heard great things about them. However, I would prefer to use my own forms. Is there a way to import them into your system or will I need to retype each question into the new forms?",
      nikeImage: <NikelogoTrustedPmuSvg />,
      rating: 5,
      name: "Laura Catherine",
      jobdescription: "Brow Artist",
      location: "California",
      backgroundImage: image3,
      profileImage: "/professional-woman-headshot-brunette.png",
    },
    {
      id: 4,
      review:
        "Good night, I'm eager to try out your PMU forms as I've heard great things about them. However, I would prefer to use my own forms. Is there a way to import them into your system or will I need to retype each question into the new forms?",
      nikeImage: <NikelogoTrustedPmuSvg />,
      rating: 5,
      name: "Laura Catherine",
      jobdescription: "Brow Artist",
      location: "California",
      backgroundImage: image3,
      profileImage: "/professional-woman-headshot-brunette.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % reviews.length;
      slides.push(reviews[index]);
    }
    return slides;
  };

  return (
    <div className="trusted-by-leading-artist" id="review">
      <h2 className="trusted-title">Trusted by Leading PMU Artists</h2>

      <div className="carousel-container">
        <button
          className="carousel-nav prev"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="carousel-track">
          {getVisibleSlides().map((review, index) => (
            <div
              key={`${review.id}-${currentSlide}-${index}`}
              className="testimonial-card"
            >
              <div
                className="card-background"
                style={{ backgroundImage: `url(${review.backgroundImage})` }}
              >
                <div className="nike-logo">{review.nikeImage}</div>

                <div className="testimonial-content">
                  <p className="testimonial-text">"{review.review}"</p>

                  <div className="author-info">
                    <img
                      src={review.profileImage || "/placeholder.svg"}
                      alt={review.name}
                      className="author-avatar"
                    />
                    <div className="author-details">
                      <h4 className="author-name">{review.name}</h4>
                      <p className="author-title">
                        {review.jobdescription}, {review.location}
                      </p>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`star ${
                              i < review.rating ? "filled" : ""
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-nav next"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TrustedByLeadingArtist;
