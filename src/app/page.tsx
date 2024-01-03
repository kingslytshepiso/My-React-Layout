"use client";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const sleep = (ms: number) => {
    console.log("waiting");
    new Promise((r) => setTimeout(r, ms));
  };
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  sleep(2000);
  const initRequest = async () => {
    await fetch("http://localhost:8080/home").then((res) => {
      if (res.status == 200) console.log("all good");
      else console.log("not good");
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    initRequest();
  });
  const getData = () => {
    fetch("http://localhost:8080/q")
      .then((res) => {
        if (res.status != 200) {
          setTitle("Error!");
          setMessage("There was an error with the request");
          handleShow();
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setData(data);
          setTitle("Success");
          setMessage("data found " + data);
          handleShow();
        }
      });
  };
  return (
    <div>
      Page content
      <div className="m-2 text-center">
        <h4>Click the button below to request data from the api</h4>
        <button onClick={getData} className="btn btn-primary">
          Click Me!
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
