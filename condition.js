let pill;
console.log(pill)

if(pill ==  'red') 
{
    console.log('reality');
}
else if(pill =='blue')
{
    console.log('stay in matrix');
}
else{
    console.log('kill yourself');
}


switch(pill)
{
    case 'red':
        {
            console.log('reality');
            break;
        }
        case 'blue' :
            {
                console.log('stay in matrix');
                
            }
            default:
                {
                    console.log('kill yourself');
                    break;
                }
}

 
let number = 'one'
if(number % 2 ==0)
{
    console.log('number is even' , number);
}
else if(number % 2 ==1)
{
    console.log('number is odd' , number);
}
else 
{
    console.log('invalid input');
}


let year;
if(year % 100 == 0){
    if(year % 400 ==0){
        console.log('leap year' , year);
    }
    else{
        console.log('not a leap year');
    }
}
else if(year % 4 == 0){
    console.log('leap year');
}
else{
    console.log('not a leap year');
}


let marks=79;
let grade;
if(marks>=80)
{
    grade ='a';
}
else if(marks<80 && marks >=60)
{
    grade='b';
}
else if(marks<60 
    && marks>40)
    {
        grade='c';
    }
else if(marks<40 && marks>0)
{
    grade='d';
}
else
{
    grade='undefined';
}
console.log('grade', grade);


let a=3, b=4, c=3;
if(a==b && b==c)
{
    console.log('triangle is equivalent');
}
else if(a==b || b==c|| c==a)
{
    console.log('traingle is isoceles');
}
else{
    console.log('invalid');
}