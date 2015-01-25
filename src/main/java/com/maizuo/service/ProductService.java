package com.maizuo.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maizuo.dao.ProductDao;

@Service
public class ProductService {
	@Autowired
	private ProductDao productDao;
	
	public Map getProductList(int pageNum, int pageSize) {
		
		return productDao.getProductList(pageNum, pageSize);
	}
}
