package com.maizuo.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.maizuo.service.ProductService;

@Controller
@RequestMapping("/")
public class ProductController {
	
	@Autowired
	private ProductService productService;

	@RequestMapping(value = {"/getChanpinzixunList"},method = RequestMethod.POST)
	public ResponseEntity<?> login(HttpServletRequest request, HttpServletResponse response) {
		int pageNum = Integer.parseInt(request.getParameter("pageNum"));
		int pageSize = Integer.parseInt(request.getParameter("pageSize"));
		
		return new ResponseEntity(productService.getProductList(pageNum, pageSize), HttpStatus.OK);
	}
}
