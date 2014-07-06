package controllers;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.poc.bigquery.MainServlet;


@Controller
public class MainController extends MainServlet{
	
	@RequestMapping(value = "/sample", method = RequestMethod.GET)
	public String sample(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException{
		doGet(request, response);
		return "";
	}
	
	@Override
	  protected String getUserId(HttpServletRequest req) throws ServletException, IOException {
	    return UserServiceFactory.getUserService().getCurrentUser().getUserId();
	  }	
	
	}
