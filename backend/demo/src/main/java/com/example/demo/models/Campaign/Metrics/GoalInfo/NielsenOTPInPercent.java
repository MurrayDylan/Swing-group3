package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class NielsenOTPInPercent {
    private Integer nielsenValue;
    private Double nielsenAmount;
    private Double nielsenTarget;

    // Constructor
    public NielsenOTPInPercent() {
        Random random = new Random();
        this.nielsenValue = random.nextInt(101);
        this.nielsenAmount = random.nextDouble() * 1000;
        this.nielsenTarget = random.nextDouble() * 1000;
    }
    public Integer getValue() {
        return nielsenValue;
    }

    public void setValue(Integer value) {
        this.nielsenValue = value;
    }

    public Double getAmount() {
        return nielsenAmount;
    }

    public void setAmount(Double amount) {
        this.nielsenAmount = amount;
    }

    public Double getTarget() {
        return nielsenTarget;
    }

    public void setTarget(Double target) {
        this.nielsenTarget = target;
    }
}