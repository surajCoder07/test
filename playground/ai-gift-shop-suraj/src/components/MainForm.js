import React from "react";
import { formConfig } from "../utils/formConfig";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const initialValues = {
  relationship: "",
  age: "",
  occasion: "",
  budget: "",
};
const MainForm = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      validationSchema: formConfig,
      initialValues: initialValues,
      onSubmit: (values, action) => {},
    });
  const isFormDataEmpty = Object.values(values).some((value) => value === "");
  return (
    <div className="z-[999]">
      <form
        onSubmit={handleSubmit}
        className="text-gray-200 p-6 flex flex-col gap-5 "
      >
        <div className="flex gap-5 flex-wrap max-sm:flex-col">
          <div className="flex-1 flex-shrink-0 flex flex-col gap-10 max-sm:gap-1 ">
            <div className=" py-5 max-sm:py-2 flex relative items-center max-sm:flex-col max-sm:items-start ">
              <label
                className="text-2xl mx-2 flex-[0.7] text-center max-sm:text-xl "
                htmlFor="relationship"
              >
                Relationship :
              </label>
              <div className="relative max-sm:w-full">
                <input
                  type="text"
                  className=" flex-[1.3]  max-sm:w-full text-2xl mx-2 border-[0] max-sm:text-xl  text-gray-400 py-1 outline-[0] bg-transparent border-b-[1px] border-gray-200"
                  placeholder="e.g brother"
                  id="relationship"
                  name="relationship"
                  list="relationship"
                  value={values.relationship}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </div>
              {values.relationship && touched.relationship && (
                <p className=" absolute w-[50%] right-0 text-right -bottom-12 text-red-600 text-sm">
                  {errors.relationship}
                </p>
              )}
            </div>
            <div className=" py-5 max-sm:py-2  flex relative max-sm:flex-col max-sm:items-start">
              <label
                htmlFor="age"
                className=" text-center flex-[0.7] text-2xl max-sm:text-xl mx-2"
              >
                Age :
              </label>
              <div className="max-sm:w-full">
                <input
                  type="text"
                  className="flex-[1.3] max-sm:w-full text-2xl mx-2 border-[0] max-sm:text-xl text-gray-400 py-1 outline-[0] bg-transparent border-b-[1px] border-gray-200"
                  id="age"
                  list="age"
                  name="age"
                  placeholder="e.g 21 "
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </div>
              {values.age && touched.age && (
                <p className=" absolute w-[50%] right-2 text-right -bottom-2 text-red-600 text-sm">
                  {errors.age}
                </p>
              )}
            </div>
          </div>
          <div className="flex-1 flex-shrink-0 flex flex-col gap-10 max-sm:gap-5 ">
            <div className=" py-5 max-sm:py-2  flex relative max-sm:flex-col max-sm:items-start">
              <label
                htmlFor="occasion"
                className="text-center flex-[0.7] text-2xl max-sm:text-xl mx-2"
              >
                occasion :
              </label>
              <div className="max-sm:w-full">
                <input
                  type="text"
                  className="flex-[1.3] text-2xl max-sm:w-full mx-2 border-[0] max-sm:text-xl text-gray-400 py-1 outline-[0] bg-transparent border-b-[1px] border-gray-200"
                  id="occasion"
                  name="occasion"
                  placeholder="e.g birthday "
                  value={values.occasion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </div>
              {values.occasion && touched.occasion && (
                <p className=" absolute w-[50%] right-0 text-right -bottom-12 text-red-600 text-sm">
                  {errors.occasion}
                </p>
              )}
            </div>
            <div className=" py-5 max-sm:py-2 flex   relative max-sm:flex-col max-sm:items-start">
              <label
                htmlFor="budget"
                className="text-center flex-[0.7] text-2xl max-sm:text-xl mx-2"
              >
                Budget :
              </label>
              <div className="max-sm:w-full">
                <input
                  type="text"
                  className="flex-[1.3] max-sm:w-full text-2xl mx-2 border-[0] max-sm:text-xl text-gray-400 py-1 outline-[0] bg-transparent border-b-[1px] border-gray-200"
                  id="budget"
                  name="budget"
                  placeholder="e.g 4000 "
                  value={values.budget}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </div>
              {values.budget && touched.budget && (
                <p className=" absolute w-[50%] right-0 text-right -bottom-12  text-red-600 text-sm">
                  {errors.budget}
                </p>
              )}
            </div>
          </div>
        </div>
        <span className="capitalize px-6 text-gray-200 text-sm ">
          all fields are mandatory *
        </span>
        <Link
          to={
            "gifts/" +
            values.relationship +
            "/" +
            values.occasion +
            "/" +
            values.age +
            "/" +
            values.budget
          }
          className="self-center cursor-pointer"
        >
          <button
            className="z-[99] cursor-pointer relative  px-14 py-4 max-sm:px-10  rounded-full  border-[1px] font-medium"
            id="submit-btn"
            type="submit"
            disabled={isFormDataEmpty}
          >
            search gifts
          </button>
        </Link>
      </form>
    </div>
  );
};

export default MainForm;
