import useAddImageModalStore from '../addImageModal/state';

const Modal = () => {
  const { isShow, closeModal } = useAddImageModalStore();
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900/75">
      <div className="w-full h-full flex items-center justify-center">
        <div className="p-5 w-[80%] h-[80%] bg-white inset-0 rounded-lg">window</div>
      </div>
    </div>
  );
};

export default Modal;
