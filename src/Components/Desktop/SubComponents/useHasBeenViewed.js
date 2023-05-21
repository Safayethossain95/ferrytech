import {useRef,useEffect} from "react"
import { useInView } from "framer-motion";
export const useHasBeenViewed = () => {
    const [ref, inView] = useInView();
    const prevInView = useRef(false);
    const hasBeenViewed = prevInView.current || inView;
    useEffect(() => {
      prevInView.current = inView;
    });
    
    return {hasBeenViewed, ref};
  }