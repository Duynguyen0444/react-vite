import React, { useState } from "react";

const replaceMissingFields = (fields) => {
  return fields.reduce((acc, field, index) => {
    if (field) {
      acc.push(field); // Keep non-empty fields
    } else if (index < fields.length - 1) {
      acc.push(fields[index + 1] || ""); // Replace with next field if possible
    }
    return acc;
  }, []);
};

const Form = () => {
  const [fields, setFields] = useState({
    fullName: "",
    insuranceEventDate: "",
    admissionDate: "",
    dischargeDate: "",
    hospitalizationDays: "",
    totalClaimAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = () => {
    const values = Object.values(fields);
    const replacedValues = replaceMissingFields(values);
    console.log("Original Fields:", values);
    console.log("Replaced Fields:", replacedValues);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Insurance Claim Form</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-medium">Họ và tên *</label>
          <input
            type="text"
            name="fullName"
            value={fields.fullName}
            placeholder="Vui lòng nhập"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="font-medium">Ngày xảy ra sự kiện bảo hiểm *</label>
          <input
            type="date"
            name="insuranceEventDate"
            value={fields.insuranceEventDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="font-medium">Ngày nhập viện *</label>
          <input
            type="date"
            name="admissionDate"
            value={fields.admissionDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="font-medium">Ngày xuất viện *</label>
          <input
            type="date"
            name="dischargeDate"
            value={fields.dischargeDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="font-medium">Số ngày nằm viện *</label>
          <input
            type="number"
            name="hospitalizationDays"
            value={fields.hospitalizationDays}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="font-medium">
            Tổng số tiền yêu cầu thanh toán (đồng) *
          </label>
          <input
            type="number"
            name="totalClaimAmount"
            value={fields.totalClaimAmount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
