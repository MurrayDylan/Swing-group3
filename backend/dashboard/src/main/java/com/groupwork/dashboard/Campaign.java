package com.groupwork.dashboard;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Campaign{
    private String name;
private int budget;
private int spend;
private int kpi;
private int baseBid;
private int maxBid;
private int CPM;
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

}

