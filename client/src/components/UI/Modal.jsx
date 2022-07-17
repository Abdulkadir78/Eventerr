import { MdOutlineClose } from "react-icons/md";

function Modal({ children, open, onClose }) {
  return open ? (
    <>
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-40 z-40" />

      <div
        className="w-screen h-screen md:h-5/6 fixed top-[11%] md:left-[20%] 
        lg:left-[25%] xl:left-[30%] right-0 overflow-auto z-50 pb-16"
      >
        <div className="md:w-[60%] lg:w-[50%] xl:w-[40%] bg-white border-2 p-10 relative rounded-md">
          <button className="absolute top-5 right-5" onClick={onClose}>
            <MdOutlineClose size={30} />
          </button>
          {children}
        </div>
      </div>
    </>
  ) : null;
}

export default Modal;
