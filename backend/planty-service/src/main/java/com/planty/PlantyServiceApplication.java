package com.planty;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.TimeZone;
//import org.springframework.cloud.openfeign.EnableFeignClients;

//@EnableFeignClients
@SpringBootApplication
public class PlantyServiceApplication {

	@PostConstruct
	void started() {
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
	}

//	@Bean
//	public BCryptPasswordEncoder encoder(){
//		return new BCryptPasswordEncoder();
//	}
	public static void main(String[] args) {
		SpringApplication.run(PlantyServiceApplication.class, args);
	}

}
