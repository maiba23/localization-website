import * as React from "react"
import {getRandomColor} from '../../../../style/crazy-jack/colors'
import useStore from "../store";
import areColliding from './areColliding'
import PropTypes from 'prop-types'
import anime from 'animejs'
const Cube = ({texts, position}) => {
    const allSections = useStore((store) => store.allSections);
    const refCube1 = React.useRef()

    const [text, setText] = React.useState('')
    const handleScroll = () => {
        allSections.forEach((section, i)=>{
            if(!section.current)
                return
            const text = texts[i] 
            const collide1 = areColliding(section.current, refCube1.current)
            if (collide1)
                setText(text)
        })
    }
   
    React.useEffect(()=> {
        const animate = () =>{
            window.addEventListener('scroll', handleScroll)
        }
        animate()
    }, [allSections])

    React.useEffect(()=>{
        var lastScrollTop = 0
        window.addEventListener('scroll',()=>{
            let percentageOffset = getPercentageOffset()
            var scrollingTop = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            const scrollingUp = scrollingTop > lastScrollTop
            lastScrollTop = scrollingTop <= 0 ? 0 : scrollingTop
                var rollAnimation = anime({
                    targets: refCube1.current,
                    rotateX: scrollingUp? -20:340,
                    rotateY: -15,
                    delay: function(el, i) { return i * 100; },
                    elasticity: 200,
                    easing: 'easeInOutSine',
                    autoplay: false
                });
                // return animation
            // }()
            if(percentageOffset < 15 || percentageOffset > 85)
                percentageOffset = 0
            rollAnimation.seek(rollAnimation.duration * (percentageOffset / 100));
        })
    }, [])

    return  (
        <div ref={refCube1} id={position === 'top'?'from': 'to'} className='cube'>
        
      
        <Side position='front'>{text}</Side>    
        <Side position='back'/>    
        <Side position='right'/>    
        <Side position='left'/>    
        <Side position='top'/>    
        <Side position='bottom'/>
    </div>
    )
}



const getPercentageOffset = () => {
    const currentYPos = window.pageYOffset
    const relativeOffset = currentYPos > window.innerHeight? currentYPos - window.innerHeight : currentYPos
    return (relativeOffset ) / window.innerHeight * 100
}

const Side = ({position, children}) => {
    const [backgroundColor, setBackgroundColor] = React.useState()
    React.useEffect(()=>{
        if(position === 'front')
            setBackgroundColor(getRandomColor())

    },[])
    const shuffleRotations = (o) => {
        const oc = JSON.parse(JSON.stringify(o))

        const keys = Object.keys(oc)
        keys.forEach(key=>{
            const val = oc[key]
            const valKeys = Object.keys(val)
            valKeys.forEach(valKey=>{
                let increasor = Math.random() * 1800 - 150
                oc[key][valKey] =   increasor
            })
        })
        return oc
    }
    const ref = React.useRef(null)
    const shufflePosCopy = shuffleRotations({...cubeBaseSideTranslate})
    
    const getCustom = () => {
        if(position === 'front') {
            return {
                background:getRandomColor(),
                color: 'white'
            }
        }
        return {}
    }
    React.useEffect(()=>{
        anime({
            targets: ref.current,
            // translateX: 250,
            // rotateX: '1turn',
            ...shufflePosCopy[position],
            ...getCustom(),
            // backgroundColor: '#FFF',
            duration: 2200,
            easing: 'easeInOutQuad',
            // easing: 'linear',
            complete: function() {
    
                window.addEventListener('scroll',function recover(){
                    anime({
                        targets: ref.current,
                        // translateX: 250,
                        // rotateX: '1turn',
    
                        ...cubeBaseSideTranslate[position],
    
                        // backgroundColor: '#FFF',
                        duration: 500
                    });
                    window.removeEventListener('scroll',recover)
                })
                
            }
        });
    }, [])

    return (
        <div className={`side ${position}`} ref={ref} style={{backgroundColor}}>
            {children}</div>
    )
}

Cube.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string),
    position: PropTypes.string.isRequired
}
Side.propTypes = {
    position: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ])
  }

  
  function deepFreeze (o) {
    Object.freeze(o);
    if (o === undefined) {
      return o;
    }
  
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      && !Object.isFrozen(o[prop])) {
        deepFreeze(o[prop]);
      }
    });
  
    return o;
  }


const cubeBaseSideTranslate = deepFreeze({
    front: {
        translateZ: 55,
        rotateX:0
    },
    
    back: {
        translateZ: -55, 
        rotateY: 180
    },
    
    top: {
        translateY: -55, 
        rotateX: 90
    },
    
    bottom: {
        translateY: 55, 
        rotateX: -90
    },
        
    
    left: {
        translateX: -55, 
        rotateY: -90
    },
    
    right: {
        translateX: 255, 
        rotateY: 90
    } 
})
export default Cube