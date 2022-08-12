import React, {useEffect, useState} from "react";
import "./MyEvent.css"
import MyEvent from "./MyEvent.js"
import axios from "axios";

// import {BsCalendar} from "react-icons/bs";

const MyEvents = () => {
    const [eventData, setEventData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/fakeEvents").
        then((result) => setEventData(result.data)).
        catch((error) => console.log(error))
    }, [])

    return (
        <div className="my-event-container">
            <div className="my-events-header">
                <div className="my-events-header-filter">
                    <div>
                        <p>Filter by date</p>
                        {/*<div className="icon-cover">*/}
                        {/*    /!*<BsCalendar/>*!/*/}
                        {/*</div>*/}
                        <input type="date" id="filter-date" />
                    </div>

                    <div>
                        <p>Search Events</p>

                        <input type="search" id ="filter-search"/>

                    </div>

                </div>
                <button>
                    Create Event
                </button>
            </div>
            <div className="my-event-card">
                {eventData.length > 0
               ? eventData.map((event) => <MyEvent event={event} />)
                : <h5 style={{textAlign: 'center'}} >No Event</h5>  }

            </div>
        </div>
    )

}
export default MyEvents