
// import  '../../style/crazy-jack/index.scss'
import NavBar from './Navbar'
import PropTypes from 'prop-types'
import * as React from "react"
const CrazyJackLayout = ({children}) => {
    return (
        <div>
        <NavBar/>
        <div className='centered-layout'>
            {children}
        </div>
        </div>
    )
}


CrazyJackLayout.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ])
  }

  export default CrazyJackLayout