package com.rakoch.portfolio.controllers;


import com.rakoch.portfolio.utilityClasses.DateManipulation;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDate;

@Controller
@RequestMapping("")
public class MainController {

    @GetMapping()
    public String displayMain(Model model){
        model.addAttribute("date", DateManipulation.displayDateInEEEEMMMdYYYYFormat(LocalDate.now()));
        return "index.html";
    }

}
