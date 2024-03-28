package com.example.demo.models.Campaign.Metrics.GoalInfo;
import jakarta.persistence.*;
@Entity
@Table(name = "pacing")
public class Pacing {

    private double FlightBudgetInAdvertiserCurrency;
    private double ProjectedSpendInAdvertiserCurrency;
    private String LastCalculatedAt;
    private double CurrentSpendInAdvertiserCurrency;
    private String AdvertiserCurrency;
}