import React, {useEffect, useState} from "react";


const MyEvent = ({event}) => {

    return (
        <div className="event-card">
            <div className="image-container" style={{backgroundImage: 'url("https://images.pexels.com/photos/10402422/pexels-photo-10402422.jpeg?cs=srgb&dl=pexels-wendel-moretti-10402422.jpg&fm=jpg")'}}>
                {/*<img src="https://i.im.ge/2022/08/12/OMplOh.WhatsApp-Image-2022-06-28-at-1-31-14-AM.jpg" alt=""/>*/}

            </div>
            <div className="event-details">
                <p>Event Title</p>
                <h5>{event.title}</h5>
                <p>Event Description</p>
                <h5>{event.description}</h5>
            </div>
            <div className="event-action">
                <button>View Details</button>

            </div>

        </div>
    )
}

export default MyEvent