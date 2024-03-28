package com.example.demo.Repository;
import com.example.demo.models.Campaign.Campaign;
import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface CampaignRepository extends JpaRepository<Campaign, Long> {
    Set<Campaign> findByUser(User user);
    // You can add custom queries here if needed
}