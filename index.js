const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width=414
canvas.height=896
var hp =200
var lvdan=1
var uplv1=[]
var fire = false
const bg = new Image()
bg.src = './bg/bg1.jpg'
var frames = 0
var wase = 1
var energy=0


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
var tstart ={
    x:0,y:0
}
var tend = {
    x:0,y:0
}
var move = true
window.addEventListener('touchstart',(e)=>
{
    var touch=e.touches[0]
    tstart.x = touch.clientX
    tstart.y= touch.clientY
    console.log(tstart.x,tstart.y)
    fire=true
}) 
window.addEventListener('touchend',(e)=>
{
    move =false
    fire=false
    energy =0
})
canvas.addEventListener('touchmove',(e)=>
{
    fire = true
    var touch=e.touches[0]
    if(move)
    {mouse.x = touch.clientX
    mouse.y=touch.clientY
    tend.x = maybay.position.x
    tend.y=maybay.position.y}
   
    
    

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
    c.fillRect(10,50,bos.hp,20)
    c.save()
    c.restore()
    c.strokeStyle="yellow"
    c.strokeRect(10,50,1000,20)
    if(bos.hp<=0)
    {c.clearRect(0,0,canvas.width,canvas.height)
        c.font = "100px Georgia"
        c.fillText(" you win ",10,10)}
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
                                                    no.push(new boom(enemy.position.x+enemy.width/2,enemy.position.y+enemy.height/2))
                                                    setTimeout(()=>
                                                    {
                                                        no.splice(0,1)
                                                    },100)
                                                }
                         if (maybay.position.x+maybay.width> enemy.position.x
                            &&maybay.position.x + maybay.width< enemy.position.x + enemy.width
                            &&
                            maybay.position.y+maybay.height>enemy.position.y&&
                            maybay.position.y < enemy.position.y+enemy.height)
                            {
                                danga.ga1.splice(j,1)
                                hp-=10
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
        
    if(energy<300&&fire)
    {
     energy++
    }
    if(energy%14==0&&fire&&energy<300)
    
    {if(lvdan==1)
    {
        dan.push(new bullet(mouse.x,mouse.y-50,0))
    }
    if(lvdan==2)
    {
        dan.push(new bullet(mouse.x-30,mouse.y-50,0))
        dan.push(new bullet(mouse.x+30,mouse.y-50,0))
    }
    if(lvdan==3)
    {
        dan.push(new bullet(mouse.x-30,mouse.y-50,-1))
        dan.push(new bullet(mouse.x+30,mouse.y-50,1))
        dan.push(new bullet(mouse.x,mouse.y-50,0))
    }
    if(lvdan==4)
    {
        dan.push(new bullet(mouse.x-30,mouse.y-50,-1))
        dan.push(new bullet(mouse.x+30,mouse.y-50,1))
        dan.push(new bullet(mouse.x-30,mouse.y-50,0))
        dan.push(new bullet(mouse.x+30,mouse.y-50,0))
    }
    if(lvdan==5)
    {
        hp+=0.0001
        dan.push(new bullet(mouse.x-30,mouse.y-50,-1))
        dan.push(new bullet(mouse.x+30,mouse.y-50,1))
        dan.push(new bullet(mouse.x-30,mouse.y-50,0))
        dan.push(new bullet(mouse.x+30,mouse.y-50,0))
    }
    if(lvdan==6)
    {
        hp+=0.0002
        dan.push(new bullet(mouse.x-30,mouse.y-50,-1))
        dan.push(new bullet(mouse.x+30,mouse.y-50,1))
        dan.push(new bullet(mouse.x-30,mouse.y-50,0))
        dan.push(new bullet(mouse.x+30,mouse.y-50,0))
    } 
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
    c.save()    
    c.fillStyle="yellow"    
    c.fillRect(canvas.width-10,canvas.height-10,20,-energy*2)
    c.strokeStyle="yellow"
    c.strokeRect(canvas.width-10,canvas.height-10,20,-300*2)

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
       
        c.font = "100px Georgia"
        c.fillText(" Gà ",30,30)
    }
   
   }
animate()