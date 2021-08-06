import { useEffect } from "react";

const useObserver = ({ func, ref, property, threshold = 0.8 }) => {
  useEffect(() => {
      console.log(ref)
    const callback = () => func(ref.current[property]);
    const observer = new IntersectionObserver(callback, { threshold });
    window.addEventListener('scroll', () => {

    })
    observer.observe(ref.current);
    // return () => observer.disconnect();
  }, [func, ref, property, threshold]);
};

export default useObserver;
