import { useState} from 'react'
import hero1 from '../tools/images/desktop-image-hero-1.jpg'
import hero2 from '../tools/images/desktop-image-hero-2.jpg'
import hero3 from '../tools/images/desktop-image-hero-3.jpg'
import light from '../tools/images/image-about-light.jpg'
import dark from '../tools/images/image-about-dark.jpg'
import ham from '../tools/images/icon-hamburger.svg'
import arrow from '../tools/images/icon-arrow.svg'
import arright from '../tools/images/icon-angle-right.svg'
import arleft from '../tools/images/icon-angle-left.svg'
import close from '../tools/images/icon-close.svg'


const Box1=()=>{
    const [shownav,setshownav]=useState(false)
    const [picnum,setpicnum]=useState(0)
    const lis=[hero1,hero2,hero3]
    const back=()=>{
        if(picnum===0){
            setpicnum(lis.length-1)
        }else{
            setpicnum(picnum-1)
        }
    }
    const forward=()=>{
        if(picnum>=lis.length-1){
          setpicnum(0)
        }else{
          setpicnum((prev)=>prev+1)
        }
      }
    return (
        <div className="box1">
           <div className='flex top'>
                <div className='bg'>
                    <img className='image' src={lis[picnum]} alt='pic'/>
                    <nav>
                        <img onClick={()=>setshownav(!shownav)} src={ham} className='ham-icon' alt='pic'/>
                        <p className='room'>room</p>
                        <div className={`navigation-box ${shownav?'disflex':'disnone'}`}>
                            <img onClick={()=>setshownav(false)} className='close' src={close} alt=''/>
                            <div className='nav-list'>
                                <p>home</p>
                                <p>shop</p>
                                <p>about</p>
                                <p>contact</p>
                            </div>
                        </div>
                    </nav>
                    <div className='switch'>
                        <img className='arr' onClick={back} src={arleft} alt='pic'/>
                        <img className='arr' onClick={forward} src={arright} alt='pic'/>
                    </div>
                </div>
                <div className='dis-parent'>
                    <h1 className='h1'>Discover innovative<br/>ways to decorate</h1>
                    <p>We provide unmatched quality,and style for property<br/>owners accross the country, our experts combine<br/> form function in bringing our vision to life, create a<br/>room in your own style with our collection and make<br/> your property a reflection of you and what you love.</p>
                    <p className='p-shop'>SHOP NOW <img src={arrow} alt=''/></p>

                </div>
           </div>
           <div className='flex picbox'>
                <img className='image' alt='pic' src={light}/>
                <div className=' dp'>
                    <h4>ABOUT OUR FURNITURE</h4>
                    <p>Our multifunctional collection blends designs and functions to suite your<br/>individual taste. make each room unique, or pick a unique cohesive team that best<br/>express your interests, and what impresses you. Find the furniture pieces you<br/>need, from traditional to comtemporary styles or anything in between.<br/>Product specialists are available to help you create your dream space.</p>
                </div>
                <img className='image' alt='pic' src={dark}/>
           </div>
        </div>
    )
}

export default Box1