import { useEffect } from 'react';
import postscribe from 'postscribe';

const useScript = (containerId, script) => {
  useEffect(() => {
    postscribe(`#${containerId}`, script);
  }, []);
};
export default useScript;
