import React, {useEffect} from 'react';

const UseOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      console.log('ref', ref.current);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    }
  }, [])

  return (
    <div>
      UseOnClickOutside
    </div>
  );
};

export default UseOnClickOutside;
