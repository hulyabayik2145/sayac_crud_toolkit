import { Modal, Button, Form } from "react-bootstrap";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // formData clasından örnek oluşturuyoruz
    const formData = new FormData(e.target);
    // formdaki inputların verisini objeye çeviriyoruz
    const taskData = Object.fromEntries(formData.entries());
    if (editItem) {
      //guncellenecek eleman varsa güncelleneceğini haber ver
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      // yoksa reducer a veri ekleneceğini haber ver
      dispatch(addTask(taskData));
    }

    // modal kapat
    handleClose();
  };
  return (
    <div>
      <Modal
        centered
        className="text-black"
        show={isOpen}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {editItem ? "görevi güncelle" : "yeni görev ekle"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} className="d-flex  flex-column gap-3">
            <Form.Group>
              <Form.Label>Görev Tanımı</Form.Label>
              <Form.Control
                defaultValue={editItem?.title}
                name="title"
                placeholder="Navbarı duzenle"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>İsminiz</Form.Label>
              <Form.Control
                defaultValue={editItem?.author}
                name="author"
                placeholder="Ör:Ahmet"
                required
              />
            </Form.Group>{" "}
            <Form.Group>
              <Form.Label>Oluşturan</Form.Label>
              <Form.Control
                defaultValue={editItem?.assigned_to}
                name="assigned_to"
                placeholder="Ör: Mehmet"
              />
            </Form.Group>{" "}
            <Form.Group>
              <Form.Label>Son teslim tarihi</Form.Label>
              <Form.Control
                defaultValue={editItem?.end_date}
                name="end_date"
                type="date"
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                İptal
              </Button>
              <Button type="submit" variant="primary">
                {editItem ? "Kaydet" : "Oluştur"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <div />
    </div>
  );
};

export default FormModal;
