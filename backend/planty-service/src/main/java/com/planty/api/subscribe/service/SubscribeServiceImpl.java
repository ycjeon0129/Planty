package com.planty.api.subscribe.service;

import com.planty.api.subscribe.repository.SubscribeRepository;
import com.planty.api.subscribe.response.FindSubscribeResponse;
import java.util.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class SubscribeServiceImpl implements SubscribeService {
    private final SubscribeRepository subscribeRepository;

    @Override
    @Transactional(readOnly = true)
    public List<FindSubscribeResponse> findAllSubscribe(Long userId) {
        return subscribeRepository.findAllBySid(userId);
    }
}
