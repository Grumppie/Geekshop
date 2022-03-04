import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNeuter, faStar, faStarHalfAlt, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import fontawesome from "@fortawesome/fontawesome"
import propTypes from 'prop-types'

fontawesome.library.add(faStar, faStarHalfAlt, faStarHalfStroke,)

const Rating = ({ value, text, color }) => {
    return (
        <div className="rating">

            {value >= 1 ? <FontAwesomeIcon style={{ color }} icon={faStar} /> : value >= 0.5 ? <FontAwesomeIcon style={{ color }} icon={faStarHalfAlt} /> : ''}
            {value >= 2 ? <FontAwesomeIcon style={{ color }} icon={faStar} /> : value >= 1.5 ? <FontAwesomeIcon style={{ color }} icon={faStarHalfAlt} /> : ''}
            {value >= 3 ? <FontAwesomeIcon style={{ color }} icon={faStar} /> : value >= 2.5 ? <FontAwesomeIcon style={{ color }} icon={faStarHalfAlt} /> : ''}
            {value >= 4 ? <FontAwesomeIcon style={{ color }} icon={faStar} /> : value >= 3.5 ? <FontAwesomeIcon style={{ color }} icon={faStarHalfAlt} /> : ''}
            {value >= 5 ? <FontAwesomeIcon style={{ color }} icon={faStar} /> : value >= 4.5 ? <FontAwesomeIcon style={{ color }} icon={faStarHalfAlt} /> : ''}
            <br />
            <span className='ms-1'>{value} stars </span>
            <span className=''>from {text ? text : ''}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}

// Rating.propTypes = {
//     value: propTypes.number.isRequired,
//     text: propTypes.string.isRequired,
//     color: propTypes.string
// }

export default Rating