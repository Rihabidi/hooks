import { useState } from "react";
import { Modal,Button } from "react-bootstrap";



function AddMovie({AddFilm}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ transform:"translate(300%,20%)"}}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <label style={{marginLeft: '10%'}} > movie title</label>
       <input type="text" style={{width: '80%',marginLeft: '10%'}}
        onChange={event=>setTitle(event.target.value)}
        value={title}
        />
       <label style={{marginLeft: '10%'}} >movie description</label>
       <input type="text" style={{width: '80%',marginLeft: '10%'}}
        onChange={event=>setDescription(event.target.value)}
        value={description}
       />
       <label style={{marginLeft: '10%'}}>movie url</label>
       <input type="text" style={{width: '80%',marginLeft: '10%'}}
        onChange={event=>setUrl(event.target.value)}
        value={url}
       />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>AddFilm({title, url, description})}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
