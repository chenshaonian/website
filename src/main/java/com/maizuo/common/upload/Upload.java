package com.maizuo.common.upload;


import java.io.File;
import java.io.FileInputStream;

public class Upload implements IUpload {

	public String upload(File file, String userId) {

		String fileName = "";
		String path = "/usr/" + userId + "/";
		try {
				boolean boo = false;
				FileInputStream is = new FileInputStream(file);
				String fileMd5 = "";
				fileName = file.getName();
				String fileExtName = fileName.substring(fileName.lastIndexOf("."), fileName.length());
				fileName = path + fileMd5 + fileExtName;
				if (boo) {
					fileName= "123";
				} else {
					fileName = "";
				}
		} catch (Exception e) {
			fileName = "";
			e.printStackTrace();
		}
		return fileName;
	}
	
	public String _upload(File file,String fileName, String userId) {
//		ServerConfig serverConfig=ServerConfig.getInstance();
//		Configuration configuration = serverConfig.getConfigure();
//
//		UpYun upYun = new UpYun(configuration.getString("bucketName"), configuration.getString("bucketUserName"),configuration.getString("bucketPassWord"));
		String path = "/usr/" + userId + "/";
		try {
//			if (upYun.mkDir(path)) {
				boolean boo = false;
				FileInputStream is = new FileInputStream(file);
				String fileMd5 = "";
				String fileExtName = fileName.substring(fileName.lastIndexOf("."), fileName.length());
				fileName = path + fileMd5 + fileExtName;
//				boo = upYun.writeFile(fileName, is);
//				if (boo) {
//					fileName= configuration.getString("bucketUrl") + fileName;
//				} else {
					fileName = "";
//				}
//			} else {
//				return "";
//			}
		} catch (Exception e) {
			fileName = "";
			e.printStackTrace();
		}
		return fileName;
	}

	public String ajaxUpload(File file, String userId) {

		String fileName=file.getName();
		
		String path = "/usr/" + userId + "/";
		try {
			
//			String realPath=configuration.getString("userImageTempPath");
//
//			IOUtils.copy(JsonUtil.getRequest().getInputStream(), new FileOutputStream(new File(realPath + fileName)));
			
			//File file=new File(realPath + fileName);
			
				boolean boo = false;
				FileInputStream is = new FileInputStream(file);
				String fileMd5 = "";
				String fileExtName = fileName.substring(fileName.lastIndexOf("."), fileName.length());
				fileName = path + fileMd5 + ".png";
//				boo = upYun.writeFile(fileName, is);
		} catch (Exception e) {
			fileName = "";
			e.printStackTrace();
		}
		return fileName;
	}

}
