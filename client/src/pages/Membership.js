import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Modal from "react-modal";
import { toast, Toaster } from "react-hot-toast";
import "./Spinner.css";

const Membership = ({ isOpen, onClose }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);

  const validationSchema = Yup.object({
    membershipfor: Yup.string().required("Membership For is required"),
    /* businessName: Yup.string().required('Business Name is required'), */
    ownerName: Yup.string().required("Owner Name is required"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Pin Code must be 6 digits")
      .required("Pin Code is required"),
    contactNo: Yup.string()
      .matches(/^\d{10}$/, "Contact Number must be 10 digits")
      .required("Contact Number is required"),
    plan: Yup.string().required("Plan Type is required"),
    message: Yup.string().required("comment is required"),
  });

  const formik = useFormik({
    initialValues: {
      membershipfor: "",
      businessName: "",
      ownerName: "",
      address: "",
      pincode: "",
      contactNo: "",
      plan: "",
      message: "",
    },
    
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const apiUrl = process.env.REACT_APP_API_URL;
      try {
        setSubmitting(true);
        const response = await axios.post(
          `${apiUrl}/membership`,
          values
        );
        console.log(response.data);
        toast.success(
          "Membership Form submitted successfully, We will get back to you shortly"
        );
        formik.resetForm();
        setTimeout(() => {
          onClose();
        }, 2000);
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form, please try after sometime");
      } finally {
        setSubmitting(false);
      }
    },
  });
  useEffect(() => {
    if (isOpen) {
      
      setTimeout(() => {
        setAnimateContent(true);
      }, 100);
    } else {
      setAnimateContent(false);
    }
  }, [isOpen]);

  const membershipOptions = [
    "Tiffin Service",
    "Saloon Service",
    "Repair Service",
    "Cake",
    "Travels",
    "Sweets",
    "Namkeen",
  ];

  const planOptions = ["Monthly", "Quarterly", "Halfyearly", "Yearly"];

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
     contentLabel="Membership Form"
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
         transform: animateContent ? "translateX(0)" : "translateX(-80vw)", 
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
        <h1 className="mb-4 p-2 font-bold text-xl md:text-2xl lg:text-2xl text-blue-600 text-center">
          Membership form
        </h1>
        </div>
    
      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="membershipfor"
                className="block text-sm font-medium text-gray-600"
              >
                Membership For
              </label>
              <select
                id="membershipfor"
                name="membershipfor"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.membershipfor}
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
              {formik.touched.membershipfor && formik.errors.membershipfor && (
                <div className="text-red-500">
                  {formik.errors.membershipfor}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="businessName"
                className="block text-sm font-medium text-gray-600"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.businessName}
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="ownerName"
                className="block text-sm font-medium text-gray-600"
              >
                Owner Name
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ownerName}
                className="mt-1 block w-full p-2 border rounded-md"
              />
              {formik.touched.ownerName && formik.errors.ownerName && (
                <div className="text-red-500">{formik.errors.ownerName}</div>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                className="mt-1 block w-full p-2 border rounded-md"
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-red-500">{formik.errors.address}</div>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-600"
              >
                Pin Code
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pincode}
                className="mt-1 block w-full p-2 border rounded-md"
              />
              {formik.touched.pincode && formik.errors.pincode && (
                <div className="text-red-500">{formik.errors.pincode}</div>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="contactNo"
                className="block text-sm font-medium text-gray-600"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contactNo"
                name="contactNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactNo}
                className="mt-1 block w-full p-2 border rounded-md"
              />
              {formik.touched.contactNo && formik.errors.contactNo && (
                <div className="text-red-500">{formik.errors.contactNo}</div>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="plan"
                className="block text-sm font-medium text-gray-600"
              >
                Plan Type
              </label>
              <select
                id="plan"
                name="plan"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.plan}
                className="mt-1 block w-full p-2 border rounded-md"
              >
                <option value="" disabled>
                  Select a plan
                </option>
                {planOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {formik.touched.plan && formik.errors.plan && (
                <div className="text-red-500">{formik.errors.plan}</div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Your Comment
            </label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="mt-1 block w-full p-2 border rounded-md"
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500">{formik.errors.message}</div>
            )}
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

export default Membership;
