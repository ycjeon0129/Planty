package com.planty.db.entity;

public interface ViewUserConsultingMapping {
    Integer getCid(); // 컨설팅 예약 식별키
    Integer getTime(); // 시간 식별기
    String getDate();  // 예약 날짜
    Boolean getCancel(); // 취소여부. 취소(1), 미취소(0)

    Boolean getActive(); // 실행여부. 실행(1), 미실행(0)
    String getName(); // 구독 상품명

    String getRecommendedStartDate(); // 권장 상담 시작일

    String getRecommendedEndDate(); // 권장 상담 종료일

    String getContent(); // 상담 내용

    String getStartTime(); // 실제 시작 시간

    String getEndTime(); // 실제 종료 시간
}
