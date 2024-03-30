package com.example.demo.models.Campaign.Metrics.GoalInfo;

import jakarta.persistence.Embeddable;

import java.util.Random;
@Embeddable
public class VCRInPercent {
    private Double vcrValue;
    private Double vcrAmount;
    private Double vcrTarget;

    public VCRInPercent() {
        Random random = new Random();
        this.vcrValue = random.nextDouble() * 100;
        this.vcrAmount = random.nextDouble() * 1000;
        this.vcrTarget = random.nextDouble() * 1000;
    }


    public Double getValue() {
        return vcrValue;
    }

    public void setValue(Double value) {
        this.vcrValue = value;
    }

    public Double getAmount() {
        return vcrAmount;
    }

    public void setAmount(Double amount) {
        this.vcrAmount = amount;
    }

    public Double getTarget() {
        return vcrTarget;
    }

    public void setTarget(Double target) {
        this.vcrTarget = target;
    }

}