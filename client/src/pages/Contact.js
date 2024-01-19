import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Contact = ({ isOpen, onClose }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);
  const membershipOptions = [
    "Tiffin Service",
    "Saloon Service",
    "Repair Service",
    "Cake",
    "Travels",
    "Sweets",
    "Namkeen",
  ];

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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      selectMembership: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
      mobile: Yup.string()
        .required("Required")
        .matches(/^\d{10}$/, "Mobile number must be 10 digits"),
      selectMembership: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        setSubmitting(true);
        const response = await axios.post(`${apiUrl}/contact`,
          values
        );
        setTimeout(() => {
          toast.success(
            "Form submitted successfully, we will get back to you shortly..."
          );
        }, 1000);

        console.log("Form submitted successfully:", response.data);
        formik.resetForm();
        setTimeout(() => {
          onClose();
        }, 2000);
      } catch (error) {
        toast.error("Error Submitting Form, please try after sometime");
        console.error("Error submitting form:", error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
     {isSubmitting && (
            <div className="overlay">
              <div className="loader">
                <div className="loader-inner ball1"></div>
                <div className="loader-inner ball2"></div>
              </div>
            </div>
          )}
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="ContactUs Form"
        style={{
          content: {
            width: "60%",
            height: "70%",
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            boxShadow: "0 4px 8px rgb(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflowY: "auto",
            transition: "transform 1s ease-out",
            transform: animateContent ? "translateX(0)" : "translateX(100%)",
            

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
            CONTACT NOW
          </h1>
          <h1 className="text-center font-bold p-2 text-3xl">
            Have Question? Write a Message
          </h1>
          <p className="p-3">
            Our support team will get back to you in 24-h during standard
            business hours. We will catch you as early as we receive the message
          </p>
        </div>
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
          <br />
          <form onSubmit={formik.handleSubmit}>
            <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Enter Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="mt-1 block w-full p-2 border rounded-md"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Enter Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="mt-1 block w-full p-2 border rounded-md"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-600"
                >
                  Enter Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                  className="mt-1 block w-full p-2 border rounded-md"
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="text-red-500">{formik.errors.mobile}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="selectMembership"
                  className="block text-sm font-medium text-gray-600"
                >
                  Select Services
                </label>
                <select
                  id="selectMembership"
                  name="selectMembership"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.selectMembership}
                  className="mt-1 block w-full p-2 border rounded-md"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {membershipOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formik.touched.selectMembership &&
                formik.errors.selectMembership ? (
                  <div className="text-red-500">
                    {formik.errors.selectMembership}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Enter Your Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="mt-1 block w-full p-2 border rounded-md py-3"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500">{formik.errors.message}</div>
              ) : null}
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className={`bg-blue-500 text-white p-2 m-2 rounded-xl w-full ${
                  (!formik.isValid || isSubmitting) &&
                  "opacity-50 cursor-not-allowed"
                }`}
                disabled={!formik.isValid || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Toaster />
    </>
  );
};

export default Contact;
