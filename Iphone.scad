
difference(){
color("cyan")
    translate([0, 3, 0])
        linear_extrude(height = 12.8)
             polygon( points=[[0,0],[64.9,0],[64.9,89],[76.9,89],[76.9,124],[0,124]] );
color("yellow")
    translate([0, 3, 3])
        linear_extrude(height = 9.8)
             polygon( points=[[3,0],[61.9,0],[61.9,124],[1.9,124],[1.9,77],[3,77]] );
}
color("red")
    translate([0, -0, 0])
        linear_extrude(height = 12.8)
             polygon( points=[[0,0],[64.9,0],[64.9,3],[0,3]] );
color("red")
    translate([0, 3, 10.8])
        linear_extrude(height = 2)
             polygon( points=[[3,0],[4.5,0],[4.5,124],[1.9,124],[1.9,77],[3,77]] );
color("red")
    translate([0, 3, 10.8])
        linear_extrude(height = 2)
             polygon( points=[[60.4,0],[61.9,0],[61.9,124],[60.4,124]] );

color("red")    
    translate([69.9,98.6,-5])
            cylinder(d=7.8, h=5);
color("red")    
    translate([33.9,98.6,-5])
            cylinder(d=7.8, h=5);
