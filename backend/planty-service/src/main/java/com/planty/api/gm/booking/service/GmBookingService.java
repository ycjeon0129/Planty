package com.planty.api.gm.booking.service;

import com.planty.api.booking.response.BookingResponse;

import java.util.List;
public interface GmBookingService {

    List<BookingResponse> getGmBooking();
}