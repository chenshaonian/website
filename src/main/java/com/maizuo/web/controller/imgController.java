package com.maizuo.web.controller;

import com.maizuo.domain.Result;
import com.maizuo.domain.Result;
import com.maizuo.service.ProductService;
import net.sf.json.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Controller
@RequestMapping("/pic")
public class ImgController {


    @RequestMapping("/upload")
    @ResponseBody
    public Result uploadPic(@RequestParam(value = "file", required = false) MultipartFile file,HttpServletRequest request){
        if(file==null){
            return new Result(900001,"","上传失败:文件为空");
        }
        String fileName=file.getOriginalFilename();
        //获取上传文件扩展名
        String fileExt = fileName.substring(fileName.lastIndexOf(".")+1,fileName.length());
        //对扩展名进行小写转换
        fileExt = fileExt.toLowerCase();
        //图片文件过滤
        if(!"jpg".equals(fileExt) && !"jpeg".equals(fileExt) && !"png".equals(fileExt)
                && !"bmp".equals(fileExt) && !"gif".equals(fileExt)){
            return new Result(900001,"","上传失败:无效图片文件类型");
        }

        long fileSize=file.getSize();
        JSONObject json=new JSONObject();
        if(fileSize<=0){
            return new Result(900001,"","上传失败:文件为空");
        }else if(fileSize>2000000){
            return new Result(900001,"","上传失败:文件大小不能超过2M");
        }
        File tmpFile=null;
        if (!file.isEmpty()) {
            String uploadPath=request.getSession().getServletContext().getRealPath("/") +"/upload/";
            File uploadDir=new File(uploadPath);

            if(!uploadDir.exists()||!uploadDir.isDirectory()){
                uploadDir.mkdir();
            }
            try {
                Date now=new Date();
                String tmpFileName=String.valueOf(fileName+"_"+now.getTime())+Math.round(Math.random()*1000)+"."+fileExt;
                // 文件保存路径
                String tmpFilePath = uploadPath+ tmpFileName;
                tmpFile=new File(tmpFilePath);
                // 转存文件
                file.transferTo(tmpFile);
                //上传到图片服务器
                json.put("fileName", tmpFileName);
                String url = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath() + "/upload/" + tmpFileName;
                json.put("url", url);
            } catch (Exception e) {
                e.printStackTrace();
                return new Result(900001,"","上传失败:文件上传失败");
            }finally{
            }
        }
        return new Result(0,json,"success");
    }
    @RequestMapping("/test")
    public void Test(HttpServletRequest request){
        System.out.println("request.getRequestURI()==="+request.getRequestURI());
        System.out.println("equest.getServletPath()==="+request.getServletPath());
        System.out.println("getContextPath=="+request.getContextPath());
        System.out.println("equest.getSession().getServletContext().getRealPath=="+request.getSession().getServletContext().getRealPath("/"));
        System.out.println("request.getSession().getServletContext().getRealPath(request.getRequestURI())==="+request.getSession().getServletContext().getRealPath(request.getRequestURI()));
        System.out.println("request.getScheme()=="+request.getScheme());
        System.out.println("request.getServerName()=="+request.getServerName());
        System.out.println("request.getServerPort()=="+request.getServerPort());
        System.out.println("request.getRequestURI()=="+request.getRequestURI());

    }


}
