<div class="wrap gutenslider-admin">
	<h1></h1>
	<section class="heading py-3">
		<div class="container">
			<div class="row gs-admin-intro flex">
				<div class="col-12 col-md-9 d-flex align-items-center">
					<h2>Getting Started with <b>Gutenslider</b></h2>
				</div>
				<div class="col-12 col-md-3 d-flex align-items-center text-right">
					<div>Like the plugin? <br> <a href="<?php 
echo  esc_url( GUTENSLIDER_REVIEW_URL ) ;
?>">Leave a ⭐️⭐️⭐️⭐️⭐️ review</a></div>
				</div>
			</div>
		</div>
	</section>
	<section class="intro">
		<div class="container">
			<div class="row">
				<div class="col-md-6 d-flex align-items-center py-5">
					<div class="d-flex flex-column">
						<h3>Welcome to Gutenslider 4.0</h3>
						<p>Gutenslider is now <b>ready to be used</b> in your posts and pages. All you need to do is to go to the editor and add the "Gutenslider" block. Check out the blog posts below to learn more about how to get started.</p>
					</div>
				</div>
				<div class="col-md-6 d-flex align-items-center">
					<img class="py-5" src="<?php 
echo  esc_url( GUTENSLIDER_PLUGIN_URL . 'dist/images/gutenslider_start_image.svg' ) ;
?>" alt="gutenslider start image" />
				</div>
			</div>
		</div>
	</section>
	<section class="blog-posts">
		<div class="container">
			<div class="row">
				<hr>
				<div class="col-md-12 pt-5">
					<h3>Learn how to use Gutenslider</h3>
				</div>
				<div class="col-md-6 py-5">
					<div class="blog-post">
						<a href="https://gutenslider.org/gutenslider-tutorial-how-to-add-sliders-to-your-wordpress-website/"><h4 class="post-heading">Creating your first Gutenslider</h4></a>
						<a href="https://gutenslider.org/gutenslider-tutorial-how-to-add-sliders-to-your-wordpress-website/" ><img class="py-3" src="<?php 
echo  esc_url( GUTENSLIDER_PLUGIN_URL . 'dist/images/adding-gutenslider-block-1600x849.png' ) ;
?>" /></a>
						<div class="post-description py-3">
							With Gutenslider, it is very easy to add custom sliders to your WordPress website or blog. Unlike many other sliders, Gutenslider is fully integrated into the gutenberg editor backend. In this post, we will show you, how to integrate sliders very fast and simple. The tutorial covers the basics of how to add sliders.
						</div>
						<a class="btn btn-block post-read-more" href="https://gutenslider.org/gutenslider-tutorial-how-to-add-sliders-to-your-wordpress-website/">Read More</a>
					</div>
				</div>
				<div class="col-md-6 py-5">
					<div class="blog-post">
						<a href="https://gutenslider.org/wordpress-fullscreen-background-slider/"><h4 class="post-heading">Fullscreen Sliders in Wordpress</h4></a>
						<a href="https://gutenslider.org/wordpress-fullscreen-background-slider/" ><img class="py-3" src="<?php 
echo  esc_url( GUTENSLIDER_PLUGIN_URL . 'dist/images/samuel-zeller-158996-unsplash.png' ) ;
?>" /></a>
						<div class="post-description py-3">
							With Gutenslider, it is very easy to add custom sliders to your WordPress website or blog. Unlike many other sliders, Gutenslider is fully integrated into the gutenberg editor backend. In this post, we will show you, how to integrate sliders very fast and simple. The tutorial covers the basics of how to add sliders.
						</div>
						<a class="btn btn-block post-read-more" href="https://gutenslider.org/wordpress-fullscreen-background-slider/">Read More</a>
					</div>
				</div>
				<div class="col-12 mb-5">
					<div class="link-to-blog">
						<a href="https://gutenslider.org/category/howto/">Read all Gutenslider Howtos in our blog</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php 
if ( gutenslider_fs()->is_not_paying() ) {
    ?>
	<section class="pricing py-5">
		<div class="container">
			<h3>Compare our Plans<small>and get creative with Gutenslider Pro / Expert</small></h3>
			<div class="row d-flex flex-row pb-5">
				<!-- Free Tier -->
				<div class="col-lg-4 col-12 mb-sm-3">
					<div class="card mb-5 mb-lg-0">
						<div class="card-body plan-free">
							<h5 class="card-title text-muted text-uppercase text-center">Free</h5>
							<h6 class="card-price text-center">$0<span class="period">/month</span></h6>
							<hr>
							<ul class="fa-ul">
								<li><span class="fa-li"><i class="fas fa-check"></i></span>Basic Gutenslider Functions and Settings</li>
							</ul>
							<span href="" class="btn btn-block text-uppercase">Your Version</span>
						</div>
					</div>
				</div>
				<!-- Plus Tier -->
				<div class="col-lg-4 col-12 mb-sm-3">
					<div class="card mb-5 mb-lg-0">
						<div class="card-body">
							<h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
							<h6 class="card-price text-center">$2.99<span class="period">/month</span></h6>
							<hr>
							<ul class="fa-ul">
								<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Video Slides</strong></li>
								<li><span class="fa-li"><i class="fas fa-check"></i></span>Customize Colors</li>
								<li><span class="fa-li"><i class="fas fa-check"></i></span>Customize Slide Controls</li>
								<li><span class="fa-li"><i class="fas fa-check"></i></span>Slide Transitions</li>
							</ul>
							<a href="https://checkout.freemius.com/mode/dialog/plugin/3804/plan/6127/licenses/1/" class="btn btn-block text-uppercase">Upgrade Now</a>
						</div>
					</div>
				</div>
				<!-- Pro Tier -->
				<div class="col-lg-4 col-12 mb-sm-3">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title text-muted text-uppercase text-center">Expert</h5>
							<h6 class="card-price text-center">$3.99<span class="period">/month</span></h6>
							<hr>
							<ul class="fa-ul">
								<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Video Slides</strong></li>
								<li><span class="fa-li"><i class="fas fa-check"></i></span>Customize Colors</li>
								<li><span class="fa-li"><i class="fas fa-check"></i></span>Customize Slide Controls</li>
								<li><span class="fa-li"><i class="fas fa-check"></i></span>Slide Transitions</li>
								<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>+Priority Support</strong></li>
							</ul>
							<a href="https://checkout.freemius.com/mode/dialog/plugin/3804/plan/6130/licenses/1/" class="btn btn-block text-uppercase">Upgrade Now</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php 
}
?>
	<?php 
?>
</div>
