// import React from 'react'
// import './Footer.css'

// export default function Footer() {
//   return (
//     <div className='footer-container'>
//        <div className='footer-parent'>
//          <img src={require('../../../assets/Home/shape-bg.png').default} alt="no image" />
//        </div>
//     </div>
//   )
// }


import React from 'react'
import './Footer.css'
import shapeBg from '../../../assets/Home/shape-bg.png'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={shapeBg} alt="footer background" />
      </div>
    </div>
  )
}
