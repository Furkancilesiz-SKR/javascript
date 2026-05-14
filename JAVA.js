// Model değiştirme fonksiyonu
function temaSec(tema) {
    // Sahnemizdeki a-gltf-model elementini id'siyle seç
    const model = document.getElementById('ar-model');
    if (!model) {
        console.error('AR model elementi bulunamadı!');
        return;
    }

    // Her tema için model dosyası ve konum/ölçek/rotasyon ayarları
    const modeller = {
        kovboy: {
            src: './modeller/kovboy_sapkasi.glb',   // GLB dosyanızın yolu
            position: '0 0.05 0',                  // Buruna göre yukarıda
            rotation: '0 -10 0',
            scale: '1.2 1.2 1.2'
        },
        uzayli: {
            src: './modeller/uzayli_gozluk.glb',
            position: '0 -0.02 -0.02',
            rotation: '0 0 0',
            scale: '0.9 0.9 0.9'
        },
        kral: {
            src: './modeller/kral_taci.glb',
            position: '0 0.08 0',
            rotation: '0 0 0',
            scale: '1 1 1'
        }
    };

    // Seçilen temanın ayarlarını al
    const ayar = modeller[tema];
    if (!ayar) {
        console.warn('Bilinmeyen tema: ' + tema);
        return;
    }

    // A-Frame elementine yeni özellikleri ata (modeli güncelle)
    model.setAttribute('src', ayar.src);
    model.setAttribute('position', ayar.position);
    model.setAttribute('rotation', ayar.rotation);
    model.setAttribute('scale', ayar.scale);

    console.log(`"${tema}" teması başarıyla yüklendi.`);
}
