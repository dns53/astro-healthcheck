function foo() {
    var bloodPressure = 140 / 90;
    var baseEye = 10;
    var aerobicWorkCapacity = 32.9;
    var running = 3;
    var swimming = 19;
    var skiRace = 21;

    var userBP = document.getElementById("Criteria1").value;
    //var userEye = document.getElementById("Criteria2").value;
    var userAWC = document.getElementById("Criteria3").value;
    var userRun = document.getElementById("Criteria4").value;
    var userSwim = document.getElementById("Criteria5").value;
    var userSki = document.getElementById("Criteria6").value;


    var userEyeN = document.getElementById("eye_numerator").value;
    var userEyeD =   document.getElementById("eye_denominator").value;

        console.log(userEyeN+"  "+ userEyeD);
    var userBPs = document.getElementById("blood_systolic").value;
    var userBPd = document.getElementById("blood_diastolic").value;

        console.log("blood " +userBPs+"  "+ userBPd);
        console.log( (userBPs == 90) + " " + (userBPd == 60)+ " " +((userBPs == 90) && (userBPd==60)));
    if ((userBPs == 90) && (userBPd==60)) {
        console.log(" You are fine");
        document.getElementById('1').innerHTML =" You are doing just fine here";
    }
    else if ((userBPs < 90) && (userBPd < 60)){
        document.getElementById('1').innerHTML =" You have low blood pressure";
    }
    else if ((userBPs >=120) && (userBPd >= 80)){
        document.getElementById('1').innerHTML =" You have high blood pressure";
    }
    else {
        console.log("You need to work on your BP");
        document.getElementById('1').innerHTML = 'Your Blood Pressure needs to be worked on';
    }
    
    
    if (userEyeN < userEyeD) {
        document.getElementById('2').innerHTML = 'Your are near sighted';
    }
    else if (userEyeN > userEyeD) {
        document.getElementById('2').innerHTML = 'Your are far sighted';
    }
    else {
        document.getElementById('2').innerHTML = " You are doing just fine here";
    }

    if (userAWC < 32) {
        document.getElementById('3').innerHTML = 'Your AWC is ' + userAWC + 'ml\\kg\\min.';
    }

    else {
        document.getElementById('3').innerHTML = " You are doing just fine here";
    }

    if(userRun > 3){
        document.getElementById('4').innerHTML = 'Your Running at ' + userRun + 'mins.';
    }
    else {
        document.getElementById('4').innerHTML = " You are doing just fine with Running";
    }

    if(userSki > 21){
        document.getElementById('6').innerHTML = 'Your Ski Levels are at ' + userSki + 'mins.';
        }
    else {
        document.getElementById('6').innerHTML = " You are doing just fine with Skiing";
    }

    if(userSwim > 19){
        document.getElementById('5').innerHTML = 'Your Swimming levels are at ' + userSwim + 'mins.';
    }
    else {
        document.getElementById('5').innerHTML = " You are good swimmer";
    }
}


