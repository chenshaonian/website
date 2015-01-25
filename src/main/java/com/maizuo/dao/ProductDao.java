package com.maizuo.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public Map getProductList(int pageNum, int pageSize) {
		String sql = "select * from product_news";
		
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
		
		int total = list.size();
		int start = (pageNum-1)*pageSize;
		int end = pageNum*pageSize;
		int num = 0;
		
		Iterator<Map<String, Object>> it = list.iterator();  
		while(it.hasNext()) {  
		    Map<String, Object> map = it.next();
		    
		    if (start <= num && num < end) {
		    	Map<String, Object> productMap = new HashMap<String, Object>();
			    productMap.put("id", map.get("id"));
			    productMap.put("title", map.get("title"));
			    
			    resultList.add(productMap);
		    }
		    
		    num++;
		} 
		
		Map tmp = new HashMap();
		tmp.put("list", resultList);
		
		Map resultMap = new HashMap();
		resultMap.put("status", 0);
		resultMap.put("totalPage", total);
		resultMap.put("msg", "success");
		resultMap.put("data", tmp);
	
		return resultMap;
		
	}

}
