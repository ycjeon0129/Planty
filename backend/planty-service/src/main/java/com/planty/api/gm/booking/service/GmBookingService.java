package com.planty.api.gm.booking.service;

import com.planty.api.booking.response.BookingResponse;
import com.planty.api.gm.booking.response.GmBookingResponse;

import java.text.ParseException;
import java.util.List;
public interface GmBookingService {

    List<GmBookingResponse> getGmBooking(Long spid) throws ParseException;
}