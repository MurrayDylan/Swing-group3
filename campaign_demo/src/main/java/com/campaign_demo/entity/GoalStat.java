package com.campaign_demo.entity;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "goalstat")
@Data

public class GoalStat {
    // customerId NOR NULL autoincrease
    // goalInfo VARCHAR(100) DEFAULT NULL
    // captured Integer DEFAULT NULL
    // inProgess Interger DEFAULT NULL
    // completed Interger DEFAULT NULL
    // scheduled Interger DEFAULT NULL
    // totalGoal Interger DEFAULT NULL
    // accountActivatedState boolean DEFAULT NULL

    @Id
    @Column(name = "customerId", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long customerId;

    @Column(name = "goalLabel", length = 100)
    private String goalLabel;

    @Column(name = "captured")
    private int captured;

    @Column(name = "inProgess")
    private int inProgress;

    @Column(name = "completed")
    private int completed;

    @Column(name = "scheduled")
    private int scheduled;

    @Column(name = "totalGoal")
    private int totalGoal;

    @Column(name = "accountActivatedState", columnDefinition = "TINYINT default 1")
    private boolean accountActivatedState;

}
