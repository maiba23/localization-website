import * as React from "react"
import { useEffect, useRef } from "react"
import PropTypes from 'prop-types';

import useStore from "../store"

function Section({ id, children }) {
  const addSection = useStore((store) => store.addSection);
  const sectionRef = useRef();

  useEffect(()=>{
    addSection(sectionRef)
  },[])
 

  return (
    <div  className={`section ${id}`}id={id} ref={sectionRef}>
      {children}
    </div>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
}

export default Section;
