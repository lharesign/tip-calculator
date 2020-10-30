$(document).ready(function () {

    $(".page-section").append("<h4 class=\"title\">Use this form to calculate how much you should tip in a restaurant</h4>");
    $(".page-section").append("<div id=\"calculator-box\" class=\"container\"></div>");
    $(".container").eq(1).append("<div class=\"row\"><div class=\"col-lg-8 mx-auto\"><div id=\"contactForm\"></div></div></div>");
    
    $("#contactForm").append("<div class=\"control-group\"></div>")
    $(".control-group").append("<div class=\"form-group\">");
    $(".form-group").append("<p>How much was your bill?</p>");
    $(".form-group").append("<input id=\"bill-total\" class=\"form-control\" type=\"number\" min=\"0\" step=\".01\" placeholder=\"Bill Amount (kr)\"></input>");
    
    $("#contactForm").append("<div class=\"control-group\"></div>")
    $(".control-group").eq(1).append("<div class=\"form-group\">");
    $(".form-group").eq(1).append("<p>How was your service?</p>");
    $(".form-group").eq(1).append("<select name=\"service\" id=\"service\" class=\"form-control\" form=\"serviceform\">\
                                    <option value=\"excellent\">Excellent</option>\
                                    <option value=\"good\">Good</option>\
                                    <option value=\"average\">Average</option>\
                                    <option value=\"poor\">Poor</option>\
                                </select>");
                                
    $("#contactForm").append("<div class=\"control-group\"></div>")
    $(".control-group").eq(2).append("<div class=\"form-group\">");
    $(".form-group").eq(2).append("<p>How many people are splitting the bill?</p>");
    $(".form-group").eq(2).append("<input id=\"people\" class=\"form-control\" type=\"number\" min=\"1\" placeholder=\"Number of People\"></input>");

    $("#contactForm").append("<div class=\"form-group\"></div>")
    $(".form-group").eq(3).append("<button class=\"btn btn-primary btn-xl\" id=\"calculate-btn\" type=\"submit\">Calculate</button>");
    
    $("#contactForm").append("<div id=\"output-div\"><p></p></div>");



    $("#calculate-btn").click(function () {
        console.log("firing");
        let total = $("#bill-total").val();
        let people = $("#people").val();
        let service = $("#service").val();
        let multiplier;
        
        switch (service) {
            case "excellent":
                multiplier = 0.15;
                break;
            case "good": 
                multiplier = 0.12;
                break;
            case "average": 
                multiplier = 0.1;
                break;
            case "poor": 
                multiplier = 0;
                break;
            default: 
                break;
        }
        
        let tip = Math.round((total * multiplier) / people);

        if((!isNaN(tip)) && (people === "1") && (tip != 0)) {
            $("#output-div p").text("The total to tip is: " + tip + "kr");
        } else if (tip === 0) {
            $("#output-div p").text("Was it that bad? If so, just round the bill up to the nearest 10kr");
        } else if (!isNaN(tip)) {
            $("#output-div p").text("The total to tip is: " + tip + "kr each");
        } else {
            alert("You need to fill in/select your answers before you can calculate the tip");
        }

    });
});

