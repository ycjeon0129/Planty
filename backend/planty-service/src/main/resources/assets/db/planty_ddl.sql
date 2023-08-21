-- MySQL Workbench Forward Engineering

create database IF NOT EXISTS `planty` collate utf8mb4_general_ci;


SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema planty
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema planty
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `planty` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `planty` ;

-- -----------------------------------------------------
-- Table `planty`.`gm_info`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`gm_info` ;

CREATE TABLE IF NOT EXISTS `planty`.`gm_info` (
  `gid` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'GM 식별키',
  `id` VARCHAR(16) NOT NULL COMMENT 'GM 아이디',
  `pw` VARCHAR(128) NOT NULL COMMENT 'GM 비밀번호',
  `nickname` VARCHAR(16) NOT NULL COMMENT 'GM 닉네임',
  `introduce` VARCHAR(128) NULL DEFAULT NULL COMMENT 'GM 자기소개',
  `activate` TINYINT(1) NULL DEFAULT '0' COMMENT 'GM 활성화 상태. 활성화(1), 비활성화(0)',
  PRIMARY KEY (`gid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`time_table`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`time_table` ;

CREATE TABLE IF NOT EXISTS `planty`.`time_table` (
  `idx` INT UNSIGNED NOT NULL COMMENT '시간 식별기',
  `time` VARCHAR(20) NOT NULL COMMENT '10~20시 사이 매 30분',
  PRIMARY KEY (`idx`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`user_info`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`user_info` ;

CREATE TABLE IF NOT EXISTS `planty`.`user_info` (
  `uid` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '사용자 식별키',
  `user_id` VARCHAR(32) NOT NULL COMMENT '사용자 id',
  `user_name` VARCHAR(32) NOT NULL COMMENT '사용자 이름',
  `password` VARCHAR(128) NOT NULL COMMENT '비밀번호',
  `email` VARCHAR(64) NOT NULL COMMENT '사용자 이메일',
  `token` VARCHAR(1024) NULL DEFAULT NULL COMMENT '사용자 인증 토큰',
  `photo` VARCHAR(256) NULL DEFAULT NULL COMMENT '사용자 프로필 사진',
  `join_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '사용자 가입일시',
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '사용자 정보 수정일시',
  `emergency_count` INT UNSIGNED NOT NULL DEFAULT '1' COMMENT '사용자 응급실 이용권 개수. 최초 가입 시 1개 제공',
  `shipping_address` VARCHAR(256) NULL DEFAULT NULL COMMENT '사용자 배송지 정보',
  `user_type` VARCHAR(32) NULL DEFAULT 'NORMAL' COMMENT '사용자 소셜 로그인 타입',
  `role` VARCHAR(32) NULL DEFAULT 'ROLE_USER' COMMENT '사용자 권한',
  PRIMARY KEY (`uid`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`plant_info`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`plant_info` ;

CREATE TABLE IF NOT EXISTS `planty`.`plant_info` (
  `idx` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '식물 식별키',
  `name` VARCHAR(128) NOT NULL COMMENT '식물 이름',
  `tonic_period` INT NULL DEFAULT NULL COMMENT '식물 영양제 제공 주기 (주)',
  `size` INT NULL DEFAULT NULL COMMENT '크기. 소(0), 중(1), 대(2)',
  `place` INT NULL DEFAULT NULL COMMENT '생육 장소. 무관(0), 실내(1), 실외(2)',
  `eatable` TINYINT(1) NULL DEFAULT '0' COMMENT '식용 여부. 식용(1), 비식용(0)',
  PRIMARY KEY (`idx`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`subscribe_product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`subscribe_product` ;

CREATE TABLE IF NOT EXISTS `planty`.`subscribe_product` (
  `spid` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '구독상품 식별키',
  `PLANT_INFO_idx` INT UNSIGNED NOT NULL COMMENT '식물 식별키(외래키)',
  `GM_INFO_gid` INT UNSIGNED NOT NULL COMMENT 'GM 식별키(외래키)',
  `name` VARCHAR(128) NOT NULL COMMENT '구독 상품명',
  `period` INT NOT NULL COMMENT '구독 기간 (주)',
  `consulting_cnt` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '컨설팅 횟수',
  `thumbnail` VARCHAR(1024) NULL DEFAULT NULL COMMENT '썸네일 이미지 : CDN 링크',
  `description` VARCHAR(256) NULL DEFAULT NULL COMMENT '상세설명 : CDN 링크',
  `level` INT UNSIGNED NOT NULL COMMENT '구독 상품 난이도, level : 1~5',
  `price` INT NOT NULL COMMENT '구독 상품 가격',
  PRIMARY KEY (`spid`),
  INDEX `SUBSCRIBE_PRODUCT_TO_PLANT_INFO_FK_idx` (`PLANT_INFO_idx` ASC) VISIBLE,
  INDEX `SUBSCRIBE_PRODUCT_TO_GM_INFO_FK_gid` (`GM_INFO_gid` ASC) VISIBLE,
  CONSTRAINT `SUBSCRIBE_PRODUCT_TO_PLANT_INFO_FK_idx`
    FOREIGN KEY (`PLANT_INFO_idx`)
    REFERENCES `planty`.`plant_info` (`idx`),
  CONSTRAINT `SUBSCRIBE_PRODUCT_TO_GM_INFO_FK_gid`
    FOREIGN KEY (`GM_INFO_gid`)
    REFERENCES `planty`.`gm_info` (`gid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`user_subscribe`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`user_subscribe` ;

CREATE TABLE IF NOT EXISTS `planty`.`user_subscribe` (
  `sid` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '사용자 구독정보 식별키',
  `arduino_id` INT UNSIGNED DEFAULT NULL COMMENT '아두이노 id - UNIQUE',
  `USER_INFO_uid` INT UNSIGNED NOT NULL COMMENT '사용자 식별키(외래키)',
  `SUBSCRIBE_PRODUCT_spid` INT UNSIGNED NOT NULL COMMENT '구독상품 식별키(외래키)',
  `GM_INFO_gid` INT UNSIGNED NOT NULL COMMENT 'GM 식별키(외래키)',
  `consulting_remain_cnt` INT NOT NULL DEFAULT '0' COMMENT '남은 컨설팅 횟수',
  `start_date` DATE NOT NULL DEFAULT (CURRENT_DATE) COMMENT '구독 시작일',
  `end_date` DATE DEFAULT NULL COMMENT '구독 종료일',
  PRIMARY KEY (`sid`),
  UNIQUE INDEX `arduino_id` (`arduino_id` ASC) VISIBLE,
  INDEX `USER_SUBSCRIBE_TO_USER_INFO_FK_uid` (`USER_INFO_uid` ASC) VISIBLE,
  INDEX `USER_SUBSCRIBE_TO_SUBSCRIBE_PRODUCT_FK_spid` (`SUBSCRIBE_PRODUCT_spid` ASC) VISIBLE,
  INDEX `USER_SUBSCRIBE_TO_GM_INFO_FK_gid` (`GM_INFO_gid` ASC) VISIBLE,
  CONSTRAINT `USER_SUBSCRIBE_TO_GM_INFO_FK_gid`
    FOREIGN KEY (`GM_INFO_gid`)
    REFERENCES `planty`.`gm_info` (`gid`),
  CONSTRAINT `USER_SUBSCRIBE_TO_SUBSCRIBE_PRODUCT_FK_spid`
    FOREIGN KEY (`SUBSCRIBE_PRODUCT_spid`)
    REFERENCES `planty`.`subscribe_product` (`spid`),
  CONSTRAINT `USER_SUBSCRIBE_TO_USER_INFO_FK_uid`
    FOREIGN KEY (`USER_INFO_uid`)
    REFERENCES `planty`.`user_info` (`uid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`consulting_booking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`consulting_booking` ;

CREATE TABLE IF NOT EXISTS `planty`.`consulting_booking` (
  `cid` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '컨설팅 예약 식별키',
  `USER_SUBSCRIBE_sid` INT UNSIGNED NOT NULL COMMENT '사용자 구독정보 식별키(외래키)',
  `USER_INFO_uid` INT UNSIGNED NOT NULL COMMENT '사용자 식별키(외래키)',
  `GM_INFO_gid` INT UNSIGNED NOT NULL COMMENT 'GM 식별키(외래키)',
  `TIME_TABLE_idx` INT UNSIGNED NOT NULL COMMENT '시간 식별기(외래키)',
  `date` DATE NOT NULL DEFAULT (CURRENT_DATE) COMMENT '예약 날짜',
  `cancel` TINYINT NOT NULL DEFAULT '0' COMMENT '취소여부. 취소(1), 미취소(0)',
  `active` TINYINT NOT NULL DEFAULT '0' COMMENT '실행여부. 실행(1), 미실행(0)',
  `connection` VARCHAR(512) NULL DEFAULT NULL COMMENT 'OpenVidu Session Token',
  PRIMARY KEY (`cid`),
  INDEX `CONSULTING_BOOKING_TO_USER_SUBSCRIBE_FK_sid` (`USER_SUBSCRIBE_sid` ASC) VISIBLE,
  INDEX `CONSULTING_BOOKING_TO_USER_INFO_FK_uid` (`USER_INFO_uid` ASC) VISIBLE,
  INDEX `CONSULTING_BOOKING_TO_GM_INFO_FK_gid` (`GM_INFO_gid` ASC) VISIBLE,
  INDEX `CONSULTING_BOOKING_TO_TIME_TABLE_FK_idx` (`TIME_TABLE_idx` ASC) VISIBLE,
  CONSTRAINT `CONSULTING_BOOKING_TO_GM_INFO_FK_gid`
    FOREIGN KEY (`USER_INFO_uid`)
    REFERENCES `planty`.`gm_info` (`gid`),
  CONSTRAINT `CONSULTING_BOOKING_TO_TIME_TABLE_FK_idx`
    FOREIGN KEY (`TIME_TABLE_idx`)
    REFERENCES `planty`.`time_table` (`idx`),
  CONSTRAINT `CONSULTING_BOOKING_TO_USER_INFO_FK_uid`
    FOREIGN KEY (`USER_INFO_uid`)
    REFERENCES `planty`.`user_info` (`uid`),
  CONSTRAINT `CONSULTING_BOOKING_TO_USER_SUBSCRIBE_FK_sid`
    FOREIGN KEY (`USER_SUBSCRIBE_sid`)
    REFERENCES `planty`.`user_subscribe` (`sid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`consulting_log`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`consulting_log` ;

CREATE TABLE IF NOT EXISTS `planty`.`consulting_log` (
  `idx` INT UNSIGNED AUTO_INCREMENT COMMENT '컨설팅 로그 식별 인덱스',
  `cid` INT UNSIGNED NOT NULL COMMENT '컨설팅 예약 식별기(외래키)',
  `RECOMMENDED_START_DATE` DATE NULL COMMENT '권장 상담 시작일',
  `RECOMMENDED_END_DATE` DATE NULL COMMENT '권장 상담 종료일',
  `times` INT NULL COMMENT '컨설팅 회차',
  `content` TEXT NULL DEFAULT NULL COMMENT '상담 내용',
  `start_time` TIMESTAMP NULL DEFAULT NULL COMMENT '실제 시작 시간',
  `end_time` TIMESTAMP NULL DEFAULT NULL COMMENT '실제 종료 시간',
  PRIMARY KEY (`idx`),
  INDEX `CONSULTING_LOG_TO_CONSULTING_BOOKING_FK_cid` (`cid` ASC) VISIBLE,
  CONSTRAINT `CONSULTING_LOG_TO_CONSULTING_BOOKING_FK_cid`
    FOREIGN KEY (`cid`)
    REFERENCES `planty`.`consulting_booking` (`cid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`emergency_log`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`emergency_log` ;

CREATE TABLE IF NOT EXISTS `planty`.`emergency_log` (
  `eid` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '응급실 이용 내역 식별키',
  `USER_INFO_uid` INT UNSIGNED NOT NULL COMMENT '사용자 식별키(외래키)',
  `GM_INFO_gid` INT UNSIGNED NULL COMMENT 'GM 식별키(외래키)',
  `name` VARCHAR(32) NULL DEFAULT NULL COMMENT '식물 이름',
  `type` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '상담 유형. 채팅(0), 화상(1)',
  `content` TEXT NULL DEFAULT NULL COMMENT '상담 내용',
  `request_time` TIMESTAMP NULL DEFAULT NULL COMMENT '응급실 요청 시간',
  `start_time` TIMESTAMP NULL DEFAULT NULL COMMENT '실제 시작 시간',
  `end_time` TIMESTAMP NULL DEFAULT NULL COMMENT '실제 종료 시간',
  `connection` VARCHAR(512) NULL DEFAULT NULL COMMENT 'OpenVidu Session Token',
  PRIMARY KEY (`eid`),
  INDEX `EMERGENCY_LOG_TO_USER_INFO_FK_uid` (`USER_INFO_uid` ASC) VISIBLE,
  INDEX `EMERGENCY_LOG_TO_GM_INFO_FK_gid` (`GM_INFO_gid` ASC) VISIBLE,
  CONSTRAINT `EMERGENCY_LOG_TO_GM_INFO_FK_gid`
    FOREIGN KEY (`GM_INFO_gid`)
    REFERENCES `planty`.`gm_info` (`gid`),
  CONSTRAINT `EMERGENCY_LOG_TO_USER_INFO_FK_uid`
    FOREIGN KEY (`USER_INFO_uid`)
    REFERENCES `planty`.`user_info` (`uid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`product` ;

CREATE TABLE IF NOT EXISTS `planty`.`product` (
  `idx` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '상품 식별키',
  `category` INT NOT NULL DEFAULT '0' COMMENT '상품 카테고리. 응급실(0), 구독(1)',
  `category_idx` INT NOT NULL COMMENT '상품 카테고리별 식별키 - 응급실 식별키 혹은 구독 식별키 ',
  `name` VARCHAR(128) NOT NULL COMMENT '상품 이름',
  `price` INT NOT NULL COMMENT '가격',
  PRIMARY KEY (`idx`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `planty`.`order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`order` ;

CREATE TABLE IF NOT EXISTS `planty`.`order` (
  `idx` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '결제 내역 식별키',
  `USER_INFO_uid` INT UNSIGNED NOT NULL COMMENT '사용자 식별키(외래키)',
  `PRODUCT_idx` INT UNSIGNED NOT NULL COMMENT '상품 식별키(외래키)',
  `order_name` VARCHAR(16) NULL DEFAULT NULL COMMENT '주문자 이름',
  `shipping_address` VARCHAR(256) NULL DEFAULT NULL COMMENT '배송지 정보',
  `payment_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '결제일시',
  `price` INT NULL DEFAULT NULL COMMENT '실제 결제 금액',
  PRIMARY KEY (`idx`),
  INDEX `ORDER_TO_USER_INFO_FK_uid` (`USER_INFO_uid` ASC) VISIBLE,
  INDEX `ORDER_TO_PRODUCT_FK_idx` (`PRODUCT_idx` ASC) VISIBLE,
  CONSTRAINT `ORDER_TO_PRODUCT_FK_idx`
    FOREIGN KEY (`PRODUCT_idx`)
    REFERENCES `planty`.`product` (`idx`),
  CONSTRAINT `ORDER_TO_USER_INFO_FK_uid`
    FOREIGN KEY (`USER_INFO_uid`)
    REFERENCES `planty`.`user_info` (`uid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`plant_data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`plant_data` ;

CREATE TABLE IF NOT EXISTS `planty`.`plant_data` (
    `idx` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '식물 데이터 식별키',
    `arduino_id` INT UNSIGNED NOT NULL COMMENT '사용자 구독정보 식별키(외래키)',
    `date` DATE NOT NULL DEFAULT (CURRENT_DATE) COMMENT '측정일',
    `time` TIME NOT NULL DEFAULT (CURRENT_TIME) COMMENT '측정시간',
    `temp` FLOAT NULL DEFAULT NULL COMMENT '온도',
    `humidity` FLOAT NULL DEFAULT NULL COMMENT '습도',
    `soil` FLOAT NULL DEFAULT NULL COMMENT '토양습도',
    PRIMARY KEY (`idx`),
    INDEX `PLANT_DATA_TO_USER_SUBSCRIBE_FK_arduino_id` (`arduino_id` ASC) VISIBLE,
    CONSTRAINT `PLANT_DATA_TO_USER_SUBSCRIBE_FK_arduino_id`
    FOREIGN KEY (`arduino_id`)
    REFERENCES `planty`.`user_subscribe` (`arduino_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `planty`.`ticket_product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`ticket_product` ;

CREATE TABLE IF NOT EXISTS `planty`.`ticket_product` (
  `tpid` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '이용권 묶음 식별키',
  `name` VARCHAR(32) NOT NULL COMMENT '이용권 묶음 이름',
  `count` INT NOT NULL COMMENT '이용권 묶음 개수',
  `price` INT NOT NULL COMMENT '이용권 묶음 가격',
  PRIMARY KEY (`tpid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- View `planty`.`view_user_consulting`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`view_user_consulting`;
DROP VIEW IF EXISTS `planty`.`view_user_consulting` ;
USE `planty`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`planty`@`%`
SQL SECURITY DEFINER VIEW `planty`.`view_user_consulting`
AS select `cb`.`USER_INFO_uid` AS `uid`,`us`.`sid` AS `sid`,`cb`.`cid` AS `cid`,
          `sp`.`spid` AS `spid`,`gi`.`gid` AS `gid`,`cb`.`TIME_TABLE_idx` AS `time`,`cb`.`date` AS `date`,`cb`.`cancel` AS `cancel`,
          `cb`.`active` AS `active`,`sp`.`name` AS `name`,`gi`.`nickname` AS `gm_name`,
          `cl`.`RECOMMENDED_START_DATE` AS `RECOMMENDED_START_DATE`,`cl`.`RECOMMENDED_END_DATE` AS `RECOMMENDED_END_DATE`,
          `cl`.`content` AS `content`,`cl`.`start_time` AS `start_time`,
          `cl`.`end_time` AS `end_time`
   from ((((`planty`.`consulting_booking` `cb` left join `planty`.`consulting_log` `cl` on((`cb`.`cid` = `cl`.`cid`)))
       join `planty`.`user_subscribe` `us` on((`cb`.`USER_SUBSCRIBE_sid` = `us`.`sid`)))
       join `planty`.`subscribe_product` `sp` on((`us`.`SUBSCRIBE_PRODUCT_spid` = `sp`.`spid`)))
       join `planty`.`gm_info` `gi` on((`sp`.`GM_INFO_gid` = `gi`.`gid`))) order by `cb`.`cid`;


-- -----------------------------------------------------
-- View `planty`.`view_user_subscribe`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`view_user_subscribe`;
DROP VIEW IF EXISTS `planty`.`view_user_subscribe` ;
USE `planty`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`planty`@`%`
SQL SECURITY DEFINER VIEW `planty`.`view_user_subscribe`
AS select `us`.`sid` AS `sid`,`us`.`USER_INFO_uid` AS `uid`,
          `us`.`arduino_id` AS `arduino_id`,`us`.`consulting_remain_cnt` AS `consulting_remain_cnt`,
          `us`.`start_date` AS `start_date`,`us`.`end_date` AS `end_date`,
          `sp`.`name` AS `sp_name`,`sp`.`period` AS `period`,`sp`.`thumbnail` AS `thumbnail`,
          `sp`.`consulting_cnt` AS `consulting_cnt`,`sp`.`description` AS `description`,
          `pi`.`name` AS `pi_name`,`pi`.`tonic_period` AS `tonic_period`,
          `gm`.`nickname` AS `nickname`,`cb`.`cid` AS `cid`,
          `cb`.`date` AS `cb_date`,`cb`.`TIME_TABLE_idx` AS `cb_time`,
          `cb`.`cancel` AS `cancel`,`cb`.`active` AS `active` 
          from
                   ((((`planty`.`subscribe_product` `sp` join `planty`.`gm_info` `gm` on((`gm`.`gid` = `sp`.`GM_INFO_gid`)))
                       join `planty`.`user_subscribe` `us` on((`us`.`SUBSCRIBE_PRODUCT_spid` = `sp`.`spid`)))
                       join `planty`.`plant_info` `pi` on((`pi`.`idx` = `sp`.`PLANT_INFO_idx`)))
                       left join `planty`.`consulting_booking` `cb` on(((`us`.`sid` = `cb`.`USER_SUBSCRIBE_sid`)
                       and `cb`.`cid` in (select max(`planty`.`consulting_booking`.`cid`)
                                          from `planty`.`consulting_booking` group by `planty`.`consulting_booking`.`USER_SUBSCRIBE_sid`)))) order by `us`.`sid`;
                                          
                                          
-- -----------------------------------------------------
-- View `planty`.`view_user_emergency`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planty`.`view_user_emergency`;
DROP VIEW IF EXISTS `planty`.`view_user_emergency` ;
USE `planty`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`planty`@`%`
SQL SECURITY DEFINER VIEW `planty`.`view_user_emergency`
AS select `el`.`eid` AS `eid`,
		  `el`.`type` AS `type`,
          `el`.`name` AS `name`,
          `el`.`start_time` AS `start_date`,
          `el`.`end_time` AS `end_date`,
          `el`.`content` AS `advice`,
          `gm`.`nickname` AS `greenmate`,
          `ui`.`user_name` AS `user` from
			   ((`planty`.`emergency_log` `el` join `planty`.`gm_info` `gm` on (`gm`.`gid` = `el`.`GM_INFO_gid`))
					join `planty`.`user_info` `ui` on(`ui`.`uid` = `el`.`USER_INFO_uid`));

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
