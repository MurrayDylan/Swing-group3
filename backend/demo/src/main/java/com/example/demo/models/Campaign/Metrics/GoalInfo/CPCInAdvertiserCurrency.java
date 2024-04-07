package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class CPCInAdvertiserCurrency {
    private Double cpcAmount;
    private Double cpcTarget;
    private String cpcCurrencyCode;

    // Constructor
    public CPCInAdvertiserCurrency() {
        Random random = new Random();
        this.cpcAmount = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.cpcTarget = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.cpcCurrencyCode = "USD"; // Default currency code, adjust as needed
    }

    // Getters and Setters
    public Double getAmount() {
        return cpcAmount;
    }

    public void setAmount(Double amount) {
        this.cpcAmount = amount;
    }

    public Double getTarget() {
        return cpcTarget;
    }

    public void setTarget(Double target) {
        this.cpcTarget = target;
    }

    public String getCurrencyCode() {
        return cpcCurrencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.cpcCurrencyCode = currencyCode;
    }

}