# 🚀 QUICK START - Hướng Dẫn Nhanh

## 1️⃣ Chạy Ứng Dụng (Cách Nhanh Nhất)

### Cách A: Dùng Live Server (Khuyến Nghị)
```
1. Cài VS Code Extension: "Live Server"
2. Chuột phải vào index.html
3. Chọn "Open with Live Server"
4. Trình duyệt sẽ tự động mở!
```

### Cách B: Dùng File Manager
```
1. Vào folder Earth-VR
2. Double-click file "index.html"
3. Trình duyệt sẽ mở tự động
```

### Cách C: Dùng Python (nếu có)
```bash
# Python 3
python -m http.server 8000

# Hoặc Python 2
python -m SimpleHTTPServer 8000

# Mở: http://localhost:8000
```

### Cách D: Dùng Node.js
```bash
npm install -g http-server
http-server
```

## 2️⃣ Điều Khiển Cơ Bản

| Thao Tác | Chức Năng |
|----------|----------|
| ◀️ ▶️ ⬆️ ⬇️ Chuột trái | Xoay quanh Trái Đất |
| 🖱️ Cuộn | Zoom in/out |
| 🖱️ Chuột phải | Pan (di chuyển view) |
| **Space** | Bật/tắt auto-rotate |
| **R** | Reset camera |
| **F** | Ẩn/hiện thông tin |

## 3️⃣ Tùy Chỉnh Ngay (File config.js)

### Thay đổi tốc độ xoay Trái Đất
```javascript
// Mở file config.js
// Tìm dòng:
ROTATION_SPEED: 0.001

// Thay đổi:
ROTATION_SPEED: 0.002  // Xoay nhanh gấp đôi
ROTATION_SPEED: 0.0005 // Xoay chậm gấp đôi
```

### Thay đổi số sao
```javascript
// Tìm:
COUNT: 2000

// Thay đổi thành (5000 = nhiều hơn, 1000 = ít hơn):
COUNT: 5000
```

### Chọn mode hiệu suất
```javascript
// Ở cuối file earth-vr.js, thêm dòng này vào init():
autoSelectPreset();  // Tự chọn
// HOẶC
applyPreset('PERFORMANCE');  // Nhanh cho máy yếu
applyPreset('BALANCED');     // Cân bằng
applyPreset('QUALITY');      // Đẹp cho máy mạnh
```

## 4️⃣ Xác Định Vấn Đề

### Ứng dụng chạy chậm
- Mở Console (F12)
- Xem FPS (góc trên cùng bên trái)
- Nếu FPS < 30: giảm quality trong config.js

### Không thấy Trái Đất
- Nhấn F12 để mở DevTools
- Vào tab "Console"
- Tìm lỗi (thường màu đỏ hoặc vàng)
- Báo cáo lỗi

### Không thay đổi gì dù đã sửa config
- Nhấn Ctrl+Shift+R (hard refresh) để xóa cache
- Hoặc F5 và chọn "Empty cache and hard refresh"

## 5️⃣ Cơ Bản Về Cấu Trúc

```
📁 Earth-VR/
├─ 📄 index.html          ← Main file (mở cái này)
├─ 📄 styles.css          ← CSS styling
├─ 📄 config.js           ← Cấu hình (sửa đây)
├─ 📄 earth-vr.js         ← Logic chính (sửa đây để add feature)
├─ 📄 README.md           ← Hướng dẫn chi tiết
├─ 📄 ENHANCEMENTS.md     ← Cách thêm feature mới
└─ 📄 QUICKSTART.md       ← File này
```

## 6️⃣ Các File Ngoài (CDN - Tự động tải)

- **Three.js** - 3D graphics library
- **OrbitControls** - Camera controls

⚠️ **Cần internet lần đầu!** Sau đó được cache.

## 7️⃣ Pro Tips 🎯

### Tăng chất lượng (nếu máy mạnh)
```javascript
// Trong config.js
EARTH: {
    SEGMENTS: 256,           // Từ 64 → 256
    TEXTURE_WIDTH: 4096,     // Từ 2048 → 4096
    TEXTURE_HEIGHT: 2048
}
```

### Giảm chất lượng (máy yếu)
```javascript
EARTH: {
    SEGMENTS: 32,            // Từ 64 → 32
    TEXTURE_WIDTH: 1024,     // Từ 2048 → 1024
    TEXTURE_HEIGHT: 512
}
STARS: {
    COUNT: 500               // Từ 2000 → 500
}
```

### Dừng auto-rotate
```javascript
// Trong config.js
AUTO_ROTATE_DEFAULT: false  // Từ true → false
```

## 8️⃣ Debug Mode (F12 Console)

```javascript
// Xem toàn bộ cấu hình
console.log(EARTH_VR_CONFIG);

// Thay đổi tốc độ xoay (ngay lập tức)
EARTH_VR_CONFIG.EARTH.ROTATION_SPEED = 0.005;

// Xem FPS thực
console.log('FPS:', document.getElementById('fps').textContent);

// Ẩn/hiện đám mây
window.simulation?.clouds && (window.simulation.clouds.visible = false);

// Xem hiệu suất bộ nhớ
console.log(performance.memory);
```

## 9️⃣ Yêu Cầu Hệ Thống

✅ **Được hỗ trợ:**
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+
- Opera 76+

❌ **Không hỗ trợ:**
- Internet Explorer (quá cũ)
- Trình duyệt di động (còn tùy thuộc)

## 🔟 Báo Cáo Lỗi

Nếu có lỗi, làm theo:

1. Mở F12 (DevTools)
2. Vào tab "Console"
3. Chụp ảnh màn hình lỗi
4. Thử:
   - Refresh (F5)
   - Hard refresh (Ctrl+Shift+R)
   - Clear cache
   - Dùng trình duyệt khác
   - Check internet kết nối

## 📞 Hỗ Trợ

**File chính để sửa:**
- Tốc độ/hiệu suất → `config.js`
- Logic/feature mới → `earth-vr.js`
- Giao diện → `styles.css`

**Thông tin chi tiết:**
- Đọc `README.md`
- Xem `ENHANCEMENTS.md` cho ý tưởng mở rộng

---

**Chúc bạn thành công! 🎉**

Hãy bắt đầu bằng cách mở `index.html` trong trình duyệt! 🚀
