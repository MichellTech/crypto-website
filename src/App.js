import './App.css'
import 'animate.css/animate.min.css'
import Aos from 'aos'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'
import logo from './images/logo.svg'
import hero from './images/heroimg.png'
import second from './images/second.png'
import download from './images/download.png'
import download1 from './images/download1.png'
import download2 from './images/download2.png'
import visa1 from './images/visa1.png'
import visa2 from './images/visa2.png'
import visa3 from './images/visa3.png'
import feat from './images/feat.png'
import feat1 from './images/feat1.png'
import feat2 from './images/feat2.png'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { FiBarChart2 } from 'react-icons/fi'
import { TbWorldDownload } from 'react-icons/tb'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { BsPersonFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { BsYoutube } from 'react-icons/bs'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

import 'aos/dist/aos.css'
import 'animate.css'
import { useState } from 'react'

function App() {
  const [bar, setBar] = useState(false)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    Aos.init()
  }, [])

  const handleOpen = () => {
    setBar(true)
  }
  const closeBar = () => {
    setBar(false)
  }
  // const tradeOpen =()=>{
  //   setSelected(!)
  // }
  return (
    <>
      <header>
        <nav className='section nav'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div
            className='logo-icon animate__animated             animate__pulse
          animate__infinite'
          >
            <RiMenuUnfoldFill className='pointt' onClick={handleOpen} />
          </div>
          <ul className='nav-menu'>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            <li className='line'></li>
            <li className='cta'>Register</li>
          </ul>
        </nav>
      </header>
      <section className=''>
        <div className='hero section1'>
          <div className='hero-text'>
            <div className='deal'>
              <div className='hero-text-header'>
                <p className='save'>70% save</p>
                <p className='black'>for the best black friday deals</p>
              </div>
            </div>
            <div className='hero-text-info'>
              <h2>Fastest & Secure Platform To Invest in Crypto</h2>
              <p>
                buy and sell cryptocurrencies by trusted 10M wallets, in over
                100M transactions
              </p>
            </div>
            <div>
              <button className='btn'>
                <h4> Try For Free</h4>
                <Fade left>
                  <BsFillPlayCircleFill className='btn-icon' />
                </Fade>
              </button>
            </div>
          </div>

          <div
            data-aos='fade-up-left'
            data-aos-duration='3000'
            className='hero-img'
          >
            <img src={hero} alt='hero-img' className='hero-pic' />
          </div>
        </div>
      </section>
      <section className='sub-info'>
        <div
          data-aos='fade-up-right'
          data-aos-duration='5000'
          className='div-margin'
        >
          <div className='info-1'>
            <div className='info-icon'>
              <FiBarChart2 />
            </div>
            <div className='info-text'>
              <h3 className='true'>$30B</h3>
              <p className='flut'>Digital Currency Exchange</p>
            </div>
          </div>
          <div className='info-1'>
            <div className='info-icon'>
              <TbWorldDownload />
            </div>
            <div className='info-text'>
              <h3 className='true'>190+</h3>
              <p className='flut'>Countries Around The World</p>
            </div>
          </div>
          <div className='info-1'>
            <div className='info-icon'>
              <BsPersonFill />
            </div>
            <div className='info-text'>
              <h3 className='true'>$10M</h3>
              <p className='flut'>Trusted Wallet Investors</p>
            </div>
          </div>
        </div>
      </section>
      <section className='why section1'>
        <div className='why-text'>
          <Slide left>
            <h3>WHY YOU SHOULD CHOOSE CHAPPO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              quis unde qui maiores. Excepturi maiores magnam iure sed corporis
              ad.
            </p>
          </Slide>

          <button className='btn learn'>learn more</button>
        </div>
        <div
          data-aos-duration='3000'
          data-aos='fade-up-left'
          className='why-img'
        >
          <img src={second} alt='second' className='second-img' />
        </div>
      </section>
      <section className='section1'>
        <div className='how'>
          {/* <ScrollAnimation
            duration={5000}
            animateOnce={false}
            animateOut='fadeOut'
            delay={1000}
            animateIn='fadeIn'
          > */}
          <div data-aos='fade-up' className='how-text'>
            <h3>How Much Can You Earn With Us</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti, consequatur?
            </p>
          </div>
          {/* </ScrollAnimation> */}

          <form data-aos='flip-left' data-aos-duration='5000' className='form'>
            <div className='form-flex'>
              <input type='number' className='input' placeholder='200' />
              <select name='KH/S' id='' className='select'>
                <option value='KH/S'>KH/S</option>
                <option value='H/S'>H/S</option>
                <option value='TH/S'>TH/S</option>
                <option value='MH/S'>MH/S</option>
                <option value='GH/S'>GH/S</option>
              </select>
              <button type='submit' className='form-btn'>
                Calculate
              </button>
            </div>

            <h4> ESTIMATED 24 HOUR REVENUE :</h4>
            <h3>
              0.055 130 59 ETH <span className='hii'>($1275)</span>
            </h3>
            <p>
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </form>
        </div>
      </section>
      <section className='trade'>
        <div data-aos='zoom-in' data-aos-duration='8000' className='section1'>
          <h3 className='ola'>
            Trade Securely And Market The High Growth Cryptocurrencies.
          </h3>
          <div className='trade-card'>
            <div
              onClick={() => setSelected(1)}
              className={`trade-card1 ${selected === 1 && 'activa'}`}
            >
              <div className='trade-img'>
                <img src={download} alt='download' className='download' />
              </div>
              <div className='trade-text'>
                <h2>
                  Bitcoin <span>BTC</span>
                </h2>
                <p>
                  Digital currency in which a record of transactions is
                  maintained.
                </p>
              </div>
              <div className='div-btn'>
                <button className={` ${selected === 1 ? 'btn-div' : 'diva'}`}>
                  {selected === 1 && <h4>Start Mining</h4>}
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div
              onClick={() => setSelected(2)}
              className={`trade-card1 ${selected === 2 && 'activa'}`}
            >
              <div className='trade-img'>
                <img src={download1} alt='download' className='download' />
              </div>
              <div className='trade-text'>
                <h2>
                  Ethereum <span>ETH</span>
                </h2>
                <p>
                  Blockchain technology to create and run decentralized digital
                  applications.
                </p>
              </div>
              <div className='div-btn'>
                <button className={` ${selected === 2 ? 'btn-div' : 'diva'}`}>
                  {selected === 2 && <h4>Start Mining</h4>}
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div
              onClick={() => setSelected(3)}
              className={`trade-card1 ${selected === 3 && 'activa'}`}
            >
              <div className='trade-img'>
                <img src={download2} alt='download' className='download' />
              </div>
              <div className='trade-text'>
                <h2>
                  Litecoin <span>LTC</span>
                </h2>
                <p>
                  Cryptocurrency that enables instant payments to anyone in the
                  world.
                </p>
              </div>
              <div className='div-btn'>
                <button className={` ${selected === 3 ? 'btn-div' : 'diva'}`}>
                  {selected === 3 && <h4>Start Mining</h4>}
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='market section1'>
        <h3 className='mide'>
          Market Sentiments, Portfolio, And Run <br /> The Infrastructure Of
          Your Choice
        </h3>
        <div className='market-card'>
          <div className='market-card1'>
            <div className='market-text'>
              <h3>Invest Smart</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore, ipsam.
              </p>
              <button className='learno'>learn more</button>
            </div>
            <div
              data-aos='zoom-out-down'
              data-aos-duration='8000'
              className='market-img'
            >
              <img src={feat} alt='feat' className='feat' />
            </div>
          </div>
          <div className='market-card1 rev'>
            <div className='market-text iou'>
              <h3>Detailed Statistics</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore, ipsam.
              </p>
              <button className='learno'>learn more</button>
            </div>
            <div
              data-aos='zoom-out-right'
              data-aos-duration='8000'
              className='market-img'
            >
              <img src={feat1} alt='feat' className='feat' />
            </div>
          </div>
          <div className='market-card1'>
            <div className='market-text'>
              <h3>Grow Your Profit And Track Your Investments</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore, ipsam.
              </p>
              <button className='learno'>learn more</button>
            </div>
            <div
              data-aos='zoom-out-left'
              data-aos-duration='8000'
              className='market-img'
            >
              <img src={feat2} alt='feat' className='feat' />
            </div>
          </div>
        </div>
      </section>
      <section className='section1 formo'>
        <form
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='1500'
          className='form-mine'
        >
          <div className='flex-beg'>
            <h3>Start Minng Now</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className='flex-col1'>
            <input
              type='text'
              placeholder='Enter Message here'
              className='input-form'
            />
            <button className='btnn-form'> Subscribe</button>
          </div>
        </form>
      </section>
      <footer className='section1'>
        <div className='hello-guys'>
          <div className='foot-flex'>
            <div className='foot-logo'>
              <img src={logo} alt='logo' className='foot-img' />
            </div>
            <div className='quicklinks'>
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Features</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='resourcelink'>
              <h4>Resources Links</h4>
              <ul>
                <li>Download Whitepaper</li>
                <li>Smart Token</li>
                <li>Blockchain Explore</li>
                <li>Crypto Api</li>
                <li>Interest</li>
              </ul>
            </div>
            <div className='foot-payment'>
              <h4>We accept the following payment systems</h4>
              <div className='payment-pics'>
                <img src={visa1} alt='visa' className='visa' />
                <img src={visa2} alt='visa' className='visa' />
                <img src={visa3} alt='visa' className='visa' />
              </div>
            </div>
          </div>
          <div className='social-links'>
            <h5>© 2022 CRAPPO. All rights reserved.</h5>
            <div className='social-icons'>
              <BsYoutube />
              <IoLogoWhatsapp />
              <BsTwitter />
              <RiFacebookCircleFill />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </footer>
      <section className={`${bar ? 'fixed' : 'fixed fixes'}`}>
        <div>
          <div
            className='sidebar-icon animate__animated             animate__pulse
          animate__infinite'
          >
            <FaTimes className='pointt' onClick={closeBar} />
          </div>
          <ul
            className='list 
          sidebar'
          >
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
            <div className='sidebar-flex'>
              <li> Login</li>
              <li className='space'></li>
              <li className='round'>Register</li>
            </div>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
