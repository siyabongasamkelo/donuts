import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { logOut } from "../Features/Users";

function LogOutMordal({ openModal, closeIt }) {
  const dispatch = useDispatch();
  return (
    <>
      <Modal show={openModal} size="md" onClose={closeIt} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to log Out
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  dispatch(logOut());
                  closeIt();
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={closeIt}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LogOutMordal;
