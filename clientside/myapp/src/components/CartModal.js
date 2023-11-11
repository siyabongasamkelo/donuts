import { Button, Modal } from "flowbite-react";
import Form from "react-bootstrap/Form";

export const CartModal = ({ openModal, onCloseModal }) => {
  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Choose Cartegory
            </h3>
            <Form>
              <div key={`default-radio`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={"radio"}
                  id={`default-radio`}
                  label={"All"}
                />
                <Form.Check // prettier-ignore
                  type={"radio"}
                  id={`default-radio`}
                  label={`Cake`}
                />
                <Form.Check // prettier-ignore
                  type={"radio"}
                  id={`default-radio`}
                  label={`Potato`}
                />
                <Form.Check // prettier-ignore
                  type={"radio"}
                  id={`default-radio`}
                  label={`Donut homes`}
                />
                <Form.Check // prettier-ignore
                  type={"radio"}
                  id={`default-radio`}
                  label={`Jelly donut`}
                />
                <Form.Check // prettier-ignore
                  type={"radio"}
                  id={`default-radio`}
                  label={`Beignet`}
                />
                <Form.Check // prettier-ignore
                  type={"radio"}
                  id={`default-radio`}
                  label={`Boston cream donut`}
                />
              </div>
            </Form>

            <div className="w-full">
              <Button>Confirm</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
