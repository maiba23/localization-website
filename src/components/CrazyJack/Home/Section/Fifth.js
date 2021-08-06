import * as React from 'react'
import Section from './index'

const FifthSection = () => (
    <Section>
        <div className='sub-section full bottom'>
            <div className='content full' >
                
                <div className='iot-section-container' >
                     
                <div className='container-highlight-iot'>
                    <p>
                       With have deployed multiple IOT solutions from energy sensors to live position tracking.
                    </p>
                    <p>
                        We build solid networks that connect the analog world to the cloud.
                    </p>
                </div>
                <h2 className='iot-title'>IOT</h2>

                </div>
            </div>
            <div className="section-background">
            <ConstellationAnimation/>
            </div>

        </div>
    </Section>
)

const ConstellationAnimation = () => (
    <div id='constellation-background-container'>
        <style jsx>{`
        #ellipse-path-grey,#ellipse-path-yellow{fill:none;stroke-miterlimit:10;}#ellipse-path-grey{stroke:#e8e6d9;}.fill-purple{fill:#d27dff;}
        .fill-grey{fill:#e8e6d9;}#ellipse-path-yellow{stroke:#fad141;}.cls-5{fill:#fad141;}
        `}</style>
    <svg id='constellation-background' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 521 332.95">
    
     <g id="Layer_2" data-name="Layer 2">
     <g id="ELIPSES">
     <g id="grey-ellipse">
      
         <path id="ellipse-path-grey"  d="M138.17,47.85C56.35,80,20,209,44.15,230.17c15.54,13.66,54.22-19.29,200.18-91.66C391.71,65.43,424.79,63.08,451.24,75.15c56.18,25.63,81.74,115.94,60,134.8C469.2,246.38,276.64-6.54,138.17,47.85Z"/>
    
         <circle r="5" stroke="var(--grey)" fill="var(--purple)">
             <animateMotion dur="10s" repeatCount="indefinite"               
                 path="M138.17,47.85C56.35,80,20,209,44.15,230.17c15.54,13.66,54.22-19.29,200.18-91.66C391.71,65.43,424.79,63.08,451.24,75.15c56.18,25.63,81.74,115.94,60,134.8C469.2,246.38,276.64-6.54,138.17,47.85Z">
             </animateMotion>
         </circle>

         <circle r="5" stroke="var(--grey)" fill="var(--purple)">
            <animateMotion begin="4.5s" dur="10s" repeatCount="indefinite"               
             path="M138.17,47.85C56.35,80,20,209,44.15,230.17c15.54,13.66,54.22-19.29,200.18-91.66C391.71,65.43,424.79,63.08,451.24,75.15c56.18,25.63,81.74,115.94,60,134.8C469.2,246.38,276.64-6.54,138.17,47.85Z">
            </animateMotion>
         </circle>
         
     <path className="fill-purple" d="M138.17,57.46a9.61,9.61,0,1,1,9.61-9.61A9.62,9.62,0,0,1,138.17,57.46Z"/>
     <path className="fill-grey" d="M138.17,38.74a9.11,9.11,0,1,1-9.11,9.11,9.12,9.12,0,0,1,9.11-9.11m0-1a10.11,10.11,0,1,0,10.11,10.11,10.11,10.11,0,0,0-10.11-10.11Z"/>
     <path className="fill-grey" d="M43.81,240.12a9.61,9.61,0,1,1,9.61-9.61A9.62,9.62,0,0,1,43.81,240.12Z"/>
     <path className="fill-grey" d="M43.81,221.4a9.11,9.11,0,1,1-9.11,9.11,9.12,9.12,0,0,1,9.11-9.11m0-1a10.11,10.11,0,1,0,10.11,10.11A10.11,10.11,0,0,0,43.81,220.4Z"/>
     <path className="fill-grey" d="M450.91,85.1a9.61,9.61,0,1,1,9.61-9.61A9.62,9.62,0,0,1,450.91,85.1Z"/>
     <path className="fill-grey" d="M450.91,66.38a9.11,9.11,0,1,1-9.11,9.11,9.12,9.12,0,0,1,9.11-9.11m0-1A10.11,10.11,0,1,0,461,75.49a10.1,10.1,0,0,0-10.11-10.11Z"/>
     <path className="fill-purple" d="M244,148.45a9.61,9.61,0,1,1,9.61-9.61A9.62,9.62,0,0,1,244,148.45Z"/>
     <path className="fill-grey" d="M244,129.73a9.11,9.11,0,1,1-9.11,9.11,9.12,9.12,0,0,1,9.11-9.11m0-1a10.11,10.11,0,1,0,10.11,10.11A10.11,10.11,0,0,0,244,128.73Z"/>
     <path className="fill-purple" d="M510.89,219.9a9.61,9.61,0,1,1,9.61-9.61A9.62,9.62,0,0,1,510.89,219.9Z"/>
     <path className="fill-grey" d="M510.89,201.18a9.11,9.11,0,1,1-9.11,9.11,9.12,9.12,0,0,1,9.11-9.11m0-1A10.11,10.11,0,1,0,521,210.29a10.11,10.11,0,0,0-10.11-10.11Z"/>
     </g>
     <g id="yellow-ellipse">
     <path id="ellipse-path-yellow" d="M349.47,207.25c-292-42.62-330-87.4-339.7-111.88C-21.87,15.55,178.49,24.68,295.55,10.45,563.43-22.12,378.36,38,193.1,319.14c-26.37,40,208.35-66.49,198.83-98.41C389.22,211.65,371.64,208.09,349.47,207.25Z"/>
 
     <circle r="5" stroke="var(--yellow)" fill="var(--purple)">
         <animateMotion begin="1s" dur="10s" repeatCount="indefinite"               
             path="M349.47,207.25c-292-42.62-330-87.4-339.7-111.88C-21.87,15.55,178.49,24.68,295.55,10.45,563.43-22.12,378.36,38,193.1,319.14c-26.37,40,208.35-66.49,198.83-98.41C389.22,211.65,371.64,208.09,349.47,207.25Z">
         </animateMotion>
     </circle>
     <circle r="5" stroke="var(--yellow)" fill="var(--purple)">
         
         <animateMotion begin="4.5s" dur="10s" repeatCount="indefinite"               
         path="M349.47,207.25c-292-42.62-330-87.4-339.7-111.88C-21.87,15.55,178.49,24.68,295.55,10.45,563.43-22.12,378.36,38,193.1,319.14c-26.37,40,208.35-66.49,198.83-98.41C389.22,211.65,371.64,208.09,349.47,207.25Z">
     </animateMotion>
     </circle>
     <path className="cls-5" d="M10.11,105.32A9.62,9.62,0,0,1,.5,95.71,8.73,8.73,0,0,1,1,92.61a10,10,0,0,1,9.06-6.51,9.78,9.78,0,0,1,9.65,9.61A9.62,9.62,0,0,1,10.11,105.32Z"/>
     <path className="cls-5" d="M10.08,85.6l0,1a9.27,9.27,0,0,1,9.11,9.11A9.11,9.11,0,0,1,1,95.71v-.08a8.09,8.09,0,0,1,.48-2.85,9.54,9.54,0,0,1,8.59-6.18v-1m0,0A10.52,10.52,0,0,0,.54,92.44,8.91,8.91,0,0,0,0,95.71a10.11,10.11,0,0,0,20.22,0A10.26,10.26,0,0,0,10.11,85.6Z"/>
     <path className="fill-purple" d="M349.13,216.53a9.61,9.61,0,1,1,9.61-9.61A9.62,9.62,0,0,1,349.13,216.53Z"/>
     <path className="cls-5" d="M349.13,197.81a9.11,9.11,0,1,1-9.11,9.11,9.11,9.11,0,0,1,9.11-9.11m0-1a10.11,10.11,0,1,0,10.11,10.11,10.11,10.11,0,0,0-10.11-10.11Z"/>
     <path className="fill-purple" d="M196.81,332.45a9.61,9.61,0,1,1,9.61-9.6A9.62,9.62,0,0,1,196.81,332.45Z"/>
     <path className="cls-5" d="M196.81,313.74a9.11,9.11,0,1,1-9.11,9.11,9.12,9.12,0,0,1,9.11-9.11m0-1a10.11,10.11,0,1,0,10.11,10.11,10.1,10.1,0,0,0-10.11-10.11Z"/>
     <path className="cls-5" d="M295.21,19.72a9.61,9.61,0,1,1,9.61-9.61A9.62,9.62,0,0,1,295.21,19.72Z"/>
     <path className="cls-5" d="M295.21,1a9.11,9.11,0,1,1-9.11,9.11A9.12,9.12,0,0,1,295.21,1m0-1a10.11,10.11,0,1,0,10.11,10.11A10.11,10.11,0,0,0,295.21,0Z"/>
     </g>
    
     </g>
     </g>
     </svg>
 </div>
)

export default FifthSection