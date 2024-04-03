package com.example.demo.models.Campaign.Metrics.GoalInfo;
import java.time.LocalDateTime;
import jakarta.persistence.*;
@Embeddable
public class GoalInfo {
    private CPAInAdvertiserCurrency CPAInAdvertiserCurrency;
    private CPCInAdvertiserCurrency CPCInAdvertiserCurrency;
    private CPCVInAdvertiserCurrency CPCVInAdvertiserCurrency;
    private CPMInAdvertiserCurrency CPMInAdvertiserCurrency;
    private CTRInPercent CTRInPercent;
    private MiaozhenOTPInPercent MiaozhenOTPInPercent;
    private NielsenOTPInPercent NielsenOTPInPercent;
    private ReturnOnAdSpendPercent ReturnOnAdSpendPercent;
    private VCPMInAdvertiserCurrency VCPMInAdvertiserCurrency;
    private VCRInPercent VCRInPercent;
    private ViewabilityInPercent ViewabilityInPercent;
    private LocalDateTime lastCalculatedAtGoalInfo;

    public GoalInfo() {
        this.CPAInAdvertiserCurrency = new CPAInAdvertiserCurrency();
        this.CPCInAdvertiserCurrency = new CPCInAdvertiserCurrency();
        this.CPCVInAdvertiserCurrency = new CPCVInAdvertiserCurrency();
        this.CPMInAdvertiserCurrency = new CPMInAdvertiserCurrency();
        this.CTRInPercent = new CTRInPercent();
        this.MiaozhenOTPInPercent = new MiaozhenOTPInPercent();
        this.NielsenOTPInPercent = new NielsenOTPInPercent();
        this.ReturnOnAdSpendPercent = new ReturnOnAdSpendPercent();
        this.VCPMInAdvertiserCurrency = new VCPMInAdvertiserCurrency();
        this.VCRInPercent = new VCRInPercent();
        this.ViewabilityInPercent = new ViewabilityInPercent();
        this.lastCalculatedAtGoalInfo = LocalDateTime.now(); // Default value, current date and time
    }
    public CPAInAdvertiserCurrency getCPAInAdvertiserCurrency() {
        return CPAInAdvertiserCurrency;
    }

    public CPCInAdvertiserCurrency getCPCInAdvertiserCurrency() {
        return CPCInAdvertiserCurrency;
    }

    public CPCVInAdvertiserCurrency getCPCVInAdvertiserCurrency() {
        return CPCVInAdvertiserCurrency;
    }

    public CPMInAdvertiserCurrency getCPMInAdvertiserCurrency() {
        return CPMInAdvertiserCurrency;
    }

    public CTRInPercent getCTRInPercent() {
        return CTRInPercent;
    }

    public MiaozhenOTPInPercent getMiaozhenOTPInPercent() {
        return MiaozhenOTPInPercent;
    }

    public NielsenOTPInPercent getNielsenOTPInPercent() {
        return NielsenOTPInPercent;
    }

    public ReturnOnAdSpendPercent getReturnOnAdSpendPercent() {
        return ReturnOnAdSpendPercent;
    }

    public VCPMInAdvertiserCurrency getVCPMInAdvertiserCurrency() {
        return VCPMInAdvertiserCurrency;
    }

    public VCRInPercent getVCRInPercent() {
        return VCRInPercent;
    }

    public ViewabilityInPercent getViewabilityInPercent() {
        return ViewabilityInPercent;
    }

    public LocalDateTime getLastCalculatedAtGoalInfo() {
        return lastCalculatedAtGoalInfo;
    }
}
