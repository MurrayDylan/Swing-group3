package com.example.demo.controller;
import com.example.demo.models.User;

import com.example.demo.service.UserService;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;


@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User addedUser = userService.addUser(user);
        return new ResponseEntity<>(addedUser, HttpStatus.CREATED);
    }
    @GetMapping("/tracking-pixel")
    public void trackPixel(@RequestParam("userId") Long userId,
                           @RequestParam("pageUrl") String pageUrl,
                           @RequestParam("referringUrl") String referringUrl,
                           HttpServletResponse response) {
        // Log the tracking data to the database (you can use UserService or create a new service for tracking)
        // For demonstration, we'll just print the data to the console
        System.out.println("Received tracking data - User ID: " + userId + ", Page URL: " + pageUrl + ", Referring URL: " + referringUrl);

        // Respond with a 1x1 transparent GIF pixel
        response.setContentType("image/gif");
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        response.setDateHeader("Expires", 0);
        response.setContentLength(43);
        String pixel = "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        response.setHeader("Content-Length", String.valueOf(pixel.length()));
       // try {
          //  response.getOutputStream().write(org.apache.commons.codec.binary.Base64.decodeBase64(pixel));
        //} catch (Exception e) {
            // Handle exception
           // e.printStackTrace();
        }
    }


