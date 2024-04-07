package com.example.demo.service;

import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
@Service
public class StatusService {

    public Map<String, String> getStatus() {
        Map<String, String> statusMap = new HashMap<>();
        statusMap.put("status", "UP");
        return statusMap;
    }
}