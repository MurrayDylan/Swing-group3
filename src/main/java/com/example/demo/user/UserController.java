package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path="api/v1/user")
public class UserController {
    private final UserRepository userRepository;


    @Autowired
    public UserController(UserRepository userRepository)
    {this.userRepository=userRepository;}

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Map<String, String> addUser(@RequestBody User user) {
        try {
            // Save the user to the database
            User savedUser = userRepository.save(user);

            // Respond with success message
            Map<String, String> response = new HashMap<>();
            response.put("message", "User added successfully with id: " + savedUser.getId());

            return response;
        } catch (Exception e) {
            // Handle any exceptions, e.g., duplicate username
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Failed to add user. " + e.getMessage());
        }
        }
    }


