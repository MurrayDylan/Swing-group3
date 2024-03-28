package com.example.demo.models.Campaign.Metrics.GoalInfo;
public class NielsenOTPInPercent {
    private Integer value;
    private Double amount;
    private Double target;

    // Constructor
    public NielsenOTPInPercent(Integer value, Double amount, Double target) {
        this.value = value;
        this.amount = amount;
        this.target = target;
    }

    // Getters and Setters
    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

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