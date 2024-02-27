package com.groupwork.dashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(path="/campaign")
public class CampaignController {


    @Autowired
    private CampaignRepository campaignRepository;

    /*@PostMapping(path="/add")
    public @ResponseBody String addCampaign(@RequestParam String name,@RequestParam Map<Integer, Integer> requestParams)throws Exception {
        Campaign campaign = new Campaign(name,requestParams.get("budget"),requestParams.get("spend"),
                requestParams.get("kpi"), requestParams.get("basebid"),requestParams.get("maxbid"),requestParams.get("cpm"));
        return "campaign successfully created";
    }*/

    @PostMapping(path="/add")
    public @ResponseBody String addCampaign(@RequestParam Map<String,String> requestParams){
        String campaignName= requestParams.get("name");
        Campaign campaign = new Campaign(campaignName);
        campaignRepository.save(campaign);
        return "campaign successfully created with name: "+ campaignName;
    }

    @GetMapping("/list")
    public Iterable<Campaign> getUsers() {
        return campaignRepository.findAll();
    }

   @GetMapping("/find/{id}")
    public Optional<Campaign> findCampaignById(@PathVariable Integer id) {
        return campaignRepository.findById(id);
    }
    @DeleteMapping("/delete/{id}")
    String deleteEmployee(@PathVariable Integer id) {
        campaignRepository.deleteById(id);
        return "Successfully deleted";
    }
}