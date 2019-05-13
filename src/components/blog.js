import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>May 13, 2019 </small> | <small> React 360 & VR </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Create exciting 360 and VR experiences using React</a></h3>
							<p>React 360 is a framework for the creation of 3D and VR user interfaces. Built on top of React – a library designed to simplify the creation of complex UI – React 360 allows you to use familiar tools and concepts to create immersive 360 content on the web.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Wordpress for a Beginner</a></h3>
							<p>WPBeginner is the largest WordPress resource site for WordPress Beginners with easy to understand WordPress tutorials for mastering the basics and beyond.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Make website from scratch</a></h3>
							<p>Create websites using web development fundamentals like HTML5/CSS3 and Bootstrap to modify the structure and appearance of your sites. Bootstrap ...</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-5 animate-box">
					</div>
					<div className="col-md-2 animate-box">
					<p><a href="!#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
					<div className="col-md-5 animate-box">
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
