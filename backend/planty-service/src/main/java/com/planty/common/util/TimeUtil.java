package com.planty.common.util;

import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.message.SimpleMessage;

import java.sql.Time;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.time.Duration;
import java.time.LocalTime;

@Slf4j
public class TimeUtil {

    public static String findDateOnly(String timestamp) {
        return timestamp.substring(0, 10);
    }

    public static String findTimeDiff(String start, String end) throws ParseException {

        StringBuilder sb = new StringBuilder();

        Date format1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS").parse(start);
        Date format2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS").parse(end);

        long diff = format2.getTime() - format1.getTime();

        long diffSec = (diff / 1000) % 60; //초 차이
        long diffMin = (diff / 60000); //분 차이

        if (diffMin < 10) {
            sb.append(0);
        }
        sb.append(diffMin).append(":");
        if (diffSec < 10) {
            sb.append(0);
        }
        sb.append(diffSec);

        return sb.toString();
    }

    public static String findCurrentTimestamp() {
        return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
                .format(new Timestamp(System.currentTimeMillis()))
                .toString();
    }

    public static String findEndDate(String startDate, int period) throws ParseException {
        String endDate = null;

        Date start = new SimpleDateFormat("yyyy-MM-dd").parse(startDate);

        ///
        Calendar cal = Calendar.getInstance();

        cal.setTime(start);

        cal.add(Calendar.WEEK_OF_MONTH, period);
        return new SimpleDateFormat("yyyy-MM-dd")
                .format(cal.getTime())
                .toString();
    }

    public static int findMinutesDiff(String ago) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalTime now = LocalTime.now();
        LocalTime req = LocalTime.parse(ago, formatter);

        Duration duration = Duration.between(req, now);

        int diff = (int) duration.toMinutes();

        return diff;
    }

    public static boolean isFuture(String now, String date, Integer time) throws ParseException {
        StringBuilder bookingDate = new StringBuilder(date).append(" ");
        String baseTime = "10:00";
        Date bookingTime = new SimpleDateFormat("HH:mm").parse(baseTime);
        Calendar cal = Calendar.getInstance();
        cal.setTime(bookingTime);
        cal.add(Calendar.MINUTE, time * 30);
        bookingDate.append(new SimpleDateFormat("HH:mm:ss").format(cal.getTime()).toString());
        return bookingDate.toString().compareTo(now) > 0;
    }
}
