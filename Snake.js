function Snake(width, height)
{
	 //global 
        this.tail;
        this.key;
        //this.eaten = eaten;
        this.width = width;
        this.height = height;

    //here i go
    this.getRandomArbitrary = function(min, max) 
    {
        return Math.floor(Math.random() * (max - min)) + min;
    };

	this.debug = function()
    {
        for (var i = 0; i < this.tail.length; i++) { 
            console.log("this.tail["+ i +"].x = " + this.tail[i].x);
            console.log("this.tail["+ i +"].y = " + this.tail[i].y);
        }
    };

    this.initTail = function()
    {
        this.tail = new Array( {x : 0, y : 0} );
        this.tail[0].x = this.getRandomArbitrary(0,this.width);
        this.tail[0].y = this.getRandomArbitrary(0, this.height);
    };

    this.getDirection = function()
    {
        return document.addEventListener('keydown', function(e) 
        {
            this.key = e.keyCode;
        }
        , false);
    };

    this.ondulation = function()
    {
        if(this.tail.length > 1)
        {
            for(var i = this.tail.length-1; i > 0; i--)
            {
                this.tail[i].x = this.tail[i-1].x;
                this.tail[i].y = this.tail[i-1].y;
            }
        }
    };

    this.move = function(eaten)
    {
        //clavier
        this.getDirection();
        //on fait bouger tout le corps
        this.ondulation();
        //bouge dans la direction
        switch (this.key) {
            case 37:

                //return 'left';
                this.tail[0].x -= 1;
                //bouge tout le corps
                //ondulation();
                console.log("x" + this.tail[0].x);
            break;

            case 38:

                //return 'up';
                this.tail[0].y -= 1;
                
                //bouge tout le corps
                //ondulation();

                console.log("y" + this.tail[0].y);
            break;

            case 39:
                //return 'right';
                this.tail[0].x += 1;
                //bouge tout le corps
                //ondulation();
                console.log("x" + this.tail[0].x);
            break;

            case 40:
                //return 'down';
                this.tail[0].y += 1;
                //bouge tout le corps
                //ondulation();
                console.log("y" + this.tail[0].y);
            break;
            }

            //thorique
            if (this.tail[0].x == -1) {
                    this.tail[0].x = this.width;
            }
            else if (this.tail[0].y == -1) {
                    this.tail[0].y = this.height;
            }
            else if (this.tail[0].x == this.width) {
                    this.tail[0].x = 0;
            }
            else if (this.tail[0].y == this.height) {
                    this.tail[0].y = 0;
            };

            //si mangé, on agrandit
            if(eaten == true)
            {
                this.tail[this.tail.length] = { x : strawberry.x , y : strawberry.y };
                eaten = false;
                //On initialise une autre strawberry      
            }
            return eaten;

    };
}