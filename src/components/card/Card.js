import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";

function scrollTo(ref) {
  if (!ref.current) return;
  window.scrollTo({top: ref.current.offsetTop - 120, behavior: 'smooth'});
}

function Card(props) {

  const {
    className,
    pathString
  } = props;

  const [here, setHere] = useState(false);
  const location = useLocation();
  let ref = useRef(null);

  useEffect (() => {
    setHere(location.pathname + location.hash === pathString);
    if (here) scrollTo(ref);
    else if (!location.hash)
      window.scrollTo({top: 0, behavior: 'smooth'});
  }, [location.pathname, location.hash, pathString, here]);
  
  return (
    <div className={className} style={{borderColor:here?'orangered':null}} ref={ref}>
      {props.children}
    </div>
  );
}

export default Card;