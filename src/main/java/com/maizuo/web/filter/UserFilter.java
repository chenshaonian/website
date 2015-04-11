package com.maizuo.web.filter;

import com.maizuo.util.Util;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLDecoder;


@Component
public class UserFilter  implements Filter {
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {

	}

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpResponse = (HttpServletResponse) servletResponse;
        String requestURI = httpRequest.getRequestURI();
        requestURI = URLDecoder.decode(requestURI, "utf-8");
//        if (requestURI.indexOf("/manager") < 0) {
            System.out.println("im in manager:");
            filterChain.doFilter(httpRequest, httpResponse);
//        } else {
//            String router = "";
//            if (requestURI.trim().equals("") || requestURI.trim().equals("/")) {
//                router = "index";
//            } else {
//                String[] path = requestURI.split("/");
//                router = path[1];
//            }
//            String returnPath = httpRequest.getHeader("referer");
//            if (returnPath == null) {
//                returnPath = "/";
//            }
//            Boolean isExperiment = "1".equals(servletRequest.getParameter("experiment"));
//            if (isExperiment) {
//                httpRequest.getSession().setAttribute("ISEXPERIMENT", isExperiment);
//            }
//            httpRequest.setAttribute("router", "view/" + router);
//            httpRequest.setAttribute("returnPath", returnPath);
//            System.out.println("requestURI:" + requestURI);
//            System.out.println("router:" + router);
//            System.out.println("returnPath:" + returnPath);

//            if("wuqingquanS".equals(httpRequest.getSession().getAttribute("username"))){
//                System.out.println("go manager");
//
//                filterChain.doFilter(httpRequest, httpResponse);
//            }else{
//                System.out.println("GoLogin");
//                servletRequest.getRequestDispatcher("/login").forward(servletRequest, servletResponse);
//            }
////            return;
////            filterChain.doFilter(httpRequest, httpResponse);
//
//        }
    }

	@Override
	public void destroy() {

	}
}
