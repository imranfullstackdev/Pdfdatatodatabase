const express = require("express");
const router = express.Router();
const pool = require("../DB/db");

router.get("/get", async (req, res) => {
  const getPdf = await pool.query("select * from agenttable");
  res.send(getPdf.rows);
});
router.post('/uploadpdf',async(req,res)=>{
    const arr_arr=req.body
    arr_arr.map(async(item)=>{
        const{
            agentId,
                    first_name,
                    last_name,
                    birth_date,
                    mobilenumber,
                    pancard,
                    adharcard,
                    emailaddress,
                    gender,
                    presentaddress1,
                    presentaddress2,
                    permenentaddress1,
                    permenentaddress2,
                    presentcity,
                    permenantcity,
                    presentdistrict,
                    permenanatdistrict,
                    presentstate,
                    permenantstate,
                    presentcountry,
                    permenantcountry,
        }=item
        const uploadpdf=await pool.query(`insert into agenttable(
            agentid,
               first_name,
                last_name,
                 birth_date,
                 mobilenumber,
                 pancard,
                 adharcard,
                emailaddress,
                gender,
                presentaddress1,
                presentaddress2,
                permenentaddress1,
                permenentaddress2,
                presentcity,
                permenantcity,
                 presentdistrict,
                 permenanatdistrict,
                 presentstate,
                 permenantstate,
                presentcountry,
                permenantcountry)
                  values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)`,[
                agentId,
          first_name,
          last_name,
          birth_date,
          mobilenumber,
          pancard,
          adharcard,
          emailaddress,
          gender,
          presentaddress1,
          presentaddress2,
          permenentaddress1,
          permenentaddress2,
          presentcity,
          permenantcity,
          presentdistrict,
          permenanatdistrict,
          presentstate,
          permenantstate,
          presentcountry,
          permenantcountry,

            ])
            console.log("hi",uploadpdf)
    })
})

// router.post("/uploadpdf", async (req, res) => {
//   const res_arr=req.body;
//   res_arr.map(async(item)=>{
//     const{
//         agentId,
//         first_name,
//         last_name,
//         birth_date,
//         mobilenumber,
//         pancard,
//         adharcard,
//         emailaddress,
//         gender,
//         presentaddress1,
//         presentaddress2,
//         permenentaddress1,
//         permenentaddress2,
//         presentcity,
//         permenantcity,
//         presentdistrict,
//         permenanatdistrict,
//         presentstate,
//         permenantstate,
//         presentcountry,
//         permenantcountry,
//       } = item;
//       const uploadPdf = await pool.query(
//         `insert into agenttable(  
//         agentid,
//         first_name,
//         last_name,
//         birth_date,
//         mobilenumber,
//         pancard,
//         adharcard,
//         emailaddress,
//         gender,
//         presentaddress1,
//         presentaddress2,
//         permenentaddress1,
//         permenentaddress2,
//         presentcity,
//         permenantcity,
//         presentdistrict,
//         permenanatdistrict,
//         presentstate,
//         permenantstate,
//         presentcountry,
//         permenantcountry)
//           values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21) `,
//         [
//           agentId,
//           first_name,
//           last_name,
//           birth_date,
//           mobilenumber,
//           pancard,
//           adharcard,
//           emailaddress,
//           gender,
//           presentaddress1,
//           presentaddress2,
//           permenentaddress1,
//           permenentaddress2,
//           presentcity,
//           permenantcity,
//           presentdistrict,
//           permenanatdistrict,
//           presentstate,
//           permenantstate,
//           presentcountry,
//           permenantcountry,
//         ]
//       );
//       console.log("hi",uploadPdf.rows)
//   })
  
  

  // const uploadfile=await pool.query('insert into ')
// });

module.exports = router;
