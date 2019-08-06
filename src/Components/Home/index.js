import React from 'react';
import './main.css'
import YIF from './img/YIF.png'
import YIFl from './img/YIFl.png'
import c1 from './img/caraousel/c1.jpg'
import c2 from './img/caraousel/c2.jpg'
import c3 from './img/caraousel/c3.jpg'
import c4 from './img/caraousel/c4.png'
import c5 from './img/caraousel/c5.jpg'
import ProjectBhoomi from './img/Project-Bhoomi.jpg'
import DreamAuroville from './img/Dream-Auroville.jpg'
import bodhiproject from './img/bodhi-project.jpg'
import D from './img/d.jpg'
import F from './img/f.jpg'
import C from './img/C.jpg'
import yoga from './img/yoga.jpg'
import vi from './img/vi.jpg'
import s1 from './img/s1.jpg'
import ver from './img/ver.jpg'



class Home extends React.Component{

  render() {

    
    return (
      <div >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
      <div className="navbar-fixed">
      <nav className="nav-wrapper" style={{backgroundColor:"#3f51b5"}}>
          <div className="container">
          <img src={YIFl} alt="" style={{width: 100,height:60}}/>
              <a href="#!" className="brand-logo">YIF</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
              <li><a href="#" className=" waves-effect waves-dark">Gallery</a></li>
              <li><a href="#" sclassName=" waves-effect waves-dark" >Services</a></li>
              <li><a href="#" className=" waves-effect waves-dark">Events</a></li>
              <li><a href="#" className=" waves-effect waves-dark">Contact Us</a></li>
              <li><a href="/login" className="waves-effect waves-dark">
                  Login
              </a></li>
              </ul>
          </div>    
      </nav>
  </div>
  
      <ul className="sidenav" id="mobile-demo">
              <li>
                  <div className="user-view background">
                      <img src={YIF}/>
                  </div>
              </li>
      <li><a href="#">
              <span>Gallery</span>
              <i className="material-icons right">monochrome_photos</i>
      </a></li>
      <li><a href="#">
              <span>Services</span>
              <i className="material-icons right">input</i>
      </a></li>
      <li><a href="#">
              <span>Events</span>
              <i className="material-icons right">event</i>
      </a></li>
      <li><a href="#"> <span>Contact Us</span>
          <i className="material-icons right">feedback</i></a></li>
          <li><a href="#">
                  <span>Login</span>
                  <i className="material-icons right">person</i>
              </a></li>
      </ul>
      <div className="carousel carousel-slider center">
      <div className="carousel-item  white-text" href="#">
          <img style={{height:"580px"}} src={c1} alt="" className="responsive-img"/>
      </div>
      <div className="carousel-item  white-text" href="#">
        <img style={{height:"580px"}} src={c2} alt="" className="responsive-img"/>
      </div>
      <div className="carousel-item  white-text" href="#">
          <img style={{height:"580px"}} src={c3} alt="" className="responsive-img"/>
      </div>
      <div className="carousel-item  white-text" href="#">
          <img style={{height:"580px"}} src={c4} alt="" className="responsive-img"/>
      </div>
      <div className="carousel-item  white-text" href="#">
          <img style={{height:"580px"}} src={c5} alt="" className="responsive-img"/>
      </div>
  </div>
  <div className="quote" style={{background:"WHITE",color:"BLACK",fontSize:"15px"}}>
              <h4 style={{fontSize:"20px",padding:"20px"}}>“The only thing constant in life is change and we must grow with it and revel in it.” 
              - Founder, Ritika Arya</h4>
  </div>
<section className="section section-icons centre" style={{padding: 0,background:"#cecfff"}}> 
  <div  id="parallax2"  >
      <div >
              <h1 style={{fontFamily:"Georgia, serif",color:"#1a237e"}}>Works</h1>
      </div>

      <div className="row" >
          <div className="col s12 m4">
              <div className="card">
                  <div className="card-image">
                      <img className="imgg responsive-img" src={ProjectBhoomi}/>
                      <a className="btn-floating halfway-fab waves-effect waves-light red activator"><i className="material-icons">add</i></a>
                  </div>
                  <div className="card-content">
                      <h4>Project Bhoomi</h4>
                  </div>
                  <div className="card-reveal">
                      <span className="card-title center"><b>Project Bhoomi</b>
                      <i className="material-icons">close</i>
                      </span>
                      <p>40 children and 15 volunteers made a trip to Kolad for a 5-day monsoon camp in June, 2015. The intention was to enable them to re-connect to their roots through farming, nature trails, animal bonding and adventure sports.</p>
                      <p>Even though the children are already living in the SGNP forest, we sensed among them a disconnection to their own roots and ways. The disconnection to their land, their environment, especially farming. Farming used to be an integral part of the life of their ancestors, but changes in economic, civil and political scenarios led to its decline and eventual halt as a practice of sustenance.</p>                                    
                      <p>We decided that it would be lovely if we could rekindle that bond with the earth and the soil in our children and their connection with the rich wildlife that they are surrounded by. So we ventured into Kolad. The trip was a perfect balance between learning new things and expressing the wild spirit of the jungle that each child carried within. Diving into the Kundalika river, kayaking, playing with non-venomous frogs and snakes, dancing in the rain and collecting beautiful stones, farming rice and cooking traditional Maharashtrian food….it was such a delight! The children did not want to come back home. The kids returned with a lot of renewed confidence in their traditional wisdom and appreciation for their local environment
                      </p>
                  </div>
              </div>
          </div>
          <div className="col s12 m4">
              <div className="card">
                  <div className="card-image">
                      <img className="imgg responsive-img" src={DreamAuroville}/>
                      <a className="btn-floating halfway-fab waves-effect waves-light red activator"><i className="material-icons">add</i></a>
                  </div>
                  <div className="card-content center">
                      <h4>Dream Auroville</h4> 
                  </div>
                  <div className="card-reveal">
                      <span className="card-title center"><b>Dream Auroville</b>
                      <i className="material-icons">close</i>
                      </span>
                      <p>30 children from 3 different communities and 12 volunteers went for an experiential learning journey to Auroville, in October 2014. The highlight of this trip was that the children travelled by an ‘Airplane', it was a dream come true for them (and also some volunteers)!</p>
                      <p>This journey was one of the most special journeys because it was our first and the most beautiful experience in terms of spiritual, emotional and physical aspects.</p>                                    
                      <p>The place itself had a very strong vibe of community and sustainability that it became easy for us to soak into it. Before we left the volunteers had a strong intention, which was to see the children mix up and move beyond petty village rivalry into a space of togetherness. When the children landed they were clearly children from 3 different villages; but as the days passed it became more and more difficult to identify who was from which village. Before we knew it, girls from different villages were sharing accessories and makeup; boys were bonding while cleaning the community tables together and running after each other. In 5 days everyone had become such a tight unit.
                          The love and the oneness were palpable. This journey will be remembered forever, for people who went on this journey came back transformed in profound ways. Seeds of love and faith were sown which are now being grown.
                      </p>
                  </div>
              </div>
          </div>
          <div className="col s12 m4">
              <div className="card">
                  <div className="card-image">
                      <img className="imgg responsive-img" src={bodhiproject}/>
                      <a className="btn-floating halfway-fab waves-effect waves-light red activator"><i className="material-icons">add</i></a>
                  </div>
                  <div className="card-content">
                      <h4>The Bodhi Project</h4>
                  </div>
                  <div className="card-reveal">
                      <span className="card-title center"><b>The Bodhi Project</b>
                      <i className="material-icons">close</i>
                      </span>
                      <h4 className="center">What?</h4>
                      <p>Bodhi means to awaken… to enlighten… to tap into the universal power! 
                          This September, Young Innovators Foundation (YIF) with support from ‘Book A Smile (BAS)’ is taking 12 Tribal Children and 8 Volunteers on an 11-Day journey to live a DREAM…To meet their ‘Bodhi’ within! 
                          Come 1st September 2016, 20 members of YIF will be visiting SECMOL, Ladakh, an alternative school of education & innovation. (It is the same school shown at end in the Bollywood Movie ‘Three Idiots’). Yes, 
                          ‘Phunsuk Wangdu’ is real! And he is SECMOL’s founding member, Sonam Wangchuk.</p>
                          <h4 className="center">Where?</h4>
                          <p>Students’ Educational & Cultural Movement of Ladakh (SECMOL) is run by young Ladakhis to reform the educational system of Ladakh. SECMOL’s alternative school is an eco-friendly campus at Phey, Ladakh. 
                          They also organize residential activities for Ladakhi students to provide exposure to ideas that conventional schools don’t provide.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
        <section className="section section-icons centre" style={{padding:0,background:"#eee"}}> 
              <div  id="parallax1" >
                      <div >
                              <h1 style={{fontFamily:"Georgia, serif",color:"#1a237e "}}>Projects</h1>
                      </div>
              <div className="row" style={{padding:"50px"}}>
                      <div className="col s12 m4">
                              <div className="card">
                                <div className="card-image">
                                  <img className="imgg responsive-img" src={D}/>
                                  <a className="btn-floating halfway-fab waves-effect waves-light red activator"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                  <h4>Masti Ki Paathshala</h4>
                                </div>
                                <div className="card-reveal">
                                        <span className="card-title center"><b>Masti Ki Paathshala</b>
                                          <i className="material-icons">close</i>
                                        </span>
                                        <p>Masti Ki Paathshala literally means ‘Funschool’. Masti ki Paathshala is an initiative through which sessions are conducted in 4 schoolhouses in the forest (S.G.N.P), where children can learn subjects like Handwork, Math, Language, Science, Social Studies and Art. Each subject is taught over a period of a few months and concludes in a presentation or a finale project by the children. Children from 0-16 years usually attend the paathshala and learn in groups formed as per their age and developmental stage. A subject or a lesson is introduced in a way that it may speak to the thinking, feeling and willing forces in a child (i.e. the head, the heart and the hands).
                                                </p>
                                      </div>
                              </div>
                            </div>
                            <div className="col s12 m4">
                                    <div className="card">
                                      <div className="card-image">
                                        <img className="imgg responsive-img" src={F}/>
                                        <a className="btn-floating halfway-fab waves-effect waves-light red activator"><i className="material-icons">add</i></a>
                                      </div>
                                      <div className="card-content center">
                                        <h4>Football Sundays</h4> 
                                      </div>
                                      <div className="card-reveal">
                                            <span className="card-title center"><b>Football Sundays</b>
                                              <i className="material-icons">close</i>
                                            </span>
                                            <p>Every Sunday football is being used as a medium for children to develop coordination, physical strength, learn teamwork and discipline. Often, friendly matches are conducted at turfs to keep the children abreast with the latest in the world of football.
                                           </p>
                                           <p>
                                           There are several children who have dropped out of school or who are not interested in regular studies, we try to channelize their energy through sports especially, Football. They enjoy the agility, freedom, and healthy competition that football sessions provide.
                                           </p>
                                           <p>
                                                  Monsoon football sessions are more fun! Its football, rain dance and mud splash, all in one...attendance in these sessions naturally goes up around that part of the year: D
                                           </p>
                                          </div>
                                    </div>
                                  </div>
                                  <div className="col s12 m4">
                                        <div className="card">
                                          <div className="card-image">
                                            <img className="imgg responsive-img" src={C}/>
                                            <a className="btn-floating halfway-fab waves-effect waves-light red activator"><i className="material-icons">add</i></a>
                                          </div>
                                          <div className="card-content">
                                            <h4>The CoLab</h4>
                                          </div>
                                          <div className="card-reveal">
                                                <span className="card-title center"><b>The CoLab</b>
                                                  <i className="material-icons">close</i>
                                                </span>
                                                <p>CoLab is a nest, an incubation centre, a melting pot, a hub, a self & collective learning space. The 'Co’ in CoLab is short for Collaboration, Community, Cooperation & Co-creation. It is a space focussed on bringing holistic ideas to life. 
                                              </p><p>Our young members are children within the age range of 14-21 years of age. They have the zeal to take on challenges and build solutions that have the potential to serve the needs of the community at large.</p>
                                              </div>
                                        </div>
                                      </div>
                </div>
      </div>
</section>

<section className="section section-icons centre" style={{padding:0}}> 
  <div  id="parallax3" >
          <div >
                  <h1 style={{fontFamily:"Georgia, serif",color:"#1a237e"}}>Events</h1>
          </div>
          <div className="row">
                  <div className="col s12 m4" >
                    <div className="card medium">
                        <div className="card-content"  style={{paddingTop: 0,paddingBottom: 0}}>
                          <h5>Upcoming Event --> 20-6-2019</h5>
                        </div>
                      <div className="card-image waves-effect waves-light waves-block">
                        <img className="activator" src={yoga}/>
                        <span className="card-title"></span>
                      </div>
                      <div className="card-content"  style={{paddingTop: 0}}>
                        <h5>Yoga Day</h5>
                        <p>
                            21St June International Yoga Day...
                            <a href="#!" className="activator btn waves-effect waves-light ">Read More</a>
                        </p>
                        <a href="/login"><button className="btn btn-large white green-text waves-effect waves-green " 
                         style={{marginTop: 2}}><i className="material-icons right">person_add</i>Participate</button></a>
                      </div>
                         <div className="card-reveal">
                            <span className="card-title">Card Title
                              <i className="material-icons">close</i>
                            </span>
                            <p>When Whole World busy in Preparation of 21 St June 1 St International Yoga Day . Mumbai Dabbawalas Will wear This T-shirt 
                              Containing Various Yoga Poses Designed By Vivekananda Youth Connect & Contribute in Spreading Awareness About Benefits of 
                              Yoga From 20 June Onwards. Thanks for Sponsorship by SURYA LED
                             </p>
                          </div>
                      </div>
                    </div>
                  <div className="col s12 m4">
                    
                      <div className="card medium">
                          <div className="card-content" style={{paddingTop: 0,paddingBottom: 0}}>
                            <h5>Upcoming Event --> 22-3-2018</h5>
                          </div>
                        <div className="card-image waves-effect waves-light waves-block">
                          <img className="activator" src={s1}/>
                          <span className="card-title"></span>
                        </div>
                        <div className="card-content"  style={{paddingTop: 0}}>
                          <h5>Swatch Bharat Abhiyan</h5>
                          <p>
                              PM Narendra Modi ji & vivek...
                              <a href="#!" className="activator btn waves-effect waves-light ">Read More</a>
                          </p>
                          <a href="/login"><button className="btn btn-large white green-text waves-effect waves-green " 
                           style={{marginTop: 2}}><i className="material-icons right">person_add</i>Participate</button></a>
                        </div>
                           <div className="card-reveal">
                              <span className="card-title">Swatch Bharat Abhiyan
                                <i className="material-icons">close</i>
                              </span>
                              <p>at Mumbai University Kalina Campus Gate Mumbai Dabbawalas ,Ambassadors of Swatch Bharat Abhiyan Appointed By Hon. PM 
                                Shri Narendra Modi ji & Vivekananda Youth Connect Did Clean Up Activity to Give the message to Hon. PM that We R With You.
                               </p>
                               <a href="/login"><button className="btn btn-large white green-text waves-effect waves-green " 
                         style={{marginTop: 2}}><i className="material-icons right">person_add</i>Participate</button></a>
                            </div>
                        </div>       
                </div>
                <h4>Recent Events</h4>
                <div className="col s12 m4">
                    <div className="card horizontal ">
                        <div className="card-image waves-effect waves-light waves-block">
                          <img className="activator" src={ver}/>
                        </div>
                        <div className="card-stacked">
                          <div className="card-content" style={{paddingTop: 0}}>
                            <h5 style={{marginTop: 0}} >Versova Makeover</h5>
                            <a href="#!" className="activator btn waves-effect waves-light ">Read More</a>
                          </div>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title">Versova Makeover
                              <i className="material-icons">close</i>
                            </span>
                            <p>Mumbai’s once dirtiest beach, Versova gets a makeover with 300 coconut trees after being cleaned
                                It took 85 weeks to clean one of the dirtiest beaches of the country but thanks to Afroz Shah and thousands of city dwellers
                             </p>
                             
                         <a href="/login"><button className="btn btn-large white green-text waves-effect waves-green " 
                         style={{marginTop: 2}}><i className="material-icons right">person_add</i>Participate</button></a>
                          </div>
                      </div>
                </div>
                <div className="col s12 m4">
                    <div className="card horizontal ">
                        <div className="card-image waves-effect waves-light waves-block">
                          <img className="activator" src={vi}/>
                        </div>
                        <div className="card-stacked">
                          <div className="card-content" style={{paddingTop: 0}}>
                            <h5 style={{marginTop: 0}}>vivekanda Med</h5>
                            <a href="#!" className="activator btn waves-effect waves-light ">Read More</a>
                          </div>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title">Versova Makeover
                              <i className="material-icons">close</i>
                            </span>
                            <p>www.vivekanandayouthconnect.com is organizing Solo plays on 
                              life of patriot monk Swami Vivekananda across the colleges of nation to promote nationalism and universal brotherhood in youths of india.
                             </p>
                          </div>
                      </div>
                </div>
                <a href="https://www.facebook.com/pg/YIFonline/events/?ref=page_internal" className="btn btn-large waves-effect waves-light">Click For More</a>
          </div>       
  </div>
  </section>
 

    <div>
    <section className="section container scrollspy" id="contact">
    <div className="row">
      <div class="col s12 l5">
        <h2 class="indigo-text text-darken-4">Get in Touch</h2>
        <p>Hope You Liked The Experience</p>
        <p>Please provide your valueable feedback</p>
        <p>If you Want to get in touch with us , please fill the form.</p>
      </div>
      <div class="col s12 l5 offset-l2">
<form>
<div class="input-field">
        <i class="material-icons prefix">person </i>
        <input id="last_name" type="text" class="validate"/>
        <label for="last_name">Name</label>
        </div>
<div class="input-field">
<i class="material-icons prefix">email</i>
<input type="email" id="email"/>
<label for="email">Your Email</label>
</div>
<div class="input-field">
<i class="material-icons prefix">message</i>
<textarea id="message" class="materialize-textarea" cols="20" rows="20"></textarea>
<label for="message">Your Message</label>
</div>
<div class="input-field">
<i class="material-icons prefix">date_range</i>
<input type="text" id="date" class="datepicker"/>
<label for="date">Choose a date you need me for...</label>
</div>
<div class="input-field">
<p>Which One Are You?</p>
<p>
<label>
<input type="checkbox"/>
<span>Members</span>
</label>
</p>
<p>
<label>
<input type="checkbox"/>
<span>Donors</span>
</label>
</p>
<p>
<label>
<input type="checkbox"/>
<span>Volunteers</span>
</label>
</p>
</div>
<div class="input-field center">
<button class="btn">Submit</button>
</div>
</form>
</div>
</div>
</section>
    </div>

    <footer className="page-footer grey darken-4">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">Command_Prompt</h5>
        <p className="grey-text text-lighten-4">We are a team of college students working on this project in ACM-LOC-2019.</p>
        <p> Any amount would help support and continue development on this project.</p>
          </div>
      <div className="col l3 s12">
        <ul>
              <li><a href="#" className=" btn grey darken-4 waves-effect waves-dark z-depth-0">Gallery</a></li>
              <li><a href="#" className=" btn grey darken-4 waves-effect waves-dark z-depth-0" >Services</a></li>
              <li><a href="#" className=" btn grey darken-4 waves-effect waves-dark z-depth-0">Events</a></li>
              <li><a href="#" className=" btn grey darken-4 waves-effect waves-dark z-depth-0">Contact Us</a></li>
        </ul>
      </div>
      <div className="col l3 s12">
        <h5 className="white-text">Connect</h5>
        <ul>
              <a href="#"className=" btn-floating grey darken-4 waves-effect waves-dark z-depth-0"><i className="fab fa-facebook"></i></a>
              <a href="#"className=" btn-floating grey darken-4 waves-effect waves-dark z-depth-0"><i className="fab fa-twitter"></i></a>
              <a href="#"className=" btn-floating grey darken-4 waves-effect waves-dark z-depth-0"><i className="fab fa-linkedin"></i></a>
              <a href="#"className=" btn-floating grey darken-4 waves-effect waves-dark z-depth-0"><i className="fab fa-github"></i></a>
        </ul>
      </div>
    </div>
  <div className="footer-copyright center">
    <div className="container">
          Command_Prompt &copy; Command_Prompt 2019
    </div> 
    </div>
</footer>
    </div>
    
    );
  }
}

export default Home;