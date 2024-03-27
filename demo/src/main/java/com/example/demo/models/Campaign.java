package com.example.demo.models;
import jakarta.persistence.*;
import java.util.Random;


import jakarta.persistence.*;

@Entity
@Table(name = "campaigns")
public class Campaign{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private double budget;
    private double spend;
    private double kpi;
    private double baseBid;
    private double maxBid;
    private double CPM;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Campaign() {
    }
    public Campaign(User user, String name, double budget, double spend, double kpi, double baseBid, double maxBid, double CPM) {
        this.user = user;
        this.name = name;
        this.budget =budget;
        this.spend = spend;
        this.kpi = kpi;
        this.baseBid = baseBid;
        this.maxBid = maxBid;
        this.CPM = CPM;
    }
    public String getName(){
        return this.name;
    }
    public double getBudget(){
        return this.budget;
    }
    public void setBudget(int budgetSet){
        this.budget= budgetSet;
    }
    public double getSpend(){
        return this.spend;
    }
    public void setSpend(int spendSet){
        this.spend= spendSet;
    }

    public double getKpi() {
        return kpi;
    }

    public void setKpi(double kpi) {
        this.kpi = kpi;
    }
    public double getBaseBid() {
        return baseBid;
    }

    public void setBaseBid(double baseBid) {
        this.baseBid = baseBid;
    }

    public double getMaxBid() {
        return maxBid;
    }

    public void setMaxBid(double maxBid) {
        this.maxBid = maxBid;
    }

    public double getCPM() {
        return CPM;
    }
    public void setCPM(double CPM) {
        this.CPM = CPM;
    }
    public void setUser(Long id){
        this.id= id;
    }
}

