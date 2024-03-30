package com.example.demo.models.Campaign.Metrics.GoalInfo;
import jakarta.persistence.*;

import java.util.Random;
@Embeddable
public class Pacing {

    private double flightBudgetInAdvertiserCurrency;
    private double projectedSpendInAdvertiserCurrency;
    private String lastCalculatedAt;
    private double currentSpendInAdvertiserCurrency;
    private String advertiserCurrency;

    public Pacing() {
        Random random = new Random();
        this.flightBudgetInAdvertiserCurrency = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.projectedSpendInAdvertiserCurrency = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.lastCalculatedAt = "30/03/2024";
        this.currentSpendInAdvertiserCurrency = random.nextDouble() * 1000; // Random value between 0 and 1000
        this.advertiserCurrency = "USD";
    }
    public double getFlightBudgetInAdvertiserCurrency() {
        return flightBudgetInAdvertiserCurrency;
    }

    public void setFlightBudgetInAdvertiserCurrency(double flightBudgetInAdvertiserCurrency) {
        this.flightBudgetInAdvertiserCurrency = flightBudgetInAdvertiserCurrency;
    }

    public double getProjectedSpendInAdvertiserCurrency() {
        return projectedSpendInAdvertiserCurrency;
    }

    public void setProjectedSpendInAdvertiserCurrency(double projectedSpendInAdvertiserCurrency) {
        this.projectedSpendInAdvertiserCurrency = projectedSpendInAdvertiserCurrency;
    }

    public String getLastCalculatedAt() {
        return lastCalculatedAt;
    }

    public void setLastCalculatedAt(String lastCalculatedAt) {
        this.lastCalculatedAt = lastCalculatedAt;
    }

    public double getCurrentSpendInAdvertiserCurrency() {
        return currentSpendInAdvertiserCurrency;
    }

    public void setCurrentSpendInAdvertiserCurrency(double currentSpendInAdvertiserCurrency) {
        this.currentSpendInAdvertiserCurrency = currentSpendInAdvertiserCurrency;
    }

    public String getAdvertiserCurrency() {
        return advertiserCurrency;
    }

    public void setAdvertiserCurrency(String advertiserCurrency) {
        this.advertiserCurrency = advertiserCurrency;
    }
}
