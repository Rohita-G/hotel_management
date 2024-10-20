import React, { useState } from "react";
import DatePicker from "react-datepicker";

function Bookingform(props) {
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(new Date());
    return (
        <div className="booking-form-inner">
            <form action="#">
                <div className="row align-items-end">
                    <div className="col-lg-3 col-md-6">
                        <div className="inputs-filed mt-30">
                            <label htmlFor="arrival-date">Arrival Date</label>
                            <div className="icon"><i className="fal fa-calendar-alt" /></div>
                            <DatePicker selected={arrivalDate} onChange={date => setArrivalDate(date)} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="inputs-filed mt-30">
                            <label htmlFor="departure-date">Departure Date</label>
                            <div className="icon"><i className="fal fa-calendar-alt" /></div>
                            <DatePicker selected={departureDate} onChange={date => setDepartureDate(date)} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="inputs-filed mt-30">
                            <label htmlFor="guests">Guests</label>
                            <div className="nice-select">
                                <select name="guests" id="guests">
                                    <option>Select From Here</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={4}>4</option>
                                    <option value={8}>8</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="inputs-filed mt-30">
                            <button type="submit">check availability</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Bookingform;