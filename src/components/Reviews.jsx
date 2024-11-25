import React, { useState } from 'react';
import './Reviews.css';  // Import styling

// List of reviews
const reviews = [
    {
        text: "We've worked with big2 ventures a few times and they are amazing! Not just strong deck designs, they possess a strong business acuity and help present yoru information in the most logical way and in a  manner that's very clear and concise. ",
        author: "Raza",
        role: "Serial-Entrepreneur",
    },
    {
        text: "big2 ventures have become a valued asset for my organization as we continuously collaborate on strategy and Board presentations. They have become a reliable partner when it comes to ensuring our objectives are communicated clearly.",
        author: "Timothy",
        role: "Managing Director",
    },
    {
        text: "big2 ventures were great to work with! They were able to understand our objective and followed through with exactly what we needed in a timely manner. They are very skilled and efficient in their work.",
        author: "Isaac",
        role: "Co-Founder",
    },
    {
        text: "big2 ventures successfully supported our fundraising efforts! They were able to jump right in and help us during negotiations with their valuation and cap table services. Their backing made sure we didn't undervalue our start-up.",
        author: "Annette",
        role: "Founder",
    },
];

const Reviews = () => {
    const [slideIndex, setSlideIndex] = useState(0); // Start at the first review index

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % reviews.length); // Move to next index and loop back to 0
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length); // Move to previous index and loop back to the last
    };

    return (
        <div className="slideshow-container">
            <div className="mySlides" style={{ transform: `translateX(-${slideIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {reviews.map((review, index) => (
                    <div className="review-box" key={index}>
                        <q>{review.text}</q>
                        <p className="author">
                            - {review.author}, <span className="role">{review.role}</span>
                        </p>
                    </div>
                ))}
            </div>

            <div className="nav-buttons">
                <button className="prev" onClick={prevSlide}>❮</button>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>

            <div className="dot-container">
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${slideIndex === index ? 'active' : ''}`} // Track active dot based on slideIndex
                        onClick={() => setSlideIndex(index)} // Directly set index with dots
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Reviews;