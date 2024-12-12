[English Version](https://github.com/alperenbekci/birthdaytracker/blob/main/README.md)

# Birthday Tracker Platform Dokümanı

Bu doküman, Paribu tarafından belirtilen test case gereksinimlerine uygun olarak geliştirilen Birthday Tracker platformunun detaylı açıklamasını sunar. Şu unsurlar ele alınacaktır:

- Proje genel bilgisi
- Teknik detaylar
- Kullanılan teknoloji ve paketler
- Projenin kurulumu ve çalıştırılması

## Proje Hakkında

**Birthday Tracker**, kullanıcıların dostlarının doğum günlerini yönetebilecekleri, modern bir web uygulamasıdır. Kullanıcılar doğum günlerini ekleyebilir, düzenleyebilir, silebilir ve yaklaşan doğum günlerini öne çıkarılmış bir şekilde görebilir. Platform, kullanıcıların bu önemli tarihleri düzenli bir şekilde takip etmelerini ve hatırlamalarını sağlar.

### Ana Özellikler:

- **Kullanıcı yetkilendirmesi:** Kaydolma ve giriş.
- **Doğum günü yönetimi:** Ekleme, düzenleme ve silme işlemleri.
- **Panolar:** Doğum günlerini sıralı listeleme ve öne çıkanları vurgulama.
- **Arama ve filtreleme:** İsim, ay ve kategoriye göre.
- **Kategoriler:** Doğum günlerini aile, arkadaşlar veya iş arkadaşları gibi kategorilere ayırma seçeneği.
- **Yaklaşan doğum günleri için bildirimler.**

Platform, kullanıcı dostu arayüzü ve güvenilir altyapısı sayesinde tüm özelliklerin kolayca kullanılmasını sağlar.

## Teknik Detaylar

### Frontend

- **Teknolojiler:** React, Vite.js, React Router DOM.

#### Dosya Yapısı:

`src` altında şu dizinler bulunur:

- `components`: Uygulama bileşenleri.
- `context`: Context API yönetimi.
- `hooks`: Custom hook fonksiyonlar.
- `pages`: Sayfa düzeyinde bileşenler.
- `utils`: Yardımcı fonksiyonlar.

`App.jsx` ve `main.jsx` dosyaları uygulamanın başlangıcını oluşturur.

#### İşlevler:

- Login ve register rotaları JWT ile korunur.
- Kullanıcılar doğum günü ekleyebilir, silebilir veya düzenleyebilir.
- Yaklaşan doğum günleri (bir haftadan az kalanlar) vurgulanır.
- Tüm doğum günleri, kalan gün sayısına göre sıralanır.
- Kullanıcılar logout olup tekrar giriş yapabilir.
- Kullanıcılar isim, ay ve kategoriye göre arama ve filtreleme yapabilir.
- Eğer eklenmiş bir kişinin doğum günü o gün ise bir confetti komponentiyle kullanıcıya bildirilir.
- Responsive bir tasarım sunarak farklı cihazlarda kullanım kolaylığı sağlar.

### Backend

- **Teknolojiler:** Node.js, Express.js, MongoDB, Express, Mongoose, JWT, Bcrypt.

#### Dosya Yapısı:

- `controllers`: MVC mimarisinin kontrol katmanı.
- `middleware`: Doğrulama ve hata yönetimi.
- `models`: Veri modelleri.
- `routes`: RESTful endpoint tanımları.
- `server.js`: Uygulama giriş noktası.

#### Modeller:

- Kullanıcı modeli (User).
- Doğum günü modeli (Birthday).

# API Endpointleri

## Kullanıcı Doğrulama

### POST `/api/user/register`

- Kullanıcı kaydı oluşturur.

### POST `/api/user/login`

- Kullanıcı giriş yapar, token döner.

## Doğum Günü CRUD İşlemleri

### POST `/api/birthdays`

- Yeni bir doğum günü ekler.

### GET `/api/birthdays/`

- Kullanıcıya ait tüm doğum günlerini getirir.

### GET `/api/birthdays/:id`

- Belirtilen ID’ye sahip doğum gününü getirir.

### PUT `/api/birthdays/:id`

- Belirtilen ID’ye sahip doğum gününü günceller.

### DELETE `/api/birthdays/:id`

- Belirtilen ID’ye sahip doğum gününü siler.

#### Ek Özellikler:

- Hata mesajları ve doğrulamalar için detaylı geri bildirimler.
- Loglama ve izleme mekanizmaları ile hata yönetimi.

## Gereksinimlerin Karşılanması

### Kullanıcı Yetkilendirmesi

- Kullanıcı kaydolabilir ve giriş yapabilir.
- JWT tabanlı authentication kullanılmıştır.
- Şifreler Bcrypt ile hashlenmiştir.
- Tüm kullanıcı bilgileri güvenli bir şekilde saklanmaktadır.

### Doğum Günü Yönetimi

- Kullanıcılar doğum günleri ekleyebilir, silebilir ve düzenleyebilir.
- Doğum günleri kalan günlere göre sıralanır.
- Bir hafta içerisindeki doğum günleri vurgulanmıştır.
- İsim ay ve Kategoriye göre filtreleme özellikleri eklenmiştir.
- Yaklaşan doğum günleri için görsel işaretler sunulmuştur.

## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (>=14.0.0)
- Geliştirme için bir IDE veya metin editörü (VS Code önerilir)

### Kurulum

1. Projeyi indirin:

   ```bash
   git clone https://github.com/alperenbekci/birthdaytracker
   cd birthday-tracker
   ```

2. Gerekli paketleri yükleyin:

   ```bash
   cd backend
   npm install
   cd ..
   ```

   ```bash
   cd frontend
   npm install
   ```

3. Backend klasöründe `.env` dosyası oluşturun ve aşağıdaki bilgileri ekleyin:

   ```env
   PORT=PORT
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/birthday-tracker
   SECRET=<your-secret-key>
   ```

4. Frontend klasöründe `.env` dosyası oluşturun ve aşağıdaki bilgileri ekleyin:

   ```env
   VITE_BACKEND_URL=backend_url
   ```

5. Uygulamayı başlatın:

   ```bash
   cd backend
   npm run dev
   ```

   ```bash
   cd frontend
   npm run dev
   ```

### MongoDB Atlas Ayarları

1. Bir Atlas cluster oluşturun.
2. Kullanıcı bilgilerinizle `.env` dosyasındaki `MONGO_URI` alanını doldurun.
3. Atlas üzerinden veritabanı kullanıcı izinlerini ve network ayarlarını düzenleyin.

## Referanslar

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js Guide](https://expressjs.com/en/starter/installing.html)
- [JWT Introduction](https://jwt.io/introduction/)
- [Heroku Deployment Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
