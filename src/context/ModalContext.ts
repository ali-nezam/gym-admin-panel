import { createContext, useContext } from "react";
interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);
export default ModalContext;

export function useModalContext(): ModalContextType {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModalContext must be used within a Modal provider");
  }
  return context;
}
