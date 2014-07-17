$(document).ready(function () {

    var $arrayCoord;
    var $Score;
    $("#inputName").hide();
    $("#gameTable").hide();

    var $PlayerName = $("#nameBox").val();
    var $Score;
    var $Level;
    var $Life;
    var $StartTime;
    var $Timer;

    if ($PlayerName !== "" && $PlayerName !== undefined) {
        $("#inputName").hide();
        $("#gameTable").show();
    }
    else {
        $("#inputName").show();
        $("#gameTable").hide();
    }

    $("#nameBtn").click(function () {
        $PlayerName = $("#nameBox").val();
        $("#inputName").hide();
        $("#PlayerName").html($PlayerName);
        initializeGame();
        $("#gameTable").show();
        $arrayCoord = getCoord();
        setCoord();
        $StartTime = $.now();
        setDisplayData();
    });

    $("#bird").on("click", function (e) {
        e.preventDefault();
        $Score += 100;

        var $elapsed = $.now() - $StartTime;

        var $dataModel = {
            PlayerName: $PlayerName,
            xBird: $arrayCoord[0],
            yBird: $arrayCoord[1],
            TimeInMs: $elapsed
        };

        $.ajax({
            type: "Post",
            url: "Home/SaveToDb",
            data: $dataModel,
            dataType: "json",
            success: function () {
                $arrayCoord = getCoord();
                setCoord();
                $StartTime = $.now();
                setDisplayData();
                $("#Score").html("Score: " + $Score);
                setLevel();
                //setTimerInterval();
            }
        });

    });

    function getCoord() {
        var $bird = $("#bird");
        var $field = $("#playField");
        var x = Math.round(Math.random() * ($field.width() - $bird.width()));
        var y = Math.round(Math.random() * ($field.height() - $bird.height()));
        return [x, y];
    }

    function setCoord() {
        $("#bird").css({
            'left': $arrayCoord[0] + "px",
            'bottom': $arrayCoord[1] + "px"
        });
    }

    function setDisplayData() {
        $("#Xcoord").text("X: " + $arrayCoord[0]);
        $("#Ycoord").text("Y: " + $arrayCoord[1]);
    }

    function initializeGame() {
        $("#Score").html("Score: " + ($Score = 0));
        $("#Level").html("Level: " + ($Level = 0));
        $("#Life").html("Life: " + ($Life = 3));
    }  

    function setLevel() {
        $Level = Math.floor($Score / 1000);
        $("#Level").html("Level: " + $Level);
    }
            
    //function setTimerInterval() {
    //    if ($Timer != 0) {
    //        clearInterval($Timer);
    //    }
    //    var $time;

    //    $Timer = setInterval(function () {
    //            $Life = $Life - 1;
    //            switch ($Level) {
    //                case (0):
    //                    $time = 5000;
    //                    break;
    //                case (1):
    //                    $time = 4000;
    //                    break;
    //                case (2):
    //                    $time = 3000;
    //                    break;
    //                case (3):
    //                    $time = 2000;
    //                    break;
    //                case (4):
    //                    $time = 1500;
    //                    break;
    //                default:
    //                    $time = 1000;
    //            };
    //    }, $time);

    //    $("#Life").html("Life: " + $Life);
    //}

});

