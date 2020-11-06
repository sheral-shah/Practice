//Java Script
//CREATING CANVAS
size(200,200);
//CREATING SHAPES
point(50,80); //50,80 are to coordinates for the canvas
line(20,30,80,30); //20,20 are the coordinates for the beggining point and 80,30 for the ending point
rect(20,30,40,60); //20,30 are the cooordinates and 40,60 are the width and height of rectangle
//Other ways of creating a rectangle are:
rectMode (CENTER);
rect(20,30,40,60) //In the first code 20,30 was the left point of the rectangle. Here the rectangles will be created around the centre point which will be at 20,30
rectMODE (CORNERS);
rect (40,40,60,60) //Specify coordinates of the upper left and lower right corners
ellipse(20,20,40,40) //20,20 are coordinates 40,40 width and height
ellipseMode (CENTRE);
ellipse(20,20,40,40) //ellipse of size 40,40 will be centred around the coordinate 20,20
ellipseMode (CORNER);
ellipse (20,20,40,40) //20,20 are the upper left cordinates
ellipseMode (CORNERS);
ellipse (20,20,40,40) //20,20 and 40,40 are the upper left and lower right cooordinates


//A DESIGN
size(300,300);
ellipse(150,150,30,30);
ellipse(130,120,40,40);
ellipse(170,120,40,40);
ellipse(185,158,40,40);
ellipse(152,185,40,40);
ellipse(115,158,40,40);
rectMode (CORNER);
rect (0,0,50,45)
rectMode (CORNER);
rect (248,253,50,45)
//

//COLORS & OVERLAPPING SHAPES// 
//Colors are given numbers in processing 0 being black and 255 being white. All in between various shades of grey
size (200,200);
fill(0);
rect(40,50,60,30);
fill(255)
ellipseMode (CENTER);
ellpise (40,50,40,40)
nofill //to un-fill

//A DESIGN//
size(200,200);
background(255,255,0); //Yellow color for the color of the background i.e. canvas
fill(200,80,0); //Brown color
rect(90,150,20,40);
fill(0,255,0); //Green color
triangle(100,50,130,150,70,150); //Each pair of points are one of the three coordinates of a triangle. 100,50 - coordinate 1; 130,150 - coordinate 2; 70, 150-coordinate 3
fill(255,0,0); //Red color
ellipse(100,50,10,10)

//Some rules for color: 
// no color=black, all colors=white, red + green=yellow, red+blue=purple, green+blue=cyan, red+green+blue=white
//In code: all color (white)=fill(255,255,255). Basically follow the simple rule i.e. fill (red,green,blue)=fill(255,255,255)=all colors=white.
//What if we want the brightest red ? - fill(255,0,0) i.e. all of the red and none of the blue and green
//All green? fill(0,255,0); All blue? fill(0,0,255)
//Yellow? fill(255,255,0)
//purple? fill(255,0,255)
//cyan? fill(0,255,255)

strokeWeight(<weight>) //thickness of shape borders
strokeCap(SQUARE)  //For the edges. they can be SQUARE, ROUND OR PROJECT (meaning extended). Default is round
nostroke()

//A DESIGN OF CONCENTRIC RECTANGLES
size(200,200);
background(180,0,255);
fill(255,255,0);
strokeWeight(8)
rectMode (CENTER);
rect(100,100,150,150)
fill(255,120,0);
strokeWeight(6)
rectMode (CENTER);
rect(100,100,120,120)
fill(0,255,220);
strokeWeight(4)
rectMode (CENTER);
rect(100,100,90,90)
fill(0,220,100);
strokeWeight(7)
rectMode (CENTER);
rect(100,100,60,60)
fill(0200,255);
strokeWeight(8)
rectMode (CENTER);
rect(100,100,20,20)
//

//A BAR GRAPH
size(400,400);
background(255,255,255);

fill(0);
strokeWeight(5);
line (50,350,350,350);
line(50,50,50,350)

fill(255,255,0);
strokeWeight(2.5);
rectMode (CORNER);
rect(80,200,40,140)

fill(255,70,0);
strokeWeight(4);
rectMode (CORNER);
rect(140,150,40,190)

fill(0,255,0);
strokeWeight(2.5);
rectMode (CORNER);
rect(205,270,40,70)

fill(255,0,155);
strokeWeight(4);
rectMode (CORNER);
rect(270.5,160,40,180)

fill(0);
text("GRAPH", 150,50)
//

//A SHORTER WAY TO CODE
size(150,200);
background(150,40,40);
int h = 10; //can set width also 
rect(10,10,100,h)
h=h*10 //Changing the value of h 
h=h*30// Changing it again
//ANOTHER EXAMPLE
size(150,200);
background(150,40,40);
int h = 10;
int w = 100;
rect(10,10,w,h)
h=h*2
rect(10,50,w,h)
h=h*2
rect(10,100,w,h)
//

//ANOTHER EXAMPLE
size(150,200);
background(150,40,40);
int h = 10;
int w = 100;
int y = 20;

int distance = 10
rect(10,y,w,h)

h=h*2
y = y + distance+h
rect(10,y,w,h)

h=h*2
y = y + distance+h
rect(10,y,w,h)
//


  
