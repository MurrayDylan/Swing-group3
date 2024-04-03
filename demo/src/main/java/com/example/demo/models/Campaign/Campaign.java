package com.example.demo.models.Campaign;
import com.example.demo.models.Campaign.Metrics.GoalInfo.Metrics;
import com.example.demo.models.User;
import jakarta.persistence.*;

@Entity
@Table(name = "campaigns")
public class Campaign{
    @Id
    private String campaignId;
    private double budget;
    private double spend;
    private double kpi;
    private double baseBid;
    private double maxBid;
    private double CPM;
    //@OneToOne(mappedBy = "campaign", cascade = CascadeType.ALL)
    private Metrics metrics;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    public Campaign(){

    }

    public Campaign(User user, String campaignId, double budget, double spend, double kpi, double baseBid, double maxBid, double CPM) {
        this.user = user;
        this.campaignId = campaignId;
        this.budget =budget;
        this.spend = spend;
        this.kpi = kpi;
        this.baseBid = baseBid;
        this.maxBid = maxBid;
        this.CPM = CPM;
        this.metrics= new Metrics();
    }
    public String getcampaignId(){
        return this.campaignId;
    }
    public double getBudget(){
        return this.budget;
    }
    public void setBudget(int budgetSet){
        this.budget= budgetSet;
    }
    public double getSpend(){
        return this.spend;
    }
    public void setSpend(int spendSet){
        this.spend= spendSet;
    }

    public double getKpi() {
        return kpi;
    }

    public void setKpi(double kpi) {
        this.kpi = kpi;
    }
    public double getBaseBid() {
        return baseBid;
    }

    public void setBaseBid(double baseBid) {
        this.baseBid = baseBid;
    }

    public double getMaxBid() {
        return maxBid;
    }

    public void setMaxBid(double maxBid) {
        this.maxBid = maxBid;
    }

    public double getCPM() {
        return CPM;
    }

    public Metrics getMetrics(){
        return metrics;
    }
    public void setCPM(double CPM) {
        this.CPM = CPM;
    }
}

