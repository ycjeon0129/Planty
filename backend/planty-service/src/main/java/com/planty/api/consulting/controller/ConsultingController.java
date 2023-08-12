package com.planty.api.consulting.controller;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.consulting.service.ConsultingService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;

@RestController
@Slf4j
@RequestMapping("/api/consultings")
@RequiredArgsConstructor
@Api
public class ConsultingController {
    private final ConsultingService consultingServiceImpl;
    @GetMapping
    public ResponseEntity<?> getUserConsultingList() {

        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<UserConsultingResponse> consultingList = consultingServiceImpl.getUserConsultingUid();

        if (!consultingList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(consultingList);
//            return ResponseEntity.ok().body(consultingList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();
//        return ResponseEntity.noContent().build();

    }

    @GetMapping("/{sid}")
    public ResponseEntity<?> getUserConsultingDetailList(@PathVariable("sid") Long sid) {

        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<UserConsultingResponse> consultingDetailList = consultingServiceImpl.getUserConsultingDetail(sid);

        if (!consultingDetailList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(consultingDetailList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();

    }
}
