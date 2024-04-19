package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class CPMInAdvertiserCurrency {
    private Double cpmAmount;
    private String cpmCurrencyCode;

    // Constructor
    public CPMInAdvertiserCurrency() {
        Random random = new Random();
        this.cpmAmount = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.cpmCurrencyCode = "USD"; // Default currency code, adjust as needed
    }

    // Getters and Setters
    public Double getAmount() {
        return cpmAmount;
    }

    public void setAmount(Double amount) {
        this.cpmAmount = amount;
    }

    public String getCurrencyCode() {
        return cpmCurrencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.cpmCurrencyCode = currencyCode;
    }
}