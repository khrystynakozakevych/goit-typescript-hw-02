import { Toaster, toast } from 'react-hot-toast';
import { useEffect } from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
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
