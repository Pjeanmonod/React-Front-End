import React, { useState, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Frank() {
  const [newListItem, setNewListItem] = useState([]);
  const [show, setShow] = useState(false);
  const input = useRef();
  const changeOpen = () => setShow(true);
  const changeClose = () => setShow(false);

  var addToList = e => {
    e.preventDefault();
    setNewListItem([...newListItem, input.current.value]);
  };

  return (
    <div className="App">

      <Button onClick={changeOpen}>Client Source Networks</Button>

      <Modal show={show} onHide={changeClose}>
        <form onSubmit={addToList}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Enter IP address details</Form.Label>
              <br />
              <Form.Control type="text" ref={input} placeholder="eg.192.168.1.1/24" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="sumbit">Add to List</Button>
          </Modal.Footer>
        </form>
      </Modal>

      <ul>
        {newListItem.map((item, b) => (
          <li key={b}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Frank;