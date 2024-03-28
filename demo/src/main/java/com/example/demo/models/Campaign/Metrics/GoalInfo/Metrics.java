package com.example.demo.models.Campaign.Metrics.GoalInfo;
import jakarta.persistence.*;

@Entity
@Table(name = "campaign_metrics")
public class Metrics{
    private String CampaignId;
    private int campaignFlightId;
    @OneToOne(mappedBy = "campaignMetrics", cascade = CascadeType.ALL)
    private Pacing pacing;
    @OneToOne(mappedBy = "campaignMetrics", cascade = CascadeType.ALL)
    private GoalInfo goalInfo;

}
