import React, { useState, useEffect } from "react";
import Modal from "react-modal";


const About = ({ isOpen, onClose }) => {
 
  const [animateContent, setAnimateContent] = useState(false);
 
  useEffect(() => {
    if (isOpen) {
      // Add a delay to start the animation after the modal is open
      setTimeout(() => {
        setAnimateContent(true);
      }, 100);
    } else {
      setAnimateContent(false);
    }
  }, [isOpen]);

 

  return (
    <>
     
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="ContactUs Form"
        style={{
          content: {
            width: "60%",
            height: "60%",
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            boxShadow: "0 4px 8px rgb(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflowY: "auto",
            transition: "transform 1s ease-out",
            transform: animateContent ? "translateY(0)" : "translateY(-80vw)", 
            

          },
        }}
      >
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <h1 className="text-center text-3xl font-bold p-2 text-blue-600">
            About Us
          </h1>
          
          <p className="text-center text-2sm mt-5">
          Welcome to Manvika Consultancy Services Pvt. Ltd, the online platform that seamlessly connects businesses and customers in the digital era. Our mission is to empower entrepreneurs and enhance customer experiences through a user-friendly, innovative platform. At Manvika Consultancy Services Pvt. Ltd, we provide a dynamic space where businesses can showcase their products or services, interact with their audience, and thrive in the online marketplace. Simultaneously, we offer customers a convenient hub to discover, connect, and engage with the businesses that matter to them.Join us in shaping the future of online commerce and collaboration — because at Manvika Consultancy Services your success is our digital priority.
          </p>
        </div>
        
      </Modal>
      
    </>
  );
};

export default About;
