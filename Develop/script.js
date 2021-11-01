$(document).ready(function () {



    $(".saveBtn").on('click', function() {
      var listItem = $(".description").val();
      console.log(listItem);
      window.localStorage.setItem("listItem");
    })



    function timeTracker() {
        //Display today's time and date using moment
        var currentTime = moment().format('H');
        console.log(currentTime);
        //get number from time block id 
        $(".time-block").each(function () {
            var scheduleTime = parseInt($(this).attr("id"));
            console.log(scheduleTime);

        //compare the schedule number to the time and connect to colors
        //if the current time is greater, boxes are gray
            if (scheduleTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        //if the current time equals the schedule time, box is red
                else if (scheduleTime === currentTime) {
                    $(this).removeClass("future");
                    $(this).addClass("present");
                    $(this).removeClass("past");
                }
        //if the current time is before the scheduled time, boxes are green
                else if (scheduleTime > currentTime) {
                    $(this).addClass("future");
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                }
            }

        )
       
    } 
    timeTracker(); 
})


