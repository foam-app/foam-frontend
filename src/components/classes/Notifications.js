import { toast } from 'react-toastify';

export const success = (msg) => toast.success(msg, {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const failure = (msg) => toast.error(msg, {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const warning = (msg) => toast.warn(msg, {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const notify = (msg) => toast(msg, {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

