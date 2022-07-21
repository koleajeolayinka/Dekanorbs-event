import React from "react";
const Step1 = ({ children, step}) => {
    return(
        <div className="registration-step-container">
            <div>
                {`Step `}
            </div>
            {children}

        </div>
    )
}
export default Step1