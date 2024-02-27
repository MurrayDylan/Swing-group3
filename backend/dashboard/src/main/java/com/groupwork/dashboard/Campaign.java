package com.groupwork.dashboard;
import java.util.Random;


import jakarta.persistence.*;

@Entity
//@Table(name = "campaigns")
public class Campaign{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
private int budget;
private int spend;
private int kpi;
private double baseBid;
private double maxBid;
private double CPM;
    public Campaign() {
    }
    public Campaign(String name) {
        this.name = name;
        this.budget = generateRandomValue(500, 1500);
        this.spend = generateRandomValue(200, 800);
        this.kpi = generateRandomValue(200, 400);
        this.baseBid = generateRandomValueDouble(0.6, 0.6);
        this.maxBid = generateRandomValueDouble(1.73, 1.73);
        this.CPM = generateRandomValueDouble(8.0, 8.0);
    }
    public String getName(){
        return this.name;
    }
    public int getBudget(){
        return this.budget;
    }
    public void setBudget(int budgetSet){
        this.budget= budgetSet;
    }
    public int getSpend(){
        return this.spend;
    }
    public void setSpend(int spendSet){
        this.spend= spendSet;
    }

    public int getKpi() {
        return kpi;
    }

    public void setKpi(int kpi) {
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
    private int generateRandomValue(int lowerLimit, int upperLimit) {
        Random rand = new Random();
        return rand.nextInt(upperLimit - lowerLimit + 1) + lowerLimit;
    }
    private double generateRandomValueDouble(double lowerLimit, double upperLimit) {
        Random rand = new Random();
        return lowerLimit + (upperLimit - lowerLimit) * rand.nextDouble();
    }
}

