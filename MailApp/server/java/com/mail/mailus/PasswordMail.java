package com.mail.mailus;
import java.util.Date;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
	public class PasswordMail {
		public PasswordMail() {
		}
				public boolean sendMail(String to,String msgs,String s) throws MessagingException
		{
			String host="smtp.gmail.com";
String username="yourmailid";//emailid
			String password="yourpassword";//emailid password
			String subject=s;
String body = msgs;
	 Properties properties = new Properties();
     properties.put("mail.smtp.host", host);
     properties.put("mail.smtp.port", "587");
     properties.put("mail.smtp.auth", "true");
     properties.put("mail.smtp.starttls.enable", "true");
     properties.put("mail.smtp.ssl.trust", "smtp.gmail.com");
//*** BEGIN CHANGE
     properties.put("mail.smtp.user", username);

     // creates a new session, no Authenticator (will connect() later)
     Session session = Session.getDefaultInstance(properties);
//*** END CHANGE

     // creates a new e-mail message
     Message msg = new MimeMessage(session);

     msg.setFrom(new InternetAddress(username));
     InternetAddress[] toAddresses = { new InternetAddress(to) };
     msg.setRecipients(Message.RecipientType.TO, toAddresses);
     msg.setSubject(subject);
     msg.setSentDate(new Date());
     // set plain text message
     msg.setText(body);

//*** BEGIN CHANGE
     // sends the e-mail
     Transport t = session.getTransport("smtp");
     t.connect(username, password);
     t.sendMessage(msg, msg.getAllRecipients());
     t.close();
//*** END CHANGE
			return true;
		}
				public boolean sendM(String to, String msg, String subject){
					
					return false;
				}
	}
				