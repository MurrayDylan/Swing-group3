package com.example.demo.models.Campaign.Metrics.GoalInfo;
import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class VCPMInAdvertiserCurrency {
    private Double vcpmAmount;
    private Double vcpmTarget;
    private String vcpmCurrencyCode;

    // Constructor
    public VCPMInAdvertiserCurrency() {
        Random random = new Random();
        this.vcpmAmount = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.vcpmTarget = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.vcpmCurrencyCode = "USD"; // Default currency code, adjust as needed
    }

    // Getters and Setters
    public Double getAmount() {
        return vcpmAmount;
    }

    public void setAmount(Double amount) {
        this.vcpmAmount = amount;
    }

    public Double getTarget() {
        return vcpmTarget;
    }

    public void setTarget(Double target) {
        this.vcpmTarget = target;
    }

    public String getCurrencyCode() {
        return vcpmCurrencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.vcpmCurrencyCode = currencyCode;
    }
}