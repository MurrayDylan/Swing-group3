package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;

@Embeddable
public class ViewabilityInPercent {
    private Double viewValue;
    private Double viewAmount;
    private Double viewTarget;

    // Constructor
    public ViewabilityInPercent() {
        Random random = new Random();
        this.viewValue = random.nextDouble() * 100;
        this.viewAmount = random.nextDouble() * 1000;
        this.viewTarget = random.nextDouble() * 1000;
    }

    // Getters and Setters
    public Double getValue() {
        return viewValue;
    }

    public void setValue(Double value) {
        this.viewValue = value;
    }

    public Double getAmount() {
        return viewAmount;
    }

    public void setAmount(Double amount) {
        this.viewAmount = amount;
    }

    public Double getTarget() {
        return viewTarget;
    }

    public void setTarget(Double target) {
        this.viewTarget = target;
    }
}