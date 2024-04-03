package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class MiaozhenOTPInPercent {
    private Double miaozhenValue;
    private Double miaozhenAmount;
    private Double miaozhenTarget;

    // Constructor
    public MiaozhenOTPInPercent() {
        Random random = new Random();
        this.miaozhenValue = random.nextDouble() * 100;
        this.miaozhenAmount = random.nextDouble() * 1000;
        this.miaozhenTarget = random.nextDouble() * 1000;
    }

    // Getters and Setters
    public Double getValue() {
        return miaozhenValue;
    }

    public void setValue(Double value) {
        this.miaozhenValue = value;
    }

    public Double getAmount() {
        return miaozhenAmount;
    }

    public void setAmount(Double amount) {
        this.miaozhenAmount = amount;
    }

    public Double getTarget() {
        return miaozhenTarget;
    }

    public void setTarget(Double target) {
        this.miaozhenTarget = target;
    }
}