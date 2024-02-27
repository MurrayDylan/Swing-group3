package com.groupwork.dashboard;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Campaign{
    private String name;
private int budget;
private int spend;
private int kpi;
private int baseBid;
private int maxBid;
private int CPM;
    public Campaign(String name, int budget, int spend, int kpi, int baseBid, int maxBid, int CPM) {
        this.name = name;
        this.budget = budget;
        this.spend = spend;
        this.kpi = kpi;
        this.baseBid = baseBid;
        this.maxBid = maxBid;
        this.CPM = CPM;
    }
private String frequency;
    public int getBudget(){
        return this.budget;
    }
    public void setBudget(int budgetSet){
        this.budget= budgetSet;
    }
    public int getSpend(){
        return this.spend;
    }
    public void setSpend(int spendSet){
        this.budget= spendSet;
    }

    public int getKpi() {
        return kpi;
    }

    public void setKpi(int kpi) {
        this.kpi = kpi;
    }
    public int getBaseBid() {
        return baseBid;
    }

    public void setBaseBid(int baseBid) {
        this.baseBid = baseBid;
    }

    public int getMaxBid() {
        return maxBid;
    }

    public void setMaxBid(int maxBid) {
        this.maxBid = maxBid;
    }

    public int getCPM() {
        return CPM;
    }
    public void setCPM(int CPM) {
        this.CPM = CPM;
    }
}

