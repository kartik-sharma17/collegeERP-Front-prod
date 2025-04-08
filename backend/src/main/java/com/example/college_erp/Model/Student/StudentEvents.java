package com.example.college_erp.Model.Student;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.validation.beanvalidation.SpringConstraintValidatorFactory;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class StudentEvents {
    @Id
    private int eventid;
    private String publishDate;
    private String eventHeading;
    private String eventBody;
    private String eventLink;

    public int getEventid() {
        return eventid;
    }

    @Override
    public String toString() {
        return "StudentEvents{" +
                "eventid=" + eventid +
                ", publishDate='" + publishDate + '\'' +
                ", eventHeading='" + eventHeading + '\'' +
                ", eventBody='" + eventBody + '\'' +
                ", eventLink='" + eventLink + '\'' +
                '}';
    }

    public void setEventid(int eventid) {
        this.eventid = eventid;
    }

    public String getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(String publishDate) {
        this.publishDate = publishDate;
    }

    public String getEventHeading() {
        return eventHeading;
    }

    public void setEventHeading(String eventHeading) {
        this.eventHeading = eventHeading;
    }

    public String getEventBody() {
        return eventBody;
    }

    public void setEventBody(String eventBody) {
        this.eventBody = eventBody;
    }

    public String getEventLink() {
        return eventLink;
    }

    public void setEventLink(String eventLink) {
        this.eventLink = eventLink;
    }
}
