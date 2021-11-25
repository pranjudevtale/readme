var list1=["How many continents are there?", "What is the capital of India?","NG mei kaun se course padhaya jata hai?"]
var soln=[3,4,1]
var options=[["four","nine","seven","eight"],["chandigarh","Bhopal","chennai","Delhi"],["Software engineering","Counseling","tourism","Agriculture"]]
var i=0
var c=0
while (i<(list1.length)){
    if (i==0){
        console.log(list1[i])
        j=0 
        console.log("Your Options are: ")
        while (j<(options[i].length)){
            console.log(j+1,". ",options[i][j])
            j++
        
        n=require("readline-sync")
        s1=n.questionInt("Enter option no: ")
        if (s1==i+3){
            console.log("Congratulations! option 3 is correct Answer")
        }
        else if (s1!=i+3){
            console.log("Sadly,your answer is not correct")
        }
            p=require("readline-sync")
            n=p.question("You are out of the game, do you want to use 50-50 lifeline? enter y or n")
            if (a=="y"){
                c=c+1
                console.log(list1[i])
                j=0
                console.log("Your Options are: ")
            }
                while (j<(options[i].length)){
                    console.log(j+1,". ",options[i][j])
                    j=j+1
                
                q=require("readline-sync")
                s1=q.questionInt("Enter option no: ")
                s2=q.questionInt("Enter your second option: ")
                if (s1==i+3 || s2==i+3){
                    console.log("Congratulations! option 3 correct Answer")
                }
                else{
                    console.log("Sorry, your answer is not correct, you missed the 50-50 lifeline")
                 }
                }
            }
        }
          
    else if (i==1){
        console.log(list1[i])
        j=0 
        console.log("Your Options are: ")
        while (j<(options[i].length)){
            console.logt(j+1,". ",options[i][j])
            j=j+1
        r=require("readline-sync")
        s1=r.questionInt("Enter option no: ")
        if (s1==i+3){
            console.log("Congratulations! option 4 is correct Answer")
        }
    
        else if (s1!=i+3){
            console.log("Sadly,your answer is not correct,You are out of the game,")
            if (c==0){
                s=require("readline-sync")
                n=s.question("You are out of the game, do you want to use 50-50 lifeline? enter y or n")
                if (n=="y"){
                    c=c+1
                    console.log(list1[i])
                    j=0
                    console.log("Your Options are: ")
                    while (j<(options[i].length)){
                        console.log(j+1,". ",options[i][j])
                        j=j+1
                    t=require("readline-sync")
                    s1=t.questionInt("Enter option no: ")
                    s2=t.questionInt("Enter your second option")
                    if (s1==i+3 || s2==i+3){
                        console.log("Congratulations! option 4 is correct Answer")
                    }
                    else{
                        console.log("Sorry, your answer is not correct, you missed the 50-50 lifeline") 
                    } 
                    }
                }
            }
                 
            else{
                console.log("Sorry,You already used 50-50 Lifeline,You are out of the game.Goodbye")
                break
            }
            break
        }
        }
    
    }
    else if (i==2){
        console.log(list1[i])
        j=0 
        console.log("Your Options are: ")
        while (j<len(options[i])){
               console.log(j+1,". ",options[i][j])
               j=j+1
        h=require("readline-sync")
        s1=h.questionInt("Enter option no: ")
        if (s1==i-1){
            console.log("Congratulations! option 1 is correct Answer")
        }
        else if (s1!=i-1){
            console.log("Sadly,your answer is not correct,You are out of the game,")
            if (c==0){
                v=require("readline-sync")
                n=v.question("You are out of the game, do you want to use 50-50 lifeline? enter y or n")
                if (n=="y"){
                    c=c+1
                    console.log(list1[i])
                    j=0
                    console.log("Your Options are: ")
                    while (j<len(options[i])){
                        console.log(j+1,". ",options[i][j])
                        j=j+1
                    j=require("readline-sync")
                    s1=h,questionInt("Enter option no: ")
                    s2=j.questionInt("Enter your second option")
                    if (s1==i-1 || s2==i-1){
                        console.log("Congratulations! option 1 is correct Answer")
                    }
                    else{
                            console.log("Sorry, your answer is not correct, you missed the 50-50 lifeline")
                        } 
                    }
                }
             
            }
           
            else{
                console.log("Sorry,You already used 50-50 Lifeline,You are out of the game.Goodbye")
            }
    
        }
    }
     
    i=i+1
    }
}