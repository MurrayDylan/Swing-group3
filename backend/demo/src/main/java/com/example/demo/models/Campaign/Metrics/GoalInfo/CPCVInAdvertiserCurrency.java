package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class CPCVInAdvertiserCurrency {
    private Double cpcvAmount;
    private Double cpcvTarget;
    private String cpcvCurrencyCode;

    // Constructor
    public CPCVInAdvertiserCurrency() {
        Random random = new Random();
        this.cpcvAmount = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.cpcvTarget = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.cpcvCurrencyCode = "USD"; // Default currency code, adjust as needed
    }
    // Getters and Setters
    public Double getAmount() {
        return cpcvAmount;
    }

    public void setAmount(Double amount) {
        this.cpcvAmount = amount;
    }

    public Double getTarget() {
        return cpcvTarget;
    }

    public void setTarget(Double target) {
        this.cpcvTarget = target;
    }

    public String getCurrencyCode() {
        return cpcvCurrencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.cpcvCurrencyCode = currencyCode;
    }
}