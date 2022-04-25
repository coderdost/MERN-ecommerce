const Carousel = ()=>(
    <div id="carouselExampleDark" class="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
      <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="images/product-2-slider.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="images/product-3-slider.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="images/product-6-slider.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
)

export default Carousel;