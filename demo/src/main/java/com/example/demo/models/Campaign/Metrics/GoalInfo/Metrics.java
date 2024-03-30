package com.example.demo.models.Campaign.Metrics.GoalInfo;
import jakarta.persistence.*;

import java.util.Random;
@Embeddable
public class Metrics{
    //@Transient

    private int campaignFlightId;

    private Pacing pacing;
    private GoalInfo goalInfo;
    public Metrics() {
        this.pacing = new Pacing();
        this.goalInfo = new GoalInfo();
        Random random = new Random();
        this.campaignFlightId = random.nextInt(100) + 1;
    }


    public int getCampaignFlightId() {
        return campaignFlightId;
    }

    public void setCampaignFlightId(int campaignFlightId) {
        this.campaignFlightId = campaignFlightId;
    }

    public Pacing getPacing() {
        return pacing;
    }

    public void setPacing(Pacing pacing) {
        this.pacing = pacing;
    }

    public GoalInfo getGoalInfo() {
        return goalInfo;
    }

    public void setGoalInfo(GoalInfo goalInfo) {
        this.goalInfo = goalInfo;
    }
}
