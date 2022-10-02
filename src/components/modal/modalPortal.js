// 김동현 202.10.02 modal portal setup
import ReactDom from 'react-dom';

const ModalPortal = ({ children }) => {
  const el = document.getElementById('modal');
  return ReactDom.createPortal(children, el);
};

export default ModalPortal;