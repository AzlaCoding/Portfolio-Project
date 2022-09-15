import React from 'react'
import '../style/main.css';
import { RotateSpinner } from "react-spinners-kit";

const Loading = () => {
    return (
        <div className="spinnerContainer">
  
                <div className="spinner">
                    <RotateSpinner size={80} color="#00A3E1" />
                </div>
        </div>
    )
}

export default Loading