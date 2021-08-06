import * as React from "react"
import Section from './index'
const FirstSection = () => {
    return (
    <Section id='first'>
        <div className="main-title-container">
            <div className='title-letters left'>IT</div>
            <div className='title-letters right'>IO</div>
            <div className="main-title-background">
                <div className='blobone-container'>
                    <svg className='blobone' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 889.98 622.58"><defs><style></style></defs><path className="black-stroke-svg" d="M144,167.55c-42.43,45-180.36,188.61-135,305,58.83,151,323,150.28,432,150,98.57-.26,377.79.43,437-141C945.16,321.22,718.72,4.6,466.54.05,304.82-2.87,185.58,123.52,144,167.55Z"/></svg>
                </div>
                <div className='blobtwo-container'>
                    <svg className='blobtwo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766.71 499.7">
                        
                        <path className="blob-two-fill" d="M505.07,1.09c-35.73,5.93-56.4,34.47-73,54C279.64,234.37-5,198,.07,272.09c5.52,80.08,172,127.29,319,169,165.29,46.88,350.49,99.41,422,10,64.15-80.21-10.09-231.38-28-268C674.47,104.16,586.76-12.49,505.07,1.09Z"/></svg>
                </div>
                </div>
        </div>
      
    </Section>
    )
}

export default FirstSection