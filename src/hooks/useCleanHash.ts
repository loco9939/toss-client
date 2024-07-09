import { useEffect } from 'react';

const useCleanHash = () => {
  function removeLocationHash() {
    const noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL);
  }

  useEffect(() => {
    window.addEventListener('load', removeLocationHash);

    return () => window.removeEventListener('load', removeLocationHash);
  }, []);
};

export default useCleanHash;
