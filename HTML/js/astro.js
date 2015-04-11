/**
 * Created by skumo on 11/04/15.
 */


$(document).get(function(){
    var baseEye = 10;
    var bloodPressure = 140 / 90;
    var aerobicWorkCapacity = 32.9;
    var running = 215;
    var swimming = 19;
    var skiRace = 21;

//    $("#submitData").on("click", function() {
//        alert( "click Handler for is called.");
//    });

//    $("#submitData").closest("form").submit(function () {
//      alert("Click Handler is called");
//    });
});

function foo(){
        var baseEye = 10;
        var bloodPressure = 140 / 90;
        var aerobicWorkCapacity = 32.9;
        var running = 215;
        var swimming = 19;
        var skiRace = 21;

        alert("First Alert");

        if (document.getElementById('eye') < baseEye){
            alert("Do something");
        }
    }



//Criteria 1 : Eye Sight  20 / 20
//Criteria 2: Blood Pressure - 140 / 90
//Criteria 3: Aerobic Work Capacity - Above 32.9 ml\kg\min
//Criteria 4: Running  - 3 mins 35 Secs - 215 Seconds
//Criteria 5: Swimming - 19sec - 25 mtrs
//Criteria 6: Ski Race 5kms - 21mins
