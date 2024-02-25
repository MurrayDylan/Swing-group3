package com.campaign_demo.entity;

import lombok.*;
import jakarta.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "goalinfo")
@Data

public class GoalInfo {
    // customerId NOR NULL AUTO-INCREASE
    // goalDescription VARCHAR(100) DEFAULT NULL
    // goalState VARCHAR(10) DEFAULT NULL
    // accountActivatedState boolean DEFAULT NULL
    // createDate Date DEFAULT NULL
    // completeDate Date DEFAULT NULL
    // dueDate Date DEFAULT NULL

    
    
    @Id
    @Column(name = "customerId", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long customerId;

    @Column(name = "goalDescription", length = 100)
    private String goalDescription;

    @Column(name = "goalState", length = 10)
    private String goalState;

    @Column(name = "createDate")
    private Date createDate;

    @Column(name = "dueDate")
    private Date dueDate;

    @Column(name = "completeDate")
    private Date completeDate;

    @Column(name = "accountActivatedState", columnDefinition = "TINYINT default 1")
    private boolean accountActivatedState;
}
