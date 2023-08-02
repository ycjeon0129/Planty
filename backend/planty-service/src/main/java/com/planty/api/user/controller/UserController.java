package com.planty.api.user.controller;

import com.planty.db.entity.User;
import com.planty.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "/user/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/{nickname}/{auth}")
    public ResponseEntity<?> signUp(@PathVariable("nickname") String nickname, @PathVariable("auth") String auth) {
        User user = new User();
        user.setAuth(auth);
        user.setNickname(nickname);
        user.setPhoto("phooto");
        user.setShippingAddress("주소");
        System.out.println("user 들어옴");
        System.out.println("userVo.getNickname(): " + user.getNickname() + " / userVo.getAuth(): " + user.getAuth());
        userRepository.save(user);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("/{uid}")
    public ResponseEntity<?> userInfo(@PathVariable("uid") int uid) {
        Optional<User> user = userRepository.findById((long) uid);

        if(user.isPresent()){
            return new ResponseEntity<User>(user.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

}
