package com.example.demo.models.Campaign.Metrics.GoalInfo;

public class ReturnOnAdSpendPercent {
    private Double amount;
    private Double target;

    // Constructor
    public ReturnOnAdSpendPercent(Double amount, Double target) {
        this.amount = amount;
        this.target = target;
    }

    // Getters and Setters
    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Double getTarget() {
        return target;
    }

    public void setTarget(Double target) {
        this.target = target;
    }

}