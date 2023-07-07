import classNames from 'classnames';
import useAddImageModalStore from '../addImageModal/state';
import { MouseEvent } from 'react';

const enum MODAL_DATA_ATTR {
  CLOSE = 'close',
}

const Modal = () => {
  const { isShow, closeModal } = useAddImageModalStore();

  const toggle = (event: MouseEvent<HTMLElement>) => {
    const { dataset } = event.target as HTMLElement;
    if (dataset.modal === MODAL_DATA_ATTR.CLOSE) {
      closeModal();
    }
    console.log(event);
  };

  return (
    <div
      className={classNames(
        'fixed top-0 left-0 w-full h-full bg-slate-900/75',
        { hidden: !isShow }
      )}
      onClick={toggle}
    >
      <div
        className="w-full h-full flex items-center justify-center"
        data-modal={'close'}
      >
        <div className="p-5 w-[80%] h-[80%] bg-white inset-0 rounded-lg">
          window
        </div>
      </div>
    </div>
  );
};

export default Modal;
