package com.planty.db.entity;

import lombok.ToString;

public interface ConsultingBookingUserMapping {
    String getDate();  // 예약 날짜

    Boolean getCancel(); // 취소여부. 취소(1), 미취소(0)

    Boolean getActive(); // 실행여부. 실행(1), 미실행(0)
}
