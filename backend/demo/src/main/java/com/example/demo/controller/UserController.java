package com.example.demo.controller;
import com.example.demo.Repository.CampaignRepository;
import com.example.demo.Repository.UserRepository;
import com.example.demo.models.Campaign.Campaign;
import com.example.demo.models.Campaign.Metrics.GoalInfo.Metrics;
import com.example.demo.models.User;

import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Set;


@RestController
public class UserController {

    private final UserService userService;
    @Autowired

    private UserRepository userRepository;
    @Autowired

    private CampaignRepository campaignRepository;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path = "/user/{id}/campaigns")
    public @ResponseBody String createNewCampaign(@PathVariable Long id, @RequestParam String name, @RequestParam double budget, @RequestParam double spend, @RequestParam double kpi, @RequestParam double baseBid, @RequestParam double maxBid, @RequestParam double CPM) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
        Campaign newCampaign = new Campaign(user, name, budget, spend, kpi, baseBid, maxBid, CPM);
        campaignRepository.save(newCampaign);
        return "campaign successfully created with name: " + name;
    }

    // Endpoint to create a new user
    @PostMapping("/users")
    public String createUser(@RequestParam String username,
                             @RequestParam String password,
                             @RequestParam String name,
                             @RequestParam String email,
                             @RequestParam String phoneNumber,
                             @RequestParam String address,
                             @RequestParam String companyName) {
        // Create a new user object
        User newUser = new User(username, password, name, email, phoneNumber, address, companyName);

        // Save the user to the database
        userRepository.save(newUser);

        return "user successfully created with name: " + name;
    }

    //List all of the campaigns associated with the given user with the id variable
    @GetMapping("/user/campaigns/{id}")
    public ResponseEntity<Set<Campaign>> getCampaignsByUser(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Set<Campaign> campaigns = campaignRepository.findByUser(user);
        return new ResponseEntity<>(campaigns, HttpStatus.OK);
    }

    //Lists all users current stored in the userRepository.
    @GetMapping("/users/list")
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }


    //Gives the campaign with it's metrics, not fully functional yet as getting campaigns will just return the metrics
    @GetMapping("/{campaignId}")
    public Metrics getCampaignWithMetrics(@PathVariable String campaignId) {
        Campaign campaign = campaignRepository.findByCampaignId(campaignId);
        if (campaign != null) {
            Metrics metrics = campaign.getMetrics();
            return metrics;
        } else {
            return null; // Campaign not found
        }
    }
}

