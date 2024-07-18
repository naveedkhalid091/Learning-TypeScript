
class Point{
    // Attributes comes first
    // then apply methods/function e.g constructor 
    x:number;   // attribute 1
    y:number;   // attribute 2

    constructor(x:number, y:number){
        // Initialization of Values through "this" keyword. 
        // This keyword is used to access the properties and methods of the current object.
        // the context of "this" depends on how the function is used. 
        this.x=x;   // this.x (it is attribute) and =x is parameter value.  
        this.y=y;   // this.y (it is attribute) and =y is parameter value.

    }
}

// You can't access the values of class unles you make an object of particular class.
// Same as you can't access rooms in your home through Maps only. You need to built 
// Home(Objects) to access the properties of Map(Class). 

/*
    * In the class object, the first method applied is called, "a constructor method".  
    * Constructor is a special fucntion bcz When you make an object of a class then 
      by default the calling function is relates to the constructor function.
    * When you make an object in the class then all the attributes and methods inside it 
      can be utillized.
    * We normally initialize the attributes with values inside the constructor function.
    * You can't have rest parameters inside the constructor function.

 */

// Class object is made with a "new" keyword.

const point=new Point(5,10);

// Now point is "object" and Point is "Map/Blueprint". 
// You can access Map properties through object(point).  

console.log(point);
console.log(point.x);
console.log(point.y);

      /* There are three types of Attributes - Public, private and protected, 
you can't access private and protected attributes outside the boundry of class 
For Example
*/


class Point2{
    a:number;  
    private b:number;  // private
    protected c:number // protected
    constructor(a:number, b:number, c:number){
        this.a=a;     
        this.b=b;   
        this.c=c;
    }
}

const point2=new Point2(12,4,1) 

console.log(point2.a)
//console.log(point2.b)  Error: You can't access b bcz of private.
//console.log(point2.c)  Error: You can't access b bcz of protected. 
console.log(point2)  // Will print both values bcz object has two irrespective of private.  

class Point3{
        x:number;
        private y:number;
        protected z:number;

            constructor(x:number,y:number,z:number){
                this.x=x;
                this.y=y;
            this.z=z
        }
    
}

const point3=new Point3(1,2,3); 

console.log(point3);
