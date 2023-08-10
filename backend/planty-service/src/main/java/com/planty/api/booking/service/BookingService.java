package com.planty.api.booking.service;

import com.planty.api.booking.request.UserBookingRequest;
import com.planty.api.booking.response.UserBookingResponse;

import java.util.List;

public interface BookingService {

    List<UserBookingResponse> getUserBooking();
    boolean[] getUserBookingDate(Long sid, String date);
    boolean regUserBooking (UserBookingRequest userBookingRequest);
    boolean deleteUserBooking(Long cid);
}

