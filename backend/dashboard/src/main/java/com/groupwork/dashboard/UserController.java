package com.groupwork.dashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/user")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addUser(@RequestParam String first, @RequestParam String last, @RequestParam String email) {
        User user = new User();
        user.setFirstName(first);
        user.setLastName(last);
        user.setEmail(email);
        userRepository.save(user);
        System.out.println(email);
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
}