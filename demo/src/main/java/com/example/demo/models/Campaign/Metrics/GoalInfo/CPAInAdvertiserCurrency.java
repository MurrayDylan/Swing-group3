package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class CPAInAdvertiserCurrency {
    private Double cpaAmount;
    private Double cpaTarget;
    private String cpaCurrencyCode;

    // Constructor
    public CPAInAdvertiserCurrency() {
        Random random = new Random();
        this.cpaAmount = random.nextDouble() * 1000;
        this.cpaTarget = random.nextDouble() * 1000;
        this.cpaCurrencyCode = "USD";
    }


    // Getters and Setters
    public Double getAmount() {
        return cpaAmount;
    }

    public void setAmount(Double amount) {
        this.cpaAmount = amount;
    }

    public Double getTarget() {
        return cpaTarget;
    }

    public void setTarget(Double target) {
        this.cpaTarget = target;
    }

    public String getCurrencyCode() {
        return cpaCurrencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.cpaCurrencyCode = currencyCode;
    }

}