package com.gnu.ac;

public class myClass {
	public String checkDataType(String type){
		if(type.equals("int")){
			return "From :"+Integer.MIN_VALUE +" to " + Integer.MAX_VALUE;
		} else if (type.equals("char")) {
			return "From :"+(int)Character.MIN_VALUE +" to " + (int)Character.MAX_VALUE;
		} else if(type.equals("float")) {
			return "From :"+Float.MIN_VALUE +" to " + Float.MAX_VALUE;
		} else if(type.equals("double")){
			return "From :"+Double.MIN_VALUE +" to " + Double.MAX_VALUE;
		} else {
			return "Invalid DataType Selected";
		}
	}
	
	public static String checkCharInfo(String type){
		String result="";
		boolean flag=false;
		if(Character.isDigit(type.charAt(0))){
			result+="<h3>Numeric Digit</h3>";
			flag=true;
		}
		if(Character.isUpperCase(type.charAt(0))){
			result+="<h3>Uppercase Alphabet</h3>";
			flag=true;
		}
		if(Character.isLowerCase(type.charAt(0))){
			result+="<h3>Lowercase Alphabet</h3>";
			flag=true;
		}
		if(Character.isMirrored(type.charAt(0)))
			result+="<h3>Mirrored</h3>";
		if(Character.isWhitespace(type.charAt(0)))
			result+="<h3>Space Character</h3>";
		if(Character.isSurrogate(type.charAt(0)))
			result+="<h3>Surrogate Character</h3>";
		if(!flag){
			result+="<h3>Symbols</h3>";
		}
		return result;
		
	}
}
