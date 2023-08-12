package com.planty.common.interceptor;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.planty.api.user.model.response.UserLoginResponse;
import com.planty.api.user.model.service.UserInfoServiceImpl;
//import org.apache.ibatis.plugin.Intercepts;
import com.planty.common.util.SecurityUtil;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

//import com.travelers.common.util.SecurityUtil;
//import com.travelers.user.model.dto.UserDto;
//import com.travelers.user.model.service.UserService;

import lombok.RequiredArgsConstructor;

//@SuppressWarnings("deprecation")
//public class ConfirmInterceptor extends HandlerInterceptorAdapter {
//spring 5.3 부터는 HandlerInterceptor implements
@Component
@RequiredArgsConstructor
public class AuthenticationInterceptor implements HandlerInterceptor {

    private final UserInfoServiceImpl userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {

        try {
            String email = SecurityUtil.getCurrentUserEmail();
            UserLoginResponse loginInfo = userService.getLoginUser(email);

            if(loginInfo == null) {
                request.getRequestDispatcher("/").forward(request, response);
                return false;
            } else {
                request.setAttribute("loginInfo", loginInfo);
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect(request.getContextPath() + "/error");
            return false;
        }
    }

}