import { useState } from "react";
import bookingService from "../../setup/services/booking.service";

const FormBooking = ({id, fetchPost, shop}) => {

    const [booking, setBooking] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBooking({
            ...booking,
            [name]: value
        })
    }

    const handleBooking = async (e) => {
        console.log(shop);
        booking.post = id
        booking.shop = shop
        try {
            const response = await bookingService.createBooking(booking);
            console.log(response);
            fetchPost();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={(e) => handleBooking(e)}>
            <input type="text" name="telephoneNumber" placeholder="phone number" onChange={(e) => handleChange(e)}/>
            <button type="submit">Reserver</button>
        </form>
    );
}
 
export default FormBooking;