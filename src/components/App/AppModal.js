import React from "react";

const Modal = ({
  onClose,
  isOpen = false,
  header,
  ButtonGroup,
  closeAway,
  isCloseButton,
  children,
}) => {
  return (
    <div
      id="myModal"
      onClick={() => {
        if (!closeAway) {
          return;
        }
        // close modal when outside of modal is clicked
        onClose();
      }}
      className={`modal ${isOpen ? "block" : "hidden"} fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-modal-fallback`}
    >
      <div
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
        className="modal-content fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 bg-white p-0 rounded-xl	w-[500px] shadow-xl shadow-modal-shadow animate-modal-slide"
      >
        <div className="modal-header py-3 px-3 border-b border-color-border rounded-t-xl">
          {isCloseButton && <span className="close">&times;</span>}
          <p className={"text-2xl font-bold"}>{header}</p>
        </div>
        <div className="modal-body p-2">{children}</div>
        <div className="modal-footer py-4 px-2 rounded-b-xl">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
};

const AppModal = ({
  header = "",
  ButtonGroup = React.Fragment,
  isCloseButton = true,
  closeAway = true,
  modalOpen = false,
  setModalOpen = function () {},
  content = React.Fragment,
}) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onClose={closeModal}
      header={header}
      ButtonGroup={ButtonGroup}
      isCloseButton={isCloseButton}
      closeAway={closeAway}
    >
      {content}
    </Modal>
  );
};

export default AppModal;
