package com.planty.common.util;

import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

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
}
