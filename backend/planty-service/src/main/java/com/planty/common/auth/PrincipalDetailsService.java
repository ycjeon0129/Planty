package com.planty.common.auth;

import com.planty.db.entity.UserInfo;
import com.planty.db.repository.UserInfoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import lombok.RequiredArgsConstructor;

@Slf4j
@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService{

    private final UserInfoRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("PrincipalDetailsService : 진입");
        UserInfo user = userRepository.findByUserName(username);

        // session.setAttribute("loginUser", user);
        return new PrincipalDetails(user);
    }
}