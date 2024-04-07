package com.example.demo.service;

import com.example.demo.Repository.UserRepository;
import com.example.demo.models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {

        //return userRepository.findAll();
        return List.of(
                new User(123456L, "john_doe", "password123", "John Doe", "john@example.com", "1234567890", "123 Main St", "ABC Company")
        );

    }
}
