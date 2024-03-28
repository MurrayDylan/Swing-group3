package com.example.demo.models.Campaign.Metrics.GoalInfo;

public class CPAInAdvertiserCurrency {
    private Double amount;
    private Double target;
    private String currencyCode;

    // Constructor
    public CPAInAdvertiserCurrency(Double amount, Double target, String currencyCode) {
        this.amount = amount;
        this.target = target;
        this.currencyCode = currencyCode;
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

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

}