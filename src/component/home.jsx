import React from 'react'
import './home.css'
import 'font-awesome/css/font-awesome.min.css';


export const Home = () => {
    return (
        <div  className={'body'}>
            <div className={"header"}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className={'container'}>
                        <a className="navbar-brand" href="#">PlantTree</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#explore">Explore</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#adventure">Adventure</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            <div className="jumbotron jumbotron-fluid height100p banner" id={'home'}>
                <div className="container h100">
                    <div className={'contentBox h100'}>
                        <div >
                            <h1 data-aos='fade-up' data-aos-duration='1000' data-aos-delay='0'>Undiscovered Beauty</h1>
                            <p data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className={'sec1'} id={'explore'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'offset-sm-2 col-sm-8'}>
                            <div className={'headerText text-center'}>
                                <h2 data-aos='fade-up' data-aos-duration='1000' data-aos-delay='0'>Explore The World</h2>
                                <p data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    Richard
                                    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                                    of
                                    the more obscure Latin words, consectetur, </p>
                            </div>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-sm-4'}>
                            <div  data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500' className={'placeBox'}>
                                <div className={'imgBx'}>
                                    <img
                                        src={'https://sporlos.no/wp-content/uploads/2019/12/sporlos-planting-uai-667x667.png'}
                                        className={"img-fluid"}/>
                                </div>
                                <div className={'content'}>
                                    <h3>Place Name <br/> <span>Country name</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className={'col-sm-4'}>
                            <div  data-aos='fade-up' data-aos-duration='1000' data-aos-delay='750' className={'placeBox'}>
                                <div className={'imgBx'}>
                                    <img
                                        src={'https://sporlos.no/wp-content/uploads/2019/12/sporlos-planting-uai-667x667.png'}
                                        className={"img-fluid"}/>
                                </div>
                                <div className={'content'}>
                                    <h3>Place Name <br/> <span>Country name</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className={'col-sm-4'}>
                            <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'  className={'placeBox'}>
                                <div className={'imgBx'}>
                                    <img
                                        src={'https://sporlos.no/wp-content/uploads/2019/12/sporlos-planting-uai-667x667.png'}
                                        className={"img-fluid"}/>
                                </div>
                                <div className={'content'}>
                                    <h3>Place Name <br/> <span>Country name</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'sec2'} id={'adventure'}>
                <div className={'container h100'}>
                    <div className={'contentBox h100'}>
                        <div>
                            <h2 data-aos='fade-up' data-aos-duration='1000' data-aos-delay='0'>Adventure is Everywhere</h2>
                            <p data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                                the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable source. Lorem
                                Ipsum comes from sections 1.10.32 and 1.10.33</p>
                            <a data-aos='fade-up' data-aos-duration='1000' data-aos-delay='0' href={'#'} className={'btn btnD1'}>Read More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'blog'} id={'blog'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'offset-sm-2 col-sm-8'}>
                            <div className={"headerText"}>
                                <h2 data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100' >Our Latest Post</h2>
                                <p data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200'>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    Richard
                                    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                                    of
                                    the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                                    through
                                    the cites of the word in classical literature, discovered the undoubtable source.
                                    Lorem
                                    Ipsum comes from sections 1.10.32 and 1.10.33
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='0' className={'col-sm-6'}>
                            <div  className={'blogpost'}>
                                <div className={'imgBx'}>
                                    <img src={'https://www.thetreecenter.com/c/uploads/Plant-a-Tree.jpg'}
                                         className={'img-fluid'}/>
                                </div>
                                <div className={'content'}>
                                    <h1> Contrary to popular belief</h1>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a
                                        piece of classical Latin lite... </p>
                                    <a href={"#"} className={'btn btnD2'}>
                                        Read More
                                    </a>
                                    <div className={'clearfix'}/>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500' className={'col-sm-6'}>
                            <div className={'blogpost'}>
                                <div className={'imgBx'}>
                                    <img src={'https://www.thetreecenter.com/c/uploads/Plant-a-Tree.jpg'}
                                         className={'img-fluid'}/>
                                </div>
                                <div className={'content'}>
                                    <h1> Contrary to popular belief</h1>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a
                                        piece of classical Latin lite... </p>
                                    <a href={"#"} className={'btn btnD2'}>
                                        Read More
                                    </a>
                                    <div className={'clearfix'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='0' className={'col-sm-6'}>
                            <div className={'blogpost'}>
                                <div className={'imgBx'}>
                                    <img src={'https://www.thetreecenter.com/c/uploads/Plant-a-Tree.jpg'}
                                         className={'img-fluid'}/>
                                </div>
                                <div className={'content'}>
                                    <h1> Contrary to popular belief</h1>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a
                                        piece of classical Latin lite... </p>
                                    <a href={"#"} className={'btn btnD2'}>
                                        Read More
                                    </a>
                                    <div className={'clearfix'}/>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500' className={'col-sm-6'}>
                            <div className={'blogpost'}>
                                <div className={'imgBx'}>
                                    <img src={'https://www.thetreecenter.com/c/uploads/Plant-a-Tree.jpg'}
                                         className={'img-fluid'}/>
                                </div>
                                <div className={'content'}>
                                    <h1> Contrary to popular belief</h1>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a
                                        piece of classical Latin lite... </p>
                                    <a href={"#"} className={'btn btnD2'}>
                                        Read More
                                    </a>
                                    <div className={'clearfix'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"contact"} id={"contact"}>
                <div className={'container'}>
                    <div className={"row"}>
                        <div className={'col-sm-12'}>
                            <div className={'headerText text-center'}>
                                <h2 data-aos='fade-up' data-aos-duration='1000' data-aos-delay='0' >Contact us</h2>
                                <p data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>ce of classical Latin literature from 45 BC, making it over 2000 years old.
                                    Richard
                                    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                                    of
                                    the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                                    through</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row clearfix"}>
                    <div className={'offset-sm-2 col-sm-8 col-10 offset-1'}>
                        <form data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500' >
                            <div className={'form-group'}>
                                <label>Name</label>
                                <input type={'text'} name={''} className={'form-control'}/>
                            </div>
                            <div className={'form-group'}>
                                <label>Email</label>
                                <input type={'text'} name={''} className={'form-control'}/>
                            </div>
                            <div className={'form-group'}>
                                <label>Phone</label>
                                <input type={'text'} name={''} className={'form-control'}/>
                            </div>
                            <div className={'form-group'}>
                                <label>Message</label>
                                <textarea className={'form-control textarea'} name={''}/>
                            </div>
                            <div className={'form-group text-center'}>
                                <button className={'btn btnD1'}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-sm-12'}>
                            <div className={'sci'}>
                                <ul>
                                    <li><a href={'#'}><i className={'fa fa-facebook'}/></a></li>
                                    <li><a href={'#'}><i className={'fa fa-twitter'}/></a></li>
                                    <li><a href={'#'}><i className={'fa fa-reddit'}/></a></li>
                                    <li><a href={'#'}><i className={'fa fa-linkedin'}/></a></li>
                                    <li><a href={'#'}><i className={'fa fa-instagram'}/></a></li>
                                </ul>
                                <p className={'cpryt'}>
                                    Copyright 2021 Plant a Tree | Kherson Access Group
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
