const response = {
  status: "OK",
  message: "GetProductBenefitRequirementController OK",
  result: [
    {
      type: "HC",
      data: [
        {
          productCode: ["CHAIN", "CHBIN"],
          applicableBenefit: 100000000,
          applicableBenefitName: "Inpatient",
          accidentType: 0,
          accidentTypeName: null,
          icDs: [
            {
              id: "babb6a09-f6ad-ef11-b8e9-00224818fcd9",
              diseaseName: "AIDS",
            },
            {
              id: "5abc6a09-f6ad-ef11-b8e9-00224818fcd9",
              diseaseName: "ảnh hưởng độ rung",
            },
          ],
          docs: [
            {
              id: "f93b4b88-b6d4-ef11-a72f-002248ed2cf4",
              formId: "CLM270407",
              docName: "Các loại giấy tờ khác 100000000",
              required: true,
            },
          ],
        },
        {
          productCode: ["CHAOP"],
          applicableBenefit: 100000001,
          applicableBenefitName: "Outpatient",
          accidentType: 0,
          accidentTypeName: null,
          icDs: [
            {
              id: "babb6a09-f6ad-ef11-b8e9-00224818fcd9",
              diseaseName: "AIDS",
            },
            {
              id: "44bc6a09-f6ad-ef11-b8e9-00224818fcd9",
              diseaseName:
                "Ăn mòn xếp loại tương ứng với mức độ phụ thuộc phạm vi bề mặt cơ thể bị tổn thương",
            },
          ],
          docs: [
            {
              id: "f93b4b88-b6d4-ef11-a72f-002248ed2cf4",
              formId: "CLM270407",
              docName: "Các loại giấy tờ khác 100000001",
              required: true,
            },
            {
              id: "afe2e49a-79ee-ef11-be20-6045bd5ae10f",
              formId: "CLM270407",
              docName: "Các loại giấy tờ khác 100000001",
              required: false,
            },
          ],
        },
      ],
    },
    // {
    //   type: "PADD",
    //   data: [
    //     {
    //       productCode: ["ECI"],
    //       applicableBenefit: 0,
    //       applicableBenefitName: null,
    //       accidentType: 100000000,
    //       accidentTypeName: "Dismemberment",
    //       icDs: [],
    //       docs: [
    //         {
    //           id: "7b0e7311-b9d4-ef11-a72f-002248ecb09c",
    //           formId: "CLM380435",
    //           docName: "Kết quả xét nghiệm (máu, siêu âm, X quang, CTI, MRI …)",
    //           required: true,
    //         },
    //         {
    //           id: "c7ed905b-b9d4-ef11-a72f-002248ecb09c",
    //           formId: "CLM490017",
    //           docName:
    //             "Phim X Quang/CT/MRI (có thông tin: Họ và tên, Ngày tháng năm sinh, ...)",
    //           required: true,
    //         },
    //         {
    //           id: "8ffcb5d8-b8d4-ef11-a72f-002248ecb09c",
    //           formId: "CLM380429",
    //           docName: "Giấy ra viện",
    //           required: false,
    //         },
    //         {
    //           id: "f17500e6-b8d4-ef11-a72f-002248ecb09c",
    //           formId: "CLM380431",
    //           docName: "Bảng kê chi phí nằm viện",
    //           required: false,
    //         },
    //         {
    //           id: "280f6df2-b8d4-ef11-a72f-002248ecb09c",
    //           formId: "CLM270407",
    //           docName: "Các loại giấy tờ khác",
    //           required: false,
    //         },
    //         {
    //           id: "949a61ff-b8d4-ef11-a72f-002248ecb09c",
    //           formId: "CLM380430",
    //           docName: "Hóa đơn viện phí và các chứng từ thanh toán khác",
    //           required: false,
    //         },
    //       ],
    //     },
    //     {
    //       productCode: ["SCP"],
    //       applicableBenefit: 0,
    //       applicableBenefitName: null,
    //       accidentType: 100000001,
    //       accidentTypeName: "Hospitalization",
    //       icDs: [],
    //       docs: [
    //         {
    //           id: "c7ed905b-b9d4-ef11-a72f-002248ecb09c",
    //           formId: "CLM490017",
    //           docName:
    //             "Phim X Quang/CT/MRI (có thông tin: Họ và tên, Ngày tháng năm sinh, ...)",
    //           required: true,
    //         },
    //         {
    //           id: "280f6df2-b8d4-ef11-a72f-002248ecb09c",
    //           formId: "CLM270407",
    //           docName: "Các loại giấy tờ khác",
    //           required: false,
    //         },
    //         {
    //           id: "949a61ff-b8d4-ef11-a72f-002248ecb09c",
    //           formId: "CLM380430",
    //           docName: "Hóa đơn viện phí và các chứng từ thanh toán khác",
    //           required: false,
    //         },
    //         {
    //           id: "aa7b38b3-59b0-ef11-b8e8-002248ee0f44",
    //           formId: "CLM290407",
    //           docName:
    //             "Hóa đơn/phiếu thu/bảng kê chi phí/các chứng từ thanh tóan khác…",
    //           required: false,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
  succeeded: true,
  errors: null,
  errorCode: 0,
};

function mergeDocuments(result, hcCode = null, paddCode = null) {
  let result_tmp = [];
  let docsMap = new Map();
  
  result.forEach(item => {
      let docs = [];

      // Exclude HC and PADD if no specific codes are provided
      if ((item.type === "HC" && !hcCode) || (item.type === "PADD" && !paddCode)) {
          return;
      }

      if (item.type === "HC" && hcCode) {
          docs = item.data.flatMap(d => d.applicableBenefit === hcCode ? d.docs : []);
      } else if (item.type === "PADD" && paddCode) {
          docs = item.data.flatMap(d => d.accidentTypeName === paddCode ? d.docs : []);
      } else {
          docs = item.data.flatMap(d => d.docs);
      }

      docs.forEach(doc => {
          let key = `${doc.formId}-${doc.docName}`;
          
          if (!docsMap.has(key)) {
              docsMap.set(key, doc);
          } else {
              let existingDoc = docsMap.get(key);
              
              if (doc.required && !existingDoc.required) {
                  docsMap.set(key, doc);
              }
          }
      });
  });
  
  result_tmp = Array.from(docsMap.values());
  return result_tmp;
}

// Example usage:
const mergedDocs = mergeDocuments(response.result,100000000); // This will exclude HC and PADD docs
console.log(mergedDocs);
console.log(mergedDocs.length);
