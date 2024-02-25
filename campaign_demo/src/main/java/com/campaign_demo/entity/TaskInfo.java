package com.campaign_demo.entity;
import lombok.*;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "taskinfo")
@Data
public class TaskInfo {
    // customerId NOR NULL AUTO-INCREASE
    // taskName VARCHAR(100) DEFAULT NULL
    // taskDescription VARCHAR(100) DEFAULT NULL
    // taskState VARCHAR(10) DEFAULT NULL
    // accountActivatedState boolean DEFAULT NULL
    // createDate Date DEFAULT NULL
    // dueDate Date DEFAULT NULL
    // completeDate Date DEFAULT NULL
    
    @Id
    @Column(name = "customerId", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long customerId;

    @Column(name = "taskName", length = 100)
    private String taskName;
    
    @Column(name = "taskDescription", length = 100)
    private String goalDescription;

    @Column(name = "taskState", length = 10)
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
