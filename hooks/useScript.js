import { useEffect } from 'react';

const useScript = (containerId, scriptUrl) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptUrl;
    document.getElementById(containerId).prepend(script);
  }, []);
};
export default useScript;
