use planty;
INSERT INTO time_table
VALUES (1, "10:00"), (2, "10:30"), (3, "11:00"), (4, "11:30"), (5, "12:00"), (6, "12:30"), (7, "13:00"),
(8, "13:30"), (9, "14:00"), (10, "14:30"), (11, "15:00"), (12, "15:30"), (13, "16:00"), (14, "16:30"),
(15, "17:00"), (16, "17:30"), (17, "18:00"), (18, "18:30"), (19, "19:00"), (20, "19:30");

INSERT INTO gm_info(id, pw, nickname, introduce, activate)
VALUES('greenmate1', 'greenmate1', '식물왕 전식물', '안녕하세요. 당신의 식물이 잘! 자랄 수 있도록 도와드릴게요.', 0),
('greenmate2', 'greenmate2', '김드루이드', '드루이드와 함께 식물을 건강하게', 1),
('greenmate3', 'greenmate3', '식물마스터', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate4', 'greenmate4', '식물선인', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate5', 'greenmate5', '초록손', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate6', 'greenmate6', '식물헌터', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate7', 'greenmate7', '녹색전문가', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate8', 'greenmate8', '식물바이블', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate9', 'greenmate9', '식물매직', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate10', 'greenmate10', '식물위즈', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate11', 'greenmate11', '식물마법사', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate12', 'greenmate12', '식물마음', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate13', 'greenmate13', '식물탐험가', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate14', 'greenmate14', '녹색의달인', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate15', 'greenmate15', '식물의달', '안녕하세요 플랜티 그린메이트입니다.', 1),
('greenmate16', 'greenmate16', '식물박사', '안녕하세요 플랜티 그린메이트입니다.', 1);

INSERT INTO user_info(user_id, user_name, email, `password`, shipping_address)
VALUES ('gardener1','초보 가드너1', 'sunflower1@gmail.com', "1q2w3e4r!!", "광주 광산구 하남산단6번로 107"),('develop1', '초보 개발자1', 'gardener1@naver.com', "1q2w3e4r!!","서울 강남구 테헤란로 212");

INSERT INTO user_info(user_id, user_name, email, `password`)
VALUES ('gardener2','초보 가드너2', 'sunflower2@gmail.com', "1q2w3e4r!!"), ('develop2', '초보 개발자2', 'gardener2@naver.com', "1q2w3e4r!!"),
('gardener3','초보 가드너3', 'sunflower3@gmail.com', "1q2w3e4r!!"), ('develop3', '초보 개발자3', 'gardener3@naver.com', "1q2w3e4r!!"),
('gardener4','초보 가드너4', 'sunflower4@gmail.com', "1q2w3e4r!!"), ('develop4', '초보 개발자4', 'gardener4@naver.com', "1q2w3e4r!!"),
('gardener5','초보 가드너5', 'sunflower5@gmail.com', "1q2w3e4r!!"), ('develop5', '초보 개발자5', 'gardener5@naver.com', "1q2w3e4r!!");

INSERT INTO plant_info(name, tonic_period, size, place, eatable)
VALUES ('바질', 4, 0, 1, 1), ('파슬리', 4, 0, 1, 1), ('토마토', 3, 1, 1, 1), ('래몬', 12, 1, 2, 1), ('라즈베리', 12, 1, 2, 1), 
('스킨답서스', 24, 3, 1, 0), ('네펜데스', 8, 2, 2, 0), ('멘드라고라', 2, 2, 1, 0);

INSERT INTO subscribe_product(PLANT_INFO_idx, GM_INFO_gid, name, period, consulting_cnt, description, level, price, thumbnail)
VALUES(1, 1 , '식린이를 위한 바질 클래스', 12, 4, '식린이라도 걱정하지 마세요! 물만 줘도 잘 자라는 바질과 함께라면 가드너로서 자신감 뿜뿜!!', 1, 49000, "https://github.com/ycjeon0129/SSAFY_01_02/assets/79627716/e15f78ab-0d34-4cbb-9bb6-319cc0fe3f5a"),
(2, 2 , '요리 좋아하는 당신을 위한 파슬리 키우기', 12, 4, '요리를 좋아하신다구요? 찬장에 향신료 3종 이상이라구요? 그렇다면 당장 구독하세요!', 2, 78000, "https://github.com/ycjeon0129/SSAFY_01_02/assets/79627716/05053be8-8ae7-4f3e-8d8c-1871de343d4d"),
(3, 3 , '나는야 케찹될꺼야 나는야 춤을 출거야', 24, 8, '멋쟁이 토마토', 3, 99000, "https://github.com/ycjeon0129/SSAFY_01_02/assets/79627716/ccb35cee-266e-4baa-92cf-e9a461fc52c1"),
(4, 4 , '상큼한 시트러스의 황제, 레몬', 24, 8, '새콤달콤 매력적이야', 4, 109000, "https://github.com/ycjeon0129/SSAFY_01_02/assets/79627716/6f4861af-ea54-4acc-9ff4-e613da6d0cf4"),
(5, 1 , '키우기 어려운만큼 보람이 큰 라즈베리 클래스', 52, 12, '우리에게 산딸기로도 알려진 라즈베리. 건강 식품의 대표주자입니다. 난이도가 높은 만큼 보람도 업! 라즈베리 클래스에요.', 5, 129000, "https://github.com/ycjeon0129/SSAFY_01_02/assets/79627716/277b1da8-6021-432b-9dda-292c7a2eff7e"),
(6, 2 , '전세계에서 가장 사랑받는 원예식물, 스킨답서스!', 24, 6, '초보 가드너도 손쉽게 키울 수 있는 식물을 찾으신다구요? 여기에요 에기~', 1, 59000, "https://github.com/ycjeon0129/SSAFY_01_02/assets/79627716/916071e1-2571-4d2a-92f3-42dd5835c5ce"),
(7, 1 , '집안 벌레로 고민한다면 넌 네펜데스가 딱이야', 24, 8, '하지만 사실 식충식물은 벌레로부터 얻는 영양분 비율이 낮다는 사실! 알고 계셨나요?', 3, 490000, "https://github.com/ycjeon0129/SSAFY_01_02/assets/79627716/cd53dcf6-2687-4d11-b722-9cd190742e41"),
(8, 3 , '상급 마법약 필수 제료, 맨드라고라!', 520, 24, '아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아', 5, 2990000, "https://github.com/ycjeon0129/SSAFY_01_02/assets/79627716/c3b6f52f-fe44-4bd4-83a7-aed0d3a5bb79");

-- 더미 데이터 진행 

INSERT INTO user_subscribe(arduino_id, USER_INFO_uid, SUBSCRIBE_PRODUCT_spid, GM_INFO_gid, consulting_remain_cnt, start_date)
VALUES(101,1,1,1,3,'2023-07-25'), (102,2,2,2,4, '2023-07-27'), (103,2,1,1,3, '2023-07-29'), (104,1,2,2,8, '2023-08-07'), (105,1,3,1,8, '2023-08-08');

INSERT INTO consulting_booking(USER_SUBSCRIBE_sid, USER_INFO_uid, GM_INFO_gid, TIME_TABLE_idx, date, cancel, active)
VALUES(1,1,1,2,"2023-08-01", 0, 1), (1,1,1,7,"2023-08-08", 0, 0),
(2,2,2,2,"2023-08-01", 0, 1), (2,2,2,3,"2023-08-03", 1, 0), (2,2,2,4,"2023-08-11", 0, 0),
(3,2,1,1,"2023-08-02", 0, 1), (3,2,1,1,"2023-08-05", 0, 0),
(5,1,1,1,"2023-08-03", 0, 1),(3,2,1,1,"2023-09-02", 1, 0), (3,2,1,1,"2023-09-02", 0, 0), (5,1,1,1,"2023-09-03", 0, 0);

INSERT INTO consulting_log(cid, RECOMMENDED_START_DATE, RECOMMENDED_END_DATE, times, content, start_time, end_time)
VALUES(1,"2023-08-11", "2023-08-18", 1, '물 plz', '2023-08-01 10:32:00', '2023-08-01 10:58:00'),
(3,"2023-08-11", "2023-08-18", 1,'햇빛 plz','2023-08-01 10:36:00', '2023-08-01 10:54:00'),
(6,"2023-08-12", "2023-08-19", 1,'물 너무 많아요', '2023-08-02 10:04:00', '2023-08-02 10:29:00'),
(8,"2023-08-12", "2023-08-19", 1,'벌레를 더 먹여주세요', '2023-08-03 10:04:00', '2023-08-03 10:29:00');

INSERT INTO emergency_log(USER_INFO_uid, GM_INFO_gid, name, type, content, start_time, end_time)
VALUES(1, 1, "다육이", 0, '놔두면 잘 큽니다', '2023-08-01 10:32:00', '2023-08-01 10:58:00'),
      (2, 1, "동충하초", 1, '여름되면 잘 자랍니다', '2023-08-03 10:04:00', '2023-08-03 10:29:00'),
      (1, 1, "소나무", 1, '햇빛 plz','2023-08-03 10:36:00', '2023-08-03 10:54:00');
  
INSERT INTO plant_data(arduino_id, date, time, temp, humidity, soil)
VALUES (103, '2023-08-07','11:00:00', 28.0,42.0,21.0),
(103, '2023-08-07','13:00:00', 29.0,43.0,22.0),
(103, '2023-08-07','15:00:00', 30.0,44.0,23.0),
(103, '2023-08-07','17:00:00', 31.0,45.0,24.0),
(102, '2023-08-05','20:00:00', 28.0,32.0,11.0),
(102, '2023-08-05','22:00:00', 29.0,33.0,12.0),
(102, '2023-08-06','00:00:00', 30.0,34.0,13.0),
(102, '2023-08-06','02:00:00', 31.0,35.0,14.0),
(101, '2023-08-02','20:00:00', 22.0,32.0,15.0),
(101, '2023-08-02','22:00:00', 23.0,33.0,2.0),
(101, '2023-08-02','00:00:00', 24.0,34.0,3.0),
(101, '2023-08-03','02:00:00', 25.0,35.0,4.0);

INSERT INTO ticket_product (name, count, price)
VALUES ("1회 이용권", 1, 9900),
       ("3회 이용권", 3, 24000),
       ("5회 이용권", 5, 36000),
       ("7회 이용권", 7, 45000);
