$(document).ready(function () {
    'use strick';
    // Hide and Show Form
    $('#login a.show-register-form').click(function () {
        $('#login').hide();
        $('#register').show();
    });

    $('#register a.show-login-form').click(function () {
        $('#register').hide();
        $('#login').show();
    });

    // Datepicker
    $('.input-group input').each(function () {
        $(this).datepicker();
    });

    // Tabs Wizard
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step, .save-step").click(function (e) {
        var $active = $('.nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    

    // Dropdown Value
    $(".dropdown-menu li a").click(function () {
        $(this).parents(".btn-group").find('.btn-value').html($(this).text());
        $(this).parents(".btn-group").find('.btn-value').val($(this).data('value'));
    });

    // Body Pains

    $('.head-pain-postion').click(function () {
        $('.shoulder-pain-postion span').hide();
        $('.head-pain-postion span').css('display', 'block');
        $('#shoulder_pain').hide();
        $('#head_pain').css('display', 'block');

    });

    $('.shoulder-pain-postion').click(function () {
        $('.head-pain-postion span').hide();
        $('.shoulder-pain-postion span').css('display', 'block');
        $('#head_pain').hide();
        $('#shoulder_pain').css('display', 'block');
    });

});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}

// Start Chart Options 
window.onload = function () {

    CanvasJS.addColorSet("customColor", ["#082058", ]);

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        animationDuration: 2000,
        colorSet: "customColor",
        backgroundColor: "#ececec",
        //	theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod1",
            fontSize: 14,
            fontColor: "#7a7974",
            fontFamily: "Roboto-Regular",
            fontWeight: "bolder",
            borderThickness: 3,
            borderColor: "#082058",
            cornerRadius: 4,
            padding: 8,
            margin: 15
        },
        width:720,
        height: 260,
        dataPointWidth: 60,
        axisY: {
            title: "Odds ratio",
            titleFontSize: 13,
            titleFontColor: "#7a7974",
            labelFontColor: "#7a7974",
            labelFontWeight: "bold",
            titleFontWeight: "bold",
            LabelFontSize: 13,
            tickLength: 0,
            gridColor: "#ececec",
            minimum: 1,
            maximum: 12,
            scaleBreaks: {
                customBreaks: [{
                    startValue: 2,
                    endValue: 3,
                    color: "ececec",
                    type: "straight",
                    autoCalculate: true
			}]
            }
        },
        axisX: {
            labelFontColor: "#7a7974",
            labelFontWeight: "bold",
            labelFontSize: 12
        },
        data: [{
            type: "column",
            yValueFormatString: "",
            dataPoints: [
                {
                    label: "<2 weeks (n=33)",
                    y: 8,
                },
                {
                    label: "2–4 weeks (n=36)",
                    y: 3
                },
                {
                    label: "5–8 weeks (n=42)",
                    y: 5
                },
                {
                    label: "9–12 weeks (n=62)",
                    y: 11
                },
                {
                    label: ">12 weeks (n=16)",
                    y: 6
                },

		]
	}]
    });
    chart.render();

}