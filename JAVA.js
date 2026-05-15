// Kullanıcı seçimlerini tutacağımız obje
let kullaniciSecimleri = {
    kiyafet: "",
    arkaplan: ""
};

// 1. Kamerayı Başlat
async function kamerayiBaslat() {
    const video = document.getElementById('webcam');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (hata) {
        console.error("Kamera açılamadı:", hata);
    }
}

// 2. Seçim Yapma Fonksiyonu (Kartlara tıklanınca çalışır)
function secimYap(kategori, secim, element) {
    kullaniciSecimleri[kategori] = secim;
    
    // Tıklanan kategorideki diğer kartların seçim rengini temizle
    let grid = element.parentElement;
    let kartlar = grid.getElementsByClassName('secenek-kart');
    for(let i = 0; i < kartlar.length; i++) {
        kartlar[i].classList.remove('secili');
    }
    
    // Sadece tıklanan kartı seçili yap
    element.classList.add('secili');
}

// 3. Adımlar Arası Geçiş
function sonrakiAdim(mevcutAdimId, sonrakiAdimId) {
    document.getElementById(mevcutAdimId).classList.add('gizli');
    document.getElementById(sonrakiAdimId).classList.remove('gizli');
}

// 4. Yapay Zeka Üretim Simülasyonu (Animasyonlu Yükleme)
function videoyuUret() {
    // Seçim yapıldı mı kontrolü
    if(!kullaniciSecimleri.kiyafet || !kullaniciSecimleri.arkaplan) {
        alert("Lütfen önce kıyafet ve arka plan seçin!");
        return;
    }

    // Arka plan seçiminden yükleme ekranına geç
    sonrakiAdim('adim-arkaplan', 'adim-yukleniyor');

    let metin = document.getElementById('yukleme-metni');
    
    // Kullanıcıya yapay zeka çalışıyormuş hissi vermek için metinleri sırayla değiştiriyoruz
    setTimeout(() => { metin.innerText = kullaniciSecimleri.kiyafet + " stili ayarlanıyor..."; }, 1500);
    setTimeout(() => { metin.innerText = kullaniciSecimleri.arkaplan + " arka planı ekleniyor..."; }, 3000);
    setTimeout(() => { metin.innerText = "Video işleniyor... Neredeyse hazır!"; }, 4500);

    // 6 Saniye sonra sonuç ekranını göster
    setTimeout(() => {
        sonrakiAdim('adim-yukleniyor', 'adim-sonuc');
        document.getElementById('sonuc-video').play();
    }, 6000);
}

// 5. Sistemi Sıfırla (Başa Dön)
function basaDon() {
    document.getElementById('sonuc-video').pause();
    document.getElementById('sonuc-video').currentTime = 0;
    
    // Tüm seçimleri temizle
    kullaniciSecimleri = { kiyafet: "", arkaplan: "" };
    let kartlar = document.getElementsByClassName('secenek-kart');
    for(let i = 0; i < kartlar.length; i++) { 
        kartlar[i].classList.remove('secili'); 
    }

    // İlk ekrana dön
    sonrakiAdim('adim-sonuc', 'adim-kiyafet');
}

// Sayfa yüklendiğinde kamerayı otomatik tetikle
window.onload = kamerayiBaslat;
