$(function(){
	//Завдання 7.1
	//$(".header").css("background", "yellow");
	//Завдання 7.2
	//$(".header").css("font-size", "400%");
	//Завдання 7.3
	//$("#bag").prop("checked", true);
	//Завдання 7.4
	//$("#inch_yes").prop("checked", true);
	//Завдання 7.5
    // $('#my_forma').click(function(){
    //     getInfoMoto();
    // });
    // function getInfoMoto()
    // {
    //     var moto = $("#motoSelect option:selected").text();
    //     var days = $("#daysSelect option:selected").text();
    //     var email = $("#email").val();
    //     var shlem = "";
    //     var bag = "";
    //     var od = "";
    //     var inch = "";

    //     if($('input[type="checkbox"]').eq(0).prop("checked")==true)
    //     {
    //         shlem = $("label[for='shlem']").text();
    //     }
    //     if($('input[type="checkbox"]').eq(1).prop("checked")==true)
    //     {
    //         bag = $("label[for='bag']").text();
    //     }
    //     if($('input[type="checkbox"]').eq(2).prop("checked")==true)
    //     {
    //         od = $("label[for='od']").text();
    //     }

    //     if($("#inch_yes").prop("checked")==true)
    //     {
    //         inch = "Так";
    //     }
    //     else
    //     {
    //         inch = "Ні";
    //     }

    //     $("textarea").text(moto+" на "+days+" днів\n"+email+"\nАксесуари: "+shlem+" "+bag+" "+od+"\nСтраховка: "+inch);
    // };
	//Завдання 7.6
	// $("#radio").css("background", "#E91010");
	// $("#inch_yes, #inch_no").change(function () 
	// {
 //        if ($("#inch_yes").is(":checked")) 
 //        {
 //            $("#radio").css("background", "#FFFFFF");
 //        }
 //        else if ($("#inch_no").is(":checked")) 
 //        {
 //            $("#radio").css("background", "#E91010");
 //        }
 //    });
    //Завдання 7.7
    CheckText();
    $('#email').keyup(function()
    {
        CheckText();
    });
    function CheckText()
    {
        if ($("#email").val().indexOf("Приклад:"))
        {
            $("#email").css("background", "green");
        } 
        else 
        {
            $("#email").css("background", "#E91010");
        }
    };
});