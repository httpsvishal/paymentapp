import React from "react";
import image from "../images/safari.png";

const BookingSummary = () =>{
    return(
        <div className="book box h-max rounded-xl border border-black">
                <h2 className="text-2xl m-4">Booking Summary</h2>
                <hr />
                <div className="flex m-3 gap-2 text-sm">
                    <div>
                    <img src={image} alt="Tiger Safari" style={{height:'100px'}}/>
                    </div>
                    <div >
                        <h3 className="font-semibold">Jungle Safari</h3>
                        <ul className="ms-5">
                            <li>Fri, Aug 2</li>
                            <li>07.00</li>
                            <li>1x Participant(s)</li>
                        </ul>
                    </div>
                </div>
                <div className="m-3">
                    <p>
                        This booking is <span className="font-semibold">non-refundable</span>
                    </p>
                </div>
            </div>
    )
}
export default BookingSummary;