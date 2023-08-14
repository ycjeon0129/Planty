package com.planty.api.booking.service;

import com.planty.api.booking.request.UserBookingRequest;
import com.planty.api.booking.response.BookingResponse;

import java.util.List;

public interface BookingService {

    List<BookingResponse> getUserBooking();
    boolean[] getUserBookingDate(Long sid, String date);
    boolean regUserBooking (UserBookingRequest userBookingRequest);
    boolean deleteUserBooking(Long cid);
}

