package com.groupwork.dashboard;

import org.springframework.data.jpa.repository.JpaRepository;


public interface CampaignRepository extends JpaRepository<Campaign, Integer> {
    Campaign findCampaignById(Integer id);


}