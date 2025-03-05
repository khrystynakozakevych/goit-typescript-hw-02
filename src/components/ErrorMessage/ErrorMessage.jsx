import { Toaster, toast } from 'react-hot-toast';
import { useEffect } from 'react';

const ErrorMessage = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast.error(message, {
        duration: 3000,
        position: 'top-center',
        style: {
          borderRadius: '8px',
          background: '#ff4d4f',
          color: '#fff',
          fontSize: '16px',
        },
      });
    }
  }, [message]);

  return <Toaster />;
};

export default ErrorMessage;
