package com.maizuo.web.controller;

/**
 * Created by Table on 14-2-31.
 */

import com.maizuo.domain.Result;
import com.maizuo.entity.User;
import com.maizuo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
public class IndexController extends BaseController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = {"/", "/index"},method = RequestMethod.GET)
	public String index(HttpServletRequest request, ModelMap m) {
		User user = new User();//userService.getUserById(1);
		m.put("user", user);
		return "view/index";
	}
    @RequestMapping(value = {"/news" },method = RequestMethod.GET)
    public String news(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/news";
    }
    @RequestMapping(value = {"/product" },method = RequestMethod.GET)
    public String product(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/product";
    }
    @RequestMapping(value = {"/joinus" },method = RequestMethod.GET)
    public String joinUs(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/joinus";
    }
    @RequestMapping(value = {"/diaofashishang" },method = RequestMethod.GET)
    public String diaofashishang(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/diaofashishang";
    }
    @RequestMapping(value = {"/diaofazhishi" },method = RequestMethod.GET)
    public String diaofazhishi(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/diaofazhishi";
    }
    @RequestMapping(value = {"/diaofajianshang" },method = RequestMethod.GET)
    public String diaofajianshang(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/diaofajianshang";
    }
    @RequestMapping(value = {"/diaofazixun" },method = RequestMethod.GET)
    public String diaofazixun(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/diaofazixun";
    }
    @RequestMapping(value = {"/zoujindsn" },method = RequestMethod.GET)
    public String zoujindsn(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/zoujindsn";
    }
    @RequestMapping(value = {"/contactus" },method = RequestMethod.GET)
    public String contactus(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/contactUs";
    }
    @RequestMapping(value = {"/map" },method = RequestMethod.GET)
    public String map(HttpServletRequest request, ModelMap m) {
        return "view/map";
    }



    @RequestMapping(value = {"/admin"},method = RequestMethod.GET)
    public String admin(HttpServletRequest request, ModelMap m) {
        User user = new User();//userService.getUserById(1);
        m.put("user", user);
        return "view/admin";
    }

    @RequestMapping(value = {"/login"},method = RequestMethod.GET)
	public String login(HttpServletRequest request, ModelMap m) {
		return "view/login";
	}

	@RequestMapping("/user/{userId}")
	@ResponseBody
	public Result user(HttpServletRequest request, ModelMap mm, @PathVariable int userId) {
//		User user = new User();
		User user=userService.getUserById(userId);
		if (user.getId() > 0) {
			return result(0, user, "拉取用户数据成功!");
		} else {
			return result(1, null, "拉取用户数据失败,不存在该用户!");
		}
	}
}