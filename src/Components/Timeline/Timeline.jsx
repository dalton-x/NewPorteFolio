
import { useState, useRef } from 'react';
import Steps from './Steps/Steps'
import './Style.css'
import jobs from './jobs.json'

function Timeline() {
  const timelineRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - timelineRef.current.offsetLeft);
      setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
      setIsDragging(false);
  };

  const handleMouseUp = () => {
      setIsDragging(false);
  };

  const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - timelineRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="process">
      <div className="row">
        <div className="section-heading">
          <h2 className="text-center mt-3">Mon parcours professionnel</h2>
        </div>
      </div>
      <div className="container">
          <div className="timeline"
               ref={timelineRef}
               onMouseDown={handleMouseDown}
               onMouseLeave={handleMouseLeave}
               onMouseUp={handleMouseUp}
               onMouseMove={handleMouseMove}
          >
          {jobs.map((job, index) => (
            <Steps key={'job_' + index} job={job} />
          ))}
          </div>
      </div>
    </section>
  )
}


export default Timeline