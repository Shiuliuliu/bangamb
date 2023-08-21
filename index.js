const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width=750
canvas.height=1334
var hp =200
var lvdan=1
var uplv1=[]
const bg = new Image()
bg.src = './bg/bg1.jpg'
var frames = 0
var wase = 1
var energy=0

class player
{
    constructor()
    {
        this.position={
            x:canvas.width/2,
            y:canvas.height/2
        }
        this.width =100
        this.height=100
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
            ,this.position.x-20
            ,this.position.y-35
            ,this.width+40
            ,this.height+40
            )
    }
    update()
    {
        this.position.x = mouse.x -this.width/2
        this.position.y = mouse.y - this.height/2
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
        if(this.position.x + this.width>=canvas.width+1000)
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
        this.image.src = './img/kiem.png'
        this.width =60
        this.height=60
    }
    draw()
    { 
        c.drawImage(this.image
            ,0
            ,0
            ,240
            ,240
            ,this.position.x-20
            ,this.position.y-35
            ,this.width+40
            ,this.height+40
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

//-------------------------------------------------------------------------

//------------------------------------------------------------------------
var bos 
const maybay = new player()
var dan =[]
var dan1=[]
 var no =[]
const mouse = {
    x:undefined,
    y:undefined
}
var danga = (new enemy2(15,3))
window.addEventListener('touchmove',(e)=>
{
    var touch=e.touches[0]
    mouse.x = touch.clientX
    mouse.y=touch.clientY
    console.log(mouse.x)
})
canvas.addEventListener('touchmove',(e)=>
{
    if(energy<100&&maybay.position.y>canvas.height/2-200)
    
    {if(lvdan==1)
    {
        dan.push(new bullet(mouse.x,mouse.y-50,0))
        energy+=20
    }
    if(lvdan==2)
    {
        dan.push(new bullet(mouse.x-30,mouse.y-50,0))
        dan.push(new bullet(mouse.x+30,mouse.y-50,0))
        energy+=30
    }
    if(lvdan==3)
    {
        dan.push(new bullet(mouse.x-30,mouse.y-50,-1))
        dan.push(new bullet(mouse.x+30,mouse.y-50,1))
        dan.push(new bullet(mouse.x,mouse.y-50,0))
        energy+=40
    }
    if(lvdan==4)
    {
        dan.push(new bullet(mouse.x-30,mouse.y-50,-1))
        dan.push(new bullet(mouse.x+30,mouse.y-50,1))
        dan.push(new bullet(mouse.x-30,mouse.y-50,0))
        dan.push(new bullet(mouse.x+30,mouse.y-50,0))
        energy+=50
    }
    if(lvdan==5)
    {
        dan.push(new bullet(mouse.x-30,mouse.y-50,-1))
        dan.push(new bullet(mouse.x+30,mouse.y-50,1))
        dan.push(new bullet(mouse.x-30,mouse.y-50,0))
        dan.push(new bullet(mouse.x+30,mouse.y-50,0))
        energy+=45
    }
    if(lvdan==6)
    {
        dan.push(new bullet(mouse.x-30,mouse.y-50,-1))
        dan.push(new bullet(mouse.x+30,mouse.y-50,1))
        dan.push(new bullet(mouse.x-30,mouse.y-50,0))
        dan.push(new bullet(mouse.x+30,mouse.y-50,0))
        energy+=40
    } 
}
    
})
function end()
{
    bos.update()
    for(i=0;i<dan.length;i++)
        {
            dan.forEach((bullet,i)=>
            {
                if (bullet.position.x+bullet.width> bos.position.x
                    &&bullet.position.x + bullet.velocity.x < bos.position.x + bos.width
                    &&
                    bullet.position.y+bullet.height/2>bos.position.y&&
                    bullet.position.y < bos.position.y+bos.height)
                    {
                        dan.splice(i,1)
                        bos.hp-=5
                       
                        no.push(new boom(bos.position.x+100,bos.position.y))
                                        setTimeout(()=>
                                        {
                                            no.splice(0,1)
                                            
                                        },100)
                    }
            })
        }
        if(frames%20==0)
        {
            dan1.push(new bullete(bos.position.x+100,bos.position.y,0))
            dan1.push(new bullete(bos.position.x+100,bos.position.y,-1))
            dan1.push(new bullete(bos.position.x+100,bos.position.y,1))
        }
        if(frames%100==0)
        {
            dan1.push(new bullete(bos.position.x+100,bos.position.y,-2))
            dan1.push(new bullete(bos.position.x+100,bos.position.y,-3))
            dan1.push(new bullete(bos.position.x+100,bos.position.y,2))
            dan1.push(new bullete(bos.position.x+100,bos.position.y,3))
        }

    c.fillStyle="red"    
    c.fillRect(300,100,bos.hp,40)
    c.save()
    c.restore()
    c.strokeStyle="yellow"
    c.strokeRect(300,100,1000,40)
    if(bos.hp<=0)
    {c.clearRect(0,0,canvas.width,canvas.height)
        c.font = "300px Georgia"
        c.fillText(" you win ",300,300)}
}
var random = 0
//--------------------------------------------------------------
function next()
{
    if(wase==2)
    {
     danga=(new enemy2(15,3))
    }
    else if(wase==3)
    {
        danga=(new enemy2(15,3))
    }
    else if(wase==4)
    {
        danga=(new enemy2(20,3))
    }
    else if(wase==4)
    {
        danga=(new enemy2(20,3))
    }
    else if(wase==5)
    {
        danga=(new enemy2(15,3))
    }
    else if(wase==6)
    {
        bos=(new boss(canvas.width/2 , 300))
    }
}
function animate()
{
   
    frames++
    c.clearRect(0,0,canvas.width,canvas.height)
     c.drawImage(bg,0,0)
    
    window.requestAnimationFrame(animate)
    c.save()
    c.globalAlpha=0.15
    c.fillStyle = "green"
        c.fillRect(0,canvas.height,canvas.width,-canvas.height/2-200)
        c.restore()
    maybay.update()
    
    for(var i =0;i<uplv1.length;i++)
    {
        uplv1.forEach((uplv,i)=>
        {
            uplv.update()
            if(uplv.position.x+uplv.width> maybay.position.x
                &&uplv.position.x + uplv.velocity.x < maybay.position.x + maybay.width
                &&
                uplv.position.y+uplv.height/2>maybay.position.y&&
                uplv.position.y < maybay.position.y+maybay.height)
                {
                    uplv1.splice(i,1)
                    if(lvdan==1)
                    {
                        uplv1.splice(i,1)
                        lvdan=2
                    }
                    else if(lvdan==2)
                    {
                        uplv1.splice(i,1)
                        lvdan=3
                    }
                    else if(lvdan==3)
                    {
                        uplv1.splice(i,1)
                        lvdan=4
                    }
                    else if(lvdan==4)
                    {
                        uplv1.splice(i,1)
                        lvdan=5
                    }
                    else if(lvdan==5)
                    {
                        uplv1.splice(i,1)
                        lvdan=6
                    }
                    
                }

        })
    }
    no.forEach(boom=>
        {
            boom.update()
        })
      
    dan.forEach(bullet=>
        {
            bullet.update()
        })
    dan1.forEach(bullete=>
            {
                bullete.update()
                
            }) 
    
            danga.update()
            danga.ga1.forEach((enemy)=>
                {
                    
                    enemy.update()
                    
                    enemy.velocity.x =danga.velocity.x
                })
        for(var i=0;i<danga.ga1.length;i++)   
        {
            var j = Math.floor(Math.random()*danga.ga1.length)
            
            {
                if(wase==1&&frames%100==0)
                dan1.push(new bullete(danga.ga1[j].position.x,danga.ga1[j].position.y,0))
                if(wase==2&&frames%80==0)
                {
                    dan1.push(new bullete(danga.ga1[j].position.x,danga.ga1[j].position.y,0))
                }
                if(wase==3&&frames%60==0)
                dan1.push(new bullete(danga.ga1[j].position.x,danga.ga1[j].position.y,0))
                if(wase==4&&frames%40==0)
                {
                    dan1.push(new bullete(danga.ga1[j].position.x,danga.ga1[j].position.y,0))
                }
                if(wase==5&&frames%20==0)
                {
                    dan1.push(new bullete(danga.ga1[j].position.x,danga.ga1[j].position.y,0))
                }

            }
        }  
                
        
        for(var i =0;i<dan.length;i++)
        {
            
            dan.forEach((bullet,i)=>
            {
                if(bullet.position.y<=0)
                {
                    dan.splice(i,1)
                }
                for(var j=0;j<danga.ga1.length;j++)
                {
                    danga.ga1.forEach((enemy,j)=>
                    {
                        if (bullet.position.x+bullet.width> enemy.position.x
                            &&bullet.position.x + bullet.velocity.x < enemy.position.x + enemy.width
                            &&
                            bullet.position.y+bullet.height/2>enemy.position.y&&
                            bullet.position.y < enemy.position.y+enemy.height)
                                                {
                                                    
                                                    if(random <=2)
                                               {
                                                var xx = enemy.position.x
                                                var yy=enemy.position.y
                                                    uplv1.push(new uplv(xx,yy))
                                                }
                                                    dan.splice(i,1)
                                                    danga.ga1.splice(j,1)
                                                    no.push(new boom(enemy.position.x,enemy.position.y))
                                                    setTimeout(()=>
                                                    {
                                                        no.splice(0,1)
                                                    },100)
                                                }
                    })
                }
            })
        }
        for(var i=0;i<dan1.length;i++)
        {
            dan1.forEach((bullete,i)=>
            {
                if(bullete.position.y>=canvas.height-10)
                {
                    dan1.splice(i,1)
                }
                if (bullete.position.x+bullete.width> maybay.position.x
                    &&bullete.position.x + bullete.velocity.x < maybay.position.x + maybay.width
                    &&
                    bullete.position.y+bullete.height/2>maybay.position.y&&
                    bullete.position.y < maybay.position.y+maybay.height)
                    {
                        dan1.splice(i,1)
                        no.push(new boom(maybay.position.x+30,maybay.position.y))
                                        setTimeout(()=>
                                        {
                                            no.splice(0,1)
                                            
                                        },100)
                                    
                                        hp -=5
                    }
            })
        }
        
        
    random = Math.floor(Math.random()*100)
    c.save()    
    c.fillStyle="red"    
    c.fillRect(10,canvas.height,20,-hp)
    c.save()
    c.restore()
    c.strokeStyle="yellow"
    c.strokeRect(10,canvas.height,20,-200)
   
    c.font = "30px Georgia"
    c.fillText("Màn:"+wase,10,50)
    c.fillText("Đạn:"+lvdan,10,100)
    if(energy>0)
    {
        energy--
    }
    c.save()    
    c.fillStyle="yellow"    
    c.fillRect(canvas.width-10,canvas.height-10,20,-energy*10)
    c.strokeStyle="yellow"
    c.strokeRect(canvas.width-10,canvas.height-10,20,-1000)
    
    if(danga.ga1.length==0&&wase==1)
    {
        setTimeout(()=>
        {wase=2
            frames=0
            next()
          },1500)
    }
    else if(danga.ga1.length==0&&wase==2)
    {
        setTimeout(()=>
        {wase=3
            frames=0
            next()
          },1500)
     
    }
    else if(danga.ga1.length==0&&wase==3)
    {
        setTimeout(()=>
        {wase=4
            frames=0
            next()
          },1500)
        
    }
    else if(danga.ga1.length==0&&wase==4)
    {
        setTimeout(()=>
        {wase=5
            frames=0
            next()
          },1500)
        
    }
    else if(danga.ga1.length==0&&wase==5)
    {
        setTimeout(()=>
        {wase=6
            frames=0
           
               
            
            next()
          },1500)
        
    }
    if(wase==6)
    {
        end()
    }
    if(hp<=0)
    {
        c.clearRect(0,0,canvas.width,canvas.height)
       
        c.font = "300px Georgia"
        c.fillText(" Gà ",300,300)
    }
    if(maybay.position.y <canvas.height/2-200)
    {
        hp--
    }
   
   }
animate()