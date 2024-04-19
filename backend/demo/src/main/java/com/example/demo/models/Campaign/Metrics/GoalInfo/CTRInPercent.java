package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class CTRInPercent {
    private Double ctrAmount;
    private Double ctrTarget;

    // Constructor
    public CTRInPercent() {
        Random random = new Random();
        this.ctrAmount = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.ctrTarget = random.nextDouble() * 1000; // Random value between 0 and 1000
    }

    // Getters and Setters
    public Double getAmount() {
        return ctrAmount;
    }

    public void setAmount(Double amount) {
        this.ctrAmount = amount;
    }

    public Double getTarget() {
        return ctrTarget;
    }

    public void setTarget(Double target) {
        this.ctrTarget = target;
    }

}