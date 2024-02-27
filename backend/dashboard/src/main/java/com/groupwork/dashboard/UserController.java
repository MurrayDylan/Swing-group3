/*package com.groupwork.dashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(path="/user")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addUser(@RequestParam Map<String,String> requestParams)throws Exception {
        User user = new User();
        String firstName= requestParams.get("first");
        user.setFirstName(firstName);
        String lastName= requestParams.get("last");
        user.setLastName(lastName);
        String email= requestParams.get("email");
        user.setEmail(email);
        userRepository.save(user);
     //   System.out.println(email);
        return "Added new customer to repo!";
    }

    @GetMapping("/list")
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/find/{id}")
    public User findUserById(@PathVariable Integer id) {
        return userRepository.findUserById(id);
    }
}*/