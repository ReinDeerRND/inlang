function showTodayDate(){
	  		var todayDate=new Date();
  		var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  		var months=["January","February","March","April","May","June","July","August", "September","October","November","December"];

  		var today="Today is "+weekDays[todayDate.getDay()]+"<br>"+months[todayDate.getMonth()] + " "+todayDate.getDate()+", "+(todayDate.getYear()+1900);
  		return today;
}