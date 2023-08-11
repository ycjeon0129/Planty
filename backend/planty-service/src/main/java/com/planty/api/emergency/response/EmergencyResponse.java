package com.planty.api.emergency.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class EmergencyResponse {

    private Long eid;           // 응급실 식별 인덱스
    private String user;        // 사용자 닉네임
    private String gm;          // 그린메이트
    private String plantName;   // 식물 이름
    private Integer type;       // 응급실 타입 (0: 채팅, 1: 화상)
    private String content;     // 상담 내용
    private String date;        // 상담 진행 날짜
    private String startTime;   // 실제 시작 시간
    private String endTime;     // 실제 종료 시간
    private String timeTaken;   // 실제 상담 진행 시간

}
