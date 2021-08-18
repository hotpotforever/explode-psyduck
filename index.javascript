var faceW = 170;
var faceX = 200;
var faceY = 165;


draw = function() {
    background(232, 217, 144);
    
    strokeWeight(5);
    line(faceX, faceY - 15/34 * faceW, faceX, faceY - 19/34 * faceW);
    line(faceX, faceY - 15/34 * faceW, faceX-20, faceY - 19/34 * faceW);
    line(faceX, faceY - 15/34 * faceW, faceX+20, faceY - 19/34 * faceW); // hair
    
    
    strokeWeight(1);
    fill(240, 209, 53);
    ellipse(faceX, faceY, faceW, faceW-20); // face
    
    fill(245, 242, 210);
    ellipse(faceX, faceY+5/17*faceW, faceW-faceW*9/17, faceW-7/17*faceW); // mouth
    
    fill(252, 249, 249);
    ellipse(faceX-4/17*faceW, faceY-3/34*faceW, faceW-15/17*faceW, faceW-15/17*faceW);
    ellipse(faceX+4/17*faceW, faceY-3/34*faceW, faceW-15/17*faceW, faceW-15/17*faceW); // eyes
    
    fill(0, 0, 0);
    ellipse(faceX-7/34*faceW, faceY-3/34*faceW, faceW-33/34*faceW, faceW-33/34*faceW);
    ellipse(faceX+7/34*faceW, faceY-3/34*faceW, faceW-33/34*faceW, faceW-33/34*faceW); //eyeballs
    
    faceW += 5;
    
};
