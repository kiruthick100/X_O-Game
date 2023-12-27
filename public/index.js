var data=[]
var O=[]
var X=[]


var refernce=0
const marker=(id)=>
{
    if(data.includes(id))
    {
        
    }
    else{

        data=[...data,id]
    if(refernce%2==0)
    {
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).style.display="flex"
        document.getElementById(id).style.justifyContent="center"
        document.getElementById(id).style.alignItems="center"
        X=[...X,id]
        ckecking(id,"X");
    }
    else{
        document.getElementById(id).innerHTML = "O";
        document.getElementById(id).style.display="flex"
        document.getElementById(id).style.justifyContent="center"
        document.getElementById(id).style.alignItems="center"
        O=[...O,id]

        ckecking(id,"O");
    }
    refernce++;
    
    }
    
}
const ckecking=(id,value1)=>
{
    var value=parseInt(id);
    var i=value%10;
    var j=parseInt(value/10);
    var k=1;
    console.log(i,j)
    var check=0;
    while(k<=3)
    {
       
        
        

       
           if(value1=="X")
           {
            
          
            var temp=(10*k)+i
           
             if(X.includes(temp))
             {
                
                check++;
                
             }
           
           }
           else if(value1=="O"){
            var temp=(10*k)+i
            if(O.includes(temp))
            {
                check++;
            }
           }
        k++;  
    }
    if(check>=3)
    {
        alert( " User "+value1+" is the Winner ")
        location.reload()
    }
   k=1;
   check=0;
   while(k<=3)
    {
       
           if(value1=="X")
           {
            var temp=(10*j)+k
            
             if(X.includes(temp))
             {
                check++;
              
             }
           
           }
           else if(value1=="O"){

            var temp=(10*j)+k
            if(O.includes(temp))
            {
                check++;
            }
            
            
           }
        k++;

       
    }
    if(check>=3)
    {
        alert( " User "+value1+" is the Winner ")
        location.reload()
    }
    check=0;
    if(value1=="X")
    {
        var temp1=1;
        var temp2=1;
        while(temp1<=3 && temp2<=3)
        {
            if(X.includes((temp1*10)+temp2))
            {
                check++;
            }
            temp1++;
            temp2++;
        }
        if(check>=3)
        {
            alert( " User "+value1+" is the Winner ")
            location.reload()
        }
        
        check=0
         temp1=1;
         temp2=3;
        while(temp1<=3 && temp2<=3)
        {
            if(X.includes((temp1*10)+temp2))
            {
                check++;
            }
            temp1++;
            temp2--;
        }
        if(check>=3)
        {
            alert( " User "+value1+" is the Winner ")
            location.reload()
        }
    }
    
    else if(value1=="O")
    {
        var temp1=1;
        var temp2=1;
        check=0;
        console.log("O")
        while(temp1<=3 && temp2<=3)
        {
            if(O.includes((temp1*10)+temp2))
            {
                check++;
            }
            temp1++;
            temp2++;
        }
        if(check>=3)
        {
            alert( " User "+value1+" is the Winner ")
            location.reload()
        }
        
        check=0
         temp1=1;
         temp2=3;
        while(temp1<=3 && temp2<=3)
        {
            if(O.includes((temp1*10)+temp2))
            {
                check++;
            }
            temp1++;
            temp2--;
        }
        if(check>=3)
        {
            alert( " User "+value1+" is the Winner ")
            location.reload()
        }
    }   
   
    
}
