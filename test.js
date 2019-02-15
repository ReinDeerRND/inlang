      function check(){

          var number=0;
          var tasks=0;
          var quest=0;
          if(document.getElementById('test-london2').checked &&
            !document.getElementById('test-london1').checked&&
            !document.getElementById('test-london3').checked&&
            !document.getElementById('test-london4').checked) {
            number++;
          } else{}
          if(!document.getElementById('test-london2').checked &&
            !document.getElementById('test-london1').checked&&
            !document.getElementById('test-london3').checked&&
            !document.getElementById('test-london4').checked)
            {} else {tasks++;}
          quest++;

          if(document.getElementById('test-talk1').checked &&
            !document.getElementById('test-talk2').checked&&
            !document.getElementById('test-talk3').checked&&
            !document.getElementById('test-talk4').checked) {
            number++;
          } else{}
          if(!document.getElementById('test-talk1').checked &&
            !document.getElementById('test-talk2').checked&&
            !document.getElementById('test-talk3').checked&&
            !document.getElementById('test-talk4').checked){}
            else{tasks++;}
          quest++;

          if(document.getElementById('car1').checked &&
            !document.getElementById('car2').checked&&
            !document.getElementById('car3').checked&&
            !document.getElementById('car4').checked) {
            number++;
        } else{}
          if(!document.getElementById('car1').checked &&
            !document.getElementById('car2').checked&&
            !document.getElementById('car3').checked&&
            !document.getElementById('car4').checked) {} 
            else{tasks++;}
          quest++;

        if(document.getElementById('day4').checked &&
            !document.getElementById('day2').checked&&
            !document.getElementById('day3').checked&&
            !document.getElementById('day1').checked) {
            number++;
        } else{}
        if(!document.getElementById('day4').checked &&
            !document.getElementById('day2').checked&&
            !document.getElementById('day3').checked&&
            !document.getElementById('day1').checked) {} 
          else{tasks++;}
        quest++;

            if(document.getElementById('zoo2').checked &&
            !document.getElementById('zoo1').checked&&
            !document.getElementById('zoo3').checked&&
            !document.getElementById('zoo4').checked) {
            number++;
        } else{}
        if(!document.getElementById('zoo2').checked &&
            !document.getElementById('zoo1').checked&&
            !document.getElementById('zoo3').checked&&
            !document.getElementById('zoo4').checked) {} 
          else{tasks++;}
        quest++;

       if(document.getElementById('rest1').checked &&
            !document.getElementById('rest2').checked&&
            !document.getElementById('rest3').checked&&
            !document.getElementById('rest4').checked) {
            number++;
        } else{}
        if(!document.getElementById('rest4').checked &&
            !document.getElementById('rest2').checked&&
            !document.getElementById('rest3').checked&&
            !document.getElementById('rest1').checked) {} 
          else{tasks++;}
        quest++;

        if(document.getElementById('brige2').checked &&
            !document.getElementById('brige1').checked&&
            !document.getElementById('brige3').checked&&
            !document.getElementById('brige4').checked) {
            number++;
        } else{}
        if(!document.getElementById('brige2').checked &&
            !document.getElementById('brige1').checked&&
            !document.getElementById('brige3').checked&&
            !document.getElementById('brige4').checked) {} 
          else{tasks++;}
        quest++;

         if(document.getElementById('from-london3').checked &&
            !document.getElementById('from-london1').checked&&
            !document.getElementById('from-london2').checked&&
            !document.getElementById('from-london4').checked) {
            number++;
        } else{}
        if(!document.getElementById('from-london3').checked &&
            !document.getElementById('from-london1').checked&&
            !document.getElementById('from-london2').checked&&
            !document.getElementById('from-london4').checked) {} 
          else{tasks++;}
        quest++;

        if (tasks<quest){document.getElementById('answer').innerHTML="Please, finish the test"}
          else{
            
             if (number==0) {document.getElementById('answer').innerHTML="You've passed the tests with no one correct answers";}
              else if (number==1) { document.getElementById('answer').innerHTML="You've passed the tests with "+number +" correct answer from "+tasks+" tasks";}
              else {document.getElementById('answer').innerHTML="You've passed the tests with "+number+" correct answers from "+tasks+" tasks";}
          }
       if (number==quest) document.getElementById('answer').innerHTML+=". Fantastic!";
      }