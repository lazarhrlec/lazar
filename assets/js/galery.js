// api cnontroler
 

const api = fetch('/backend/data/newimg.json')
.then(function (res) {
  return res.json()
})
.then(function (data) {
data.forEach(elt =>{
 
const containerPhoto = document.querySelector('.portfolio-container')


const el = `
<div class="col-lg-4 col-md-6 portfolio-item ${elt.kategorija}">
        <div class="portfolio-wrap">
        
          <img src="/backend/data/uploads/${elt.name}" class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>App 1</h4>
            <p>App</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>
`
containerPhoto.insertAdjacentHTML('afterbegin', el);
})
  })


  