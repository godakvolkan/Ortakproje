function myFunction() {
    alert("Bu bir fonksiyon çağrısıdır!");

    var newDiv = document.createElement('div');
    newDiv.className = 'container-fluid p-0';
    newDiv.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
            <a class="navbar-brand" href="#">İCON-LOGO</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style="max-height: 100px;">
                    <li class="nav-item active">
                        <a class="nav-link" href="anasayfa-index.html">ANA SAYFA <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="hakimizda-index.html">HAKKIMIZDA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="iletisim-index.html">İLETİŞİM</a>
                    </li>
                    <li class="nav-item-blog" style="text-align: end;">
                        <a class="nav-link disabled">BLOG</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="anaGirisSunusu">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="maras_genel.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="ali_kayasi_cam_teras_1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="yedi_guzel_adam.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="maras_genel.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="yedi_guzel_adam_muzesi.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="ali_kayasi_cam_teras_1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="maras_genel.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="tas_kopru_2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="maras_genel.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(newDiv);






}function kartOlustur(resimYolu, kartBasligi, kartMetni, linkHref) {
    return `
        <div class="col-sm-4">
            <div class="card mt-4 mb-3">
                <img src="${resimYolu}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${kartBasligi}</h5>
                    <p class="card-text">${kartMetni}</p>
                    <a href="${linkHref}" class="btn btn-primary">DETAYLI BİLGİ</a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const kartlarContainer = document.createElement('div');

    const kartHtml1 = kartOlustur('style/cezaHukuku.jpg', 'Ceza Hukuku', 'Ceza hukuku hakkında detaylı bilgi için...', 'cezaHukuku-index.html');
    const kartHtml2 = kartOlustur('style/borclarHukuku.jpg', 'Borçlar Hukuku', 'Borçlar hukuku hakkında detaylı bilgi için...', '#');
    const kartHtml3 = kartOlustur('style/ticaretHukuku.jpg', 'Ticaret Hukuku', 'Ticaret hukuku hakkında detaylı bilgi için...', '#');

    const kartHtml4 = kartOlustur('style/sigortaHukuku.jpg', 'Sigorta Hukuku', 'Sigorta hukuku hakkında detaylı bilgi için...', '#');
    const kartHtml5 = kartOlustur('style/mirasHukuku.jpg', 'Miras Hukuku', 'Miras hukuku hakkında detaylı bilgi için...', '#');
    const kartHtml6 = kartOlustur('style/işHukuku.jpg', 'İş Hukuku', 'İş hukuku hakkında detaylı bilgi için...', '#');
    const kartHtml7 = kartOlustur('style/esyaHukuku.jpg', 'Eşya Hukuku', 'Eşya hukuku hakkında detaylı bilgi için...', '#');

    const kartlarHtml = [kartHtml1, kartHtml2, kartHtml3, kartHtml4, kartHtml5, kartHtml6, kartHtml7];

    let satirHtml = '<div class="row">';

    kartlarHtml.forEach((kartHtml, index) => {
        satirHtml += kartHtml;

        if ((index + 1) % 3 === 0) {
            satirHtml += '</div><div class="row">';
        }
    });

    satirHtml += '</div>';  // Kapanmamış olan son row'u kapat

    kartlarContainer.innerHTML = satirHtml;

    document.body.appendChild(kartlarContainer);
});


