package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class ReturnOnAdSpendPercent {
    private Double adSpendAmount;
    private Double adSpendTarget;

    public ReturnOnAdSpendPercent() {
        Random random = new Random();
        this.adSpendAmount = random.nextDouble() * 1000;
        this.adSpendTarget = random.nextDouble() * 1000;
    }
    // Getters and Setters
    public Double getAmount() {
        return adSpendAmount;
    }

    public void setAmount(Double amount) {
        this.adSpendAmount = amount;
    }

    public Double getTarget() {
        return adSpendTarget;
    }

    public void setTarget(Double target) {
        this.adSpendTarget = target;
    }

}