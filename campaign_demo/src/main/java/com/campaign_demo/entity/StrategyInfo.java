package com.campaign_demo.entity;
import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "strategyinfo")
@Data
public class StrategyInfo {
    // customerId NOR NULL AUTO-INCREASE
    // ownerName VARCHAR(50) DEFAULT NULL
    // paidMarketing VARCHAR(50) DEFAULT NULL    
    // improvedKPI VARCHAR(20) DEFAULT NULL
    // accountActivatedState boolean DEFAULT NULL
    // keywordLabel VARCHAR(20) DEFAULT NULL 
    
    
    @Id
    @Column(name = "customerId", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long customerId;

    @Column(name = "ownerName", length = 50)
    private String ownerName;

    @Column(name = "paidMarketing", length = 10)
    private String paidMarketing;

    @Column(name = "improvedKPI", length = 20)
    private String improvedKPI;

    @Column(name = "keywordLabel", length = 20)
    private String keywordLabel;

    @Column(name = "accountActivatedState", columnDefinition = "TINYINT default 1")
    private boolean accountActivatedState;


}