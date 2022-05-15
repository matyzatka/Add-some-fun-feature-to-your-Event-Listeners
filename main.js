$('#firstButton').click(() => {
    console.log('Yeah, you clicked me.');
});

$('#secondButton').click(() => {
    $('#firstButton').text("Text changed.");
});

$('#thirdButton').one('click',function(){
    var inputColor = $("#colorInput").val();
    console.log(inputColor);
    $('#firstButton').css("background-color", inputColor);
    $('#secondButton').css("background-color", inputColor);
    $('#thirdButton').css("background-color", inputColor);
});