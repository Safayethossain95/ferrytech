import React from 'react'

const SubHeading = (props) => {
  return (
    <div className={props.version=="mobile"?"headingofsubsectioncomp mobile":"headingofsubsectioncomp desktop"}>
            <h3>{props.subheading}</h3>
    </div>
  )
}

export default SubHeading