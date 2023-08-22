class player
{
    constructor()
    {
        this.position={
            x:canvas.width/2,
            y:canvas.height/2
        }
        this.width =50
        this.height=50
        this.tg1=0
        this.tg2=0
        this.image = new Image()
        this.image.src = './img/nv.png'
    }
    active()
    {
        this.tg1++
        if(this.tg1 %5 ==0)
        {
            if(this.tg2 < 6)
            {
                this.tg2 ++
            }
            else{ this.tg2 = 0
            this.tg1 =0}
        }
    }
    draw()
    {
        c.drawImage(this.image
            ,0
            ,0
            ,240
            ,240
            ,this.position.x-10
            ,this.position.y-20
            ,this.width+20
            ,this.height+20
            )
    }
    update()
    {
        if(tstart.x>=tend.x-100&&tstart.x<=tend.x+maybay.width+100&&
            tstart.y>=tend.y-100&&tstart.y<=tend.y+maybay.height+100)
        {
           move = true
        }
        if(move)
        {this.position.x = mouse.x -this.width/2
        this.position.y = mouse.y - this.height/2}
        this.active()
        this.draw()

    }
}
class bullet{
    constructor(x1,y1,x2)
    {
        this.position={
            x:x1,
            y:y1
        }
        this.velocity = {
            x:x2,
            y:-10
        }
        
        this.width =33
        this.height=66
    }
    draw()
    {   
        c.beginPath()
        c.arc(this.position.x,this.position.y,10,0,2*Math.PI)
        c.fillStyle="yellow"
        c.fill()
    }
    
    update()
    {
        this.position.x +=this.velocity.x
        this.position.y +=this.velocity.y
        this.draw()

    }
}
class bullete{
    constructor(x1,y1,x2)
    {
        this.position={
            x:x1,
            y:y1
        }
        this.velocity = {
            x:x2,
            y:5
        }
       
        this.width =10
        this.height=10
    }
    draw()
    { 
        c.restore()
        c.beginPath()
        c.arc(this.position.x,this.position.y,5,0,2*Math.PI)
        c.fillStyle="red"
        c.fill()
    }
    update()
    {
        this.position.x +=this.velocity.x
        this.position.y +=this.velocity.y
        this.draw()

    }
}
class enemy{
    constructor(x1,y1)
    {
        this.position={
            x:-1000+x1,
            y:y1
        }
        this.velocity={
            x:5,
            y:0
        }
        this.width =55
        this.height=60
        this.image = new Image()
        this.image.src = './img/Gobin1.png'
    }
    draw()
    {   
        c.drawImage(this.image,this.position.x,this.position.y)
    }
    update()
    {
        this.draw()
        this.position.x +=this.velocity.x
        this.position.y += this.velocity.y 
       

    }
}
class enemy2{
    constructor(i1,j1)
    {
        this.position={
            x:-1000,
            y:0
        }
        this.velocity={
            x:5,
            y:0
        }
        this.i=i1 
        this.j = j1
        this.width = 100
        this.height = 700
        this.ga1 = []
        for(var i=0;i<i1;i++)
        for(var j=0;j<j1;j++)
        {
            this.ga1.push(new enemy(-i*100,j*100))
        }
    }
    update()
    {
        this.position.x +=this.velocity.x
        this.position.y += this.velocity.y 
        if(this.position.x + this.width>=canvas.width+1500)
        {
            this.velocity.x =-5

        }
        else if(this.position.x<=-1000)
        { this.velocity.x =5}
        

    }
}
class boom {
    constructor(x1,y1)
    {
        this.position = {
            x:x1,
            y:y1
        }
        
        this.width = 192
        this.height = 141
        this.image = new Image()
        this.tg1 =0
        this.tg2=0
        this.imagenm = new Image()
        this.imagenm.src = './img/no.png'
        this.image = this.imagenm
    }
    active()
    {
        this.tg1++
        if(this.tg1 %5 ==0)
        {
            if(this.tg2 < 5)
            {
                this.tg2 ++
            }
            else this.tg2 = 0
        }
    }
    draw()
    {

        c.drawImage(this.image
            ,192*this.tg2
            ,0
            ,192
            ,141
            ,this.position.x-60
            ,this.position.y-35
            ,this.width-30
            ,this.height-30
            
            
            )
    }
    update()
    {
        this.active()
        this.draw()
       
    }
}  
class uplv
{
constructor(x1,y1)
    {
        this.position={
            x:x1,
            y:y1
        }
        this.velocity = {
            x:0,
            y:5
        }
        this.image = new Image()
        this.image.src = './img/Damage.png'
        this.width =30
        this.height=30
    }
    draw()
    { 
        c.drawImage(this.image
            ,0
            ,0
            ,42
            ,72
            ,this.position.x-10
            ,this.position.y-10
            ,this.width+12
            ,this.height+42
            )
    }
    update()
    {
        this.position.x +=this.velocity.x
        this.position.y +=this.velocity.y
        this.draw()

    }
}
class boss{
    constructor(x1,y1)
    {
        this.position={
            x:x1,
            y:y1
        }
        this.velocity={
            x:5,
            y:0
        }
        this.width =200
        this.height=200
        this.image = new Image()
        this.image.src = './img/bos.png'
        this.hp=1000
    }
    draw()
    {   
        c.drawImage(this.image
            ,0
            ,0
            ,94
            ,100
            ,this.position.x-20
            ,this.position.y-35
            ,this.width+40
            ,this.height+40
            )
    }
    update()
    {
        this.draw()
        this.position.x +=this.velocity.x
        this.position.y += this.velocity.y 
        if(this.position.x+this.width>=canvas.width)
        {
            this.velocity.x = -5
        }
        else if(this.position.x <=0)
        {
            this.velocity.x =5
        }
       

    }
}
