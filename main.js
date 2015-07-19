window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }

        //responsive
        canvas.width = screen.width;
        canvas.height = screen.height;


        //global 
        var size = 40;
        var width = Math.floor(canvas.width / (size +5) ),
        height = Math.floor(canvas.height / (size +5) ) - 3;

        
        function play()
        {
                context.clearRect(0,0,canvas.width,canvas.height);    //je réinitialise le canvas
                //snake = getSnake();
                //strawberry = getStrawberry();
                myLayer.eaten = mySnake.move(myLayer.eaten);
                //console.log(key);
                if(mySnake.tail[mySnake.tail.length-1].x == myLayer.strawberry.x && mySnake.tail[tail.length-1].y == myLayer.strawberry.y)
                {
                    //On agrandit la taille du snake
                    myLayer.eaten = true;
                }
                myLayer.drawTheGame(mySnake.tail ,context);
                //debug();
                setTimeout(play, 200);
        }

        var mySnake = new Snake(width, height);
        mySnake.initTail();
        var myLayer = new Layer(width, height, size);
        myLayer.initStrawberry(mySnake.tail);
        myLayer.eaten = false;
        
        mySnake.getDirection();
        play();
}