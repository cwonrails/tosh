import React from 'react'

export default ({ children, ...otherProps }) => (
  <textarea
    className='br bb bw2 b--black pa1'
    style={{borderLeftWidth: '1px', borderTopWidth: '1px'}}
    {...otherProps}
    children={children}
  />
)
