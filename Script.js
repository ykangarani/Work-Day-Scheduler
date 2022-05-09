// import moment from 'moment';
$(document).ready(function () {
    $("#currentDay").text(moment().format('DD MMMM YY'));

    function timeColor() {
        var currentHour = moment().hours();
        $(".time-block").each(function() {
            var hour = parseInt($(this).attr("id"))
            
            if (hour < currentHour) {
                $(this).addClass("past")
            } else if (hour === currentHour) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }
    timeColor()

    $(".saveBtn").on("click", function () {
        var message = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, message)
    })
})


