package com.example.medichart.Mediimformation.model;

import jakarta.persistence.*;

@Entity
@Table(name = "health_data")
public class HealthData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "gender")
    private Integer gender;

    @Column(name = "age_group")
    private Integer ageGroup;

    @Column(name = "height")
    private Integer height;

    @Column(name = "weight")
    private Integer weight;

    @Column(name = "waist_circumference")
    private Float waistCircumference;

    @Column(name = "systolic_blood_pressure")
    private Float systolicBloodPressure;

    @Column(name = "diastolic_blood_pressure")
    private Float diastolicBloodPressure;

    @Column(name = "fasting_blood_sugar")
    private Float fastingBloodSugar;

    @Column(name = "hemoglobin")
    private Float hemoglobin;

    @Column(name = "protein")
    private String protein;

    @Column(name = "serum_creatinine")
    private Float serumCreatinine;

    @Column(name = "ast")
    private Float ast;

    @Column(name = "alt")
    private Float alt;

    @Column(name = "gamma_gtp")
    private Float gammaGtp;

    @Column(name = "smoking_status")
    private Integer smokingStatus;

    @Column(name = "alcohol_status")
    private Integer alcoholStatus;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public Integer getAgeGroup() {
        return ageGroup;
    }

    public void setAgeGroup(Integer ageGroup) {
        this.ageGroup = ageGroup;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Float getWaistCircumference() {
        return waistCircumference;
    }

    public void setWaistCircumference(Float waistCircumference) {
        this.waistCircumference = waistCircumference;
    }

    public Float getSystolicBloodPressure() {
        return systolicBloodPressure;
    }

    public void setSystolicBloodPressure(Float systolicBloodPressure) {
        this.systolicBloodPressure = systolicBloodPressure;
    }

    public Float getDiastolicBloodPressure() {
        return diastolicBloodPressure;
    }

    public void setDiastolicBloodPressure(Float diastolicBloodPressure) {
        this.diastolicBloodPressure = diastolicBloodPressure;
    }

    public Float getFastingBloodSugar() {
        return fastingBloodSugar;
    }

    public void setFastingBloodSugar(Float fastingBloodSugar) {
        this.fastingBloodSugar = fastingBloodSugar;
    }

    public Float getHemoglobin() {
        return hemoglobin;
    }

    public void setHemoglobin(Float hemoglobin) {
        this.hemoglobin = hemoglobin;
    }

    public String getProtein() {
        return protein;
    }

    public void setProtein(String protein) {
        this.protein = protein;
    }

    public Float getSerumCreatinine() {
        return serumCreatinine;
    }

    public void setSerumCreatinine(Float serumCreatinine) {
        this.serumCreatinine = serumCreatinine;
    }

    public Float getAst() {
        return ast;
    }

    public void setAst(Float ast) {
        this.ast = ast;
    }

    public Float getAlt() {
        return alt;
    }

    public void setAlt(Float alt) {
        this.alt = alt;
    }

    public Float getGammaGtp() {
        return gammaGtp;
    }

    public void setGammaGtp(Float gammaGtp) {
        this.gammaGtp = gammaGtp;
    }

    public Integer getSmokingStatus() {
        return smokingStatus;
    }

    public void setSmokingStatus(Integer smokingStatus) {
        this.smokingStatus = smokingStatus;
    }

    public Integer getAlcoholStatus() {
        return alcoholStatus;
    }

    public void setAlcoholStatus(Integer alcoholStatus) {
        this.alcoholStatus = alcoholStatus;
    }
}
