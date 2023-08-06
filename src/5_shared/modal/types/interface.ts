export interface FileLoaderProps {
  initImageUrl?: string;
}

export interface ModalStateManagement {
  isShow: boolean;
  openModal: () => void;
  closeModal: () => void;
}
