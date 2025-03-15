import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema for Class A
const classAValidationSchema = Yup.object().shape({
  bankNameA: Yup.string().required("Bank name (A) is required"),
  provinceNameA: Yup.string().required("Province name (A) is required"),
  districtNameA: Yup.string().required("District name (A) is required"),
  wardNameA: Yup.string().required("Ward name (A) is required"),
});

// Validation Schema for Class B
const classBValidationSchema = Yup.object().shape({
  bankNameB: Yup.string().required("Bank name (B) is required"),
  provinceNameB: Yup.string().required("Province name (B) is required"),
  districtNameB: Yup.string().required("District name (B) is required"),
});

const FormStep5 = () => {
  const [valueType, setValueType] = useState(1); // Default to Class A

  return (  
    <Formik
      initialValues={{
        // Separate names for Class A and Class B fields
        bankNameA: "",
        provinceNameA: "",
        districtNameA: "",
        wardNameA: "",
        bankNameB: "",
        provinceNameB: "",
        districtNameB: "",
      }}
      validationSchema={
        valueType === 1 ? classAValidationSchema : classBValidationSchema
      }
      onSubmit={(values) => {
        console.log("Submitted values:", values);
        console.log("Current valueType:", valueType);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          {/* Radio Buttons to Select Class */}
          <div>
            <label>
              <Field
                type="radio"
                name="valueType"
                value="1"
                checked={valueType === 1}
                onChange={() => {
                  setValueType(1);
                  setFieldValue("bankNameB", "");
                  setFieldValue("provinceNameB", "");
                  setFieldValue("districtNameB", "");
                }}
              />
              Class A
            </label>
            <label>
              <Field
                type="radio"
                name="valueType"
                value="3"
                checked={valueType === 3}
                onChange={() => {
                  setValueType(3);
                  setFieldValue("bankNameA", "");
                  setFieldValue("provinceNameA", "");
                  setFieldValue("districtNameA", "");
                  setFieldValue("wardNameA", "");
                }}
              />
              Class B
            </label>
          </div>

          {/* Class A Fields (Only visible when Class A is selected) */}
          {valueType === 1 && (
            <>
              <div>
                <label>Bank Name (A):</label>
                <Field name="bankNameA" type="text" />
                <ErrorMessage
                  name="bankNameA"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label>Province Name (A):</label>
                <Field name="provinceNameA" type="text" />
                <ErrorMessage
                  name="provinceNameA"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label>District Name (A):</label>
                <Field name="districtNameA" type="text" />
                <ErrorMessage
                  name="districtNameA"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label>Ward Name (A):</label>
                <Field name="wardNameA" type="text" />
                <ErrorMessage
                  name="wardNameA"
                  component="div"
                  className="error"
                />
              </div>
            </>
          )}

          {/* Class B Fields (Only visible when Class B is selected) */}
          {valueType === 3 && (
            <>
              <div>
                <label>Bank Name (B):</label>
                <Field name="bankNameB" type="text" />
                <ErrorMessage
                  name="bankNameB"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label>Province Name (B):</label>
                <Field name="provinceNameB" type="text" />
                <ErrorMessage
                  name="provinceNameB"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label>District Name (B):</label>
                <Field name="districtNameB" type="text" />
                <ErrorMessage
                  name="districtNameB"
                  component="div"
                  className="error"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormStep5;
