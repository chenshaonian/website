package com.maizuo.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by BiaoQier on 2014/9/9 0009.
 */
@Controller
@RequestMapping("/user")
public class UserController {

	@RequestMapping(value = {"/login"},method = RequestMethod.POST)
	public String login(HttpServletRequest request, ModelMap m) {
        System.out.println("user/login");
        String name = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println(name);
        System.out.println(password);
        if(name.equals("wuqingquanS") && password.equals("1")){
            request.getSession().setAttribute("username", "wuqingquanS");
        }
        return "redirect:/manager";
	}
}
