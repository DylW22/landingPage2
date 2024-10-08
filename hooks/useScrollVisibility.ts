import { useEffect, useState, RefObject } from "react";

const useScrollVisibility = (ref: RefObject<HTMLElement>): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setIsVisible(rect.top >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isVisible;
};

export default useScrollVisibility;
