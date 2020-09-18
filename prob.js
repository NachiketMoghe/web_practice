var list = ["lets see"];


function def(){
    n=prompt("Enter: 1)add for adding. 2)disp for Displaying Todos. 3)quit to quit. 4)del to delete.")
        if(n=="add")
            {
                var t = prompt("Enter your task")
                list.push(t);
                def();
            }
        else if(n=="disp")
            {
                console.log(list);
                def();
            }
        else if(n=="quit")
            {
            return
            }
        else if(n=="del")
            {
                var i = prompt("Enter the Index:")
                j=i;
                while(j<list.length)
                    {list[j]=list[j+1]
                    j=j++;}

                def();
            }
        else{
            def();
        }
}
def();