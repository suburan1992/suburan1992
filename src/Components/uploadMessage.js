import React from 'react'
import {Alert} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'

const uploadMessage = ({msg}) => {
    return (<div class="alert alert-info alert-dismissiable fade show" role="alert">
                {msg}
                <button type="button" className="close" data-dismiss="alert" aria-label="close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>)
    
}

// uploadMessage.defaultProps = {
//     msg: propTypes.string.isRequired
// }

export default uploadMessage