
x = 0;
y = 0;

screen_width = 0;
screen_height = 0;// washing hands, i have returned 

apple = ""; // image
draw_apple = ""; // set/not set

to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
    apple = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
    to_number = Number(content);

    if (Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
        draw_apple = "set";
    }
    else
    {
        document.getElementById("status").innerHTML = "The speech has not recognized a number."
    }
}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;

  canvas = createCanvas(screen_width, screen_height-150);
  canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
      for(var i = 0; i < to_number; i++)
      {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, 50, 50);
      }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + " Apples drawn";
    speak();
    draw_apple = "";
    
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = ""; 
    speak_data = "";
}


// shh :)

/*
x = 0;
y = 0;

draw_circle ="";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "The system is listening, please speak.";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "speech recognized :D, speech: " + content;
    if(content == "apple")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600); // why Math.floor (its a weird name) // doesnt "Math.RoundToInt() look better"

        document.getElementById("status").innerHTML = "Apple Detected";
        draw_circle = "set";
    }
}

function setup()
{
    canvas = createCanvas(900, 600);
}

function draw()
{
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100.000000000);
        circle(x,y,radius);


        /*
        for(i = 0; i < 50; i++)
        {
            circle(x+ Math.random() * 900.000000000,y+ Math.random() * 600.000000000,radius+ Math.random() * 1000.000000000);
        }
        */
        //document.getElementById("status").innerHTML = "apple drawn";
        //draw_circle = "";
  //  }
/*
    if(draw_rect == "set") // almost forgot how to ctrl c + ctrl v
    {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "apple drawn :D";
        draw_rect = ""; // null nullnullnullnullnulnullnullnullnull

    }
}
*/