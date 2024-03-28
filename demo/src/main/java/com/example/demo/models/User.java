package com.example.demo.models;
import com.example.demo.models.Campaign.Campaign;
import jakarta.persistence.*;

import java.util.Set;


@Entity
@Table(name="users")
public class User {
    @Id
    @SequenceGenerator(name="user_sequence", sequenceName="user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="user_sequence")
    private Long id;

    private String username;
    private String password;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;

    private String companyName;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<Campaign> campaigns;

    public User(String username, String password, String name, String email, String phoneNumber, String address, String companyName) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.companyName = companyName;
    }

    public User(Long id, String username, String password, String name, String email, String phoneNumber, String address, String companyName) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.companyName = companyName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }





    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}