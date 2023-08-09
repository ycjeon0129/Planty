package com.planty.api.booking.service;

import com.planty.api.booking.request.UserBookingRequest;

public interface BookingService {
    boolean regUserBooking (UserBookingRequest userBookingRequest);

    boolean deleteUserBooking(Long cid);
}

