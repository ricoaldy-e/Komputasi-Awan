// Fungsi untuk menginisialisasi carousel
function initCarousel () {
    // Mendapatkan elemen dengan class "main-course-carousel"
    const mainCourse = document.querySelector(".main-course-carousel");
    const drinks = document.querySelector(".drinks-carousel");
    const snacks = document.querySelector(".snacks-carousel");

    // Loop untuk menambahkan 5 salinan elemen carousel
    for (let i = 0; i < 10; i++) {
        // Mengkloning elemen dengan class "main-course-carousel-slide"
        const mainCourseCarousel = document.querySelector(".main-course-carousel-slide").cloneNode(true);
        const drinksCarousel = document.querySelector(".drinks-carousel-slide").cloneNode(true);
        const snacksCarousel = document.querySelector(".snacks-carousel-slide").cloneNode(true);

        // Menambahkan elemen yang telah dikloning ke dalam elemen "main-course-carousel"
        mainCourse.appendChild(mainCourseCarousel);
        drinks.appendChild(drinksCarousel);
        snacks.appendChild(snacksCarousel);
    }
}



// Memanggil fungsi initCarousel untuk menginisialisasi carousel saat halaman dimuat
initCarousel();

// form reservation
const form = document.querySelector("#reservation-item-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const tableName = document.querySelector("#table_name").value;
    const tableSize = document.querySelector("#table_capacity").value;
    const date = document.querySelector("#order_date").value;
    const order = document.querySelector("#order").value;

    const orderText = `Halo, saya ingin reservasi meja untuk ${tableSize} orang, atas nama ${tableName} pada tanggal/waktu ${date} 
    Order: 
    ${order || "*Pesan ditempat"}
    `;

    window.location.replace(`https://wa.me/+6282314972886?text=${orderText}`);
}) 

const hamburger = document.querySelector ("#burger-navigation");
const mobileNavigation = document.querySelector (".nav-mobile-main");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    mobileNavigation.classList.toggle("menu-active");
})

// Fungsi untuk menyesuaikan ukuran font berdasarkan lebar layar
function adjustFontSize() {
    const viewportWidth = window.innerWidth;
    const baseFontSize = viewportWidth < 768 ? 14 : 16;
    document.documentElement.style.fontSize = baseFontSize + 'px';
}

// Panggil saat load dan resize
window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);

// Tutup menu mobile saat item diklik
document.querySelectorAll('.nav-mobile-main a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('#burger-navigation').classList.remove('open');
        document.querySelector('.nav-mobile-main').classList.remove('menu-active');
    });
});
