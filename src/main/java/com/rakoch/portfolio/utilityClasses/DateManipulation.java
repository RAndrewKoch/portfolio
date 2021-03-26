package com.rakoch.portfolio.utilityClasses;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DateManipulation {

    public static String displayDateInEEEEMMMdYYYYFormat(LocalDate localDate){
        final DateTimeFormatter EEEEMMMdYYYYFormat = DateTimeFormatter.ofPattern("EEEE MMM d, YYYY");
        return  EEEEMMMdYYYYFormat.format(localDate);
    }
}
