import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as xlsx from "xlsx";
import Data from "./component/Data";

function App() {
  const [excelFile, SetExcelFile] = useState(null);
  const [PDF, setPDF] = useState(null);
  const [ExcelFileerror, setExcelFileerror] = useState(null);

  const [exceldata, Setexceldata] = useState(null);
  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/pdf",
  ];
  const changeHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
    }
    if (selectedFile && fileType.includes(selectedFile.type)) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = (e) => {
        setExcelFileerror(null);
        SetExcelFile(e.target.result);
        setPDF(e.target.result);
      };
    } else {
      alert("please enter a valid type of file in excel or pdf");
      SetExcelFile(null);
    }
  };
  // console.log(excelFile);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (excelFile !== null) {
        const workbook = xlsx.read(excelFile || PDF, { type: "buffer" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = xlsx.utils.sheet_to_json(worksheet);
        Setexceldata(data);
        console.log(exceldata);
        try {
          const body = exceldata;
          console.log(body)
          const sendpdf = await fetch("http://localhost:8000/uploadpdf", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          console.log(sendpdf);
        } catch (error) {
          console.log(error);
        }
      } else {
        Setexceldata(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(()=>{
  //   submitHandler()
  // },[])
  // console.log(exceldata);

  return (
    <>
      <div>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>FILE</Form.Label>
            <Form.Control type="file" onChange={changeHandler} />
          </Form.Group>
          {setExcelFileerror}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div>
        {exceldata === null && <>No file selected</>}
        {exceldata !== null && (
          <div className="table-responsive">
            <table className="table">
              <Data exceldata={exceldata} />
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
