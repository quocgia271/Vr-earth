// ============================================================================
// ENHANCEMENT GUIDE - Earth VR Simulation
// Hướng dẫn mở rộng và thêm tính năng mới
// ============================================================================

/*

## 🚀 TOP 5 FEATURES CÓ THỂ THÊM (Sắp xếp theo độ khó)

### 1. ✨ Thêm Mặt Trăng (Moon)
==================================================

Độ khó: Dễ ⭐

Bước 1: Tạo hàm createMoon()
```javascript
createMoon() {
    const geometry = new THREE.IcosahedronGeometry(0.3, 32);
    const material = new THREE.MeshPhongMaterial({
        color: 0xcccccc,
        emissive: 0x111111
    });
    const moon = new THREE.Mesh(geometry, material);
    moon.position.set(3, 0, 0);  // Đặt ở bên cạnh
    this.scene.add(moon);
    this.moon = moon;
}
```

Bước 2: Gọi trong init()
```javascript
this.createMoon();
```

Bước 3: Thêm orbital motion trong update()
```javascript
update() {
    // ... existing code ...
    
    // Moon quay quanh Earth
    if (this.moon) {
        const time = Date.now() * 0.0001;
        const orbitRadius = 3;
        this.moon.position.x = Math.cos(time) * orbitRadius;
        this.moon.position.z = Math.sin(time) * orbitRadius;
        this.moon.rotation.y += 0.01;
    }
}
```

### 2. 🌞 Thêm Mặt Trời (Sun) làm Light Source
==================================================

Độ khó: Dễ ⭐

Tạo sphere phát sáng để đại diện Mặt Trời:
```javascript
createSun() {
    const geometry = new THREE.IcosahedronGeometry(0.5, 16);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        emissive: 0xffff00
    });
    const sun = new THREE.Mesh(geometry, material);
    sun.position.set(15, 10, 10);
    this.scene.add(sun);
    
    // Thêm lens flare effect (tùy chọn)
    const glow = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.6, 16),
        new THREE.MeshBasicMaterial({
            color: 0xffff00,
            transparent: true,
            opacity: 0.2
        })
    );
    sun.add(glow);
}
```

### 3. 📍 Thêm Quỹ Đạo (Orbital Path)
==================================================

Độ khó: Trung bình ⭐⭐

```javascript
createOrbit() {
    const orbitRadius = 3;
    const points = [];
    
    // Tạo 360 điểm tạo thành hình tròn
    for (let i = 0; i <= 360; i++) {
        const angle = (i * Math.PI) / 180;
        const x = Math.cos(angle) * orbitRadius;
        const z = Math.sin(angle) * orbitRadius;
        points.push(new THREE.Vector3(x, 0, z));
    }
    
    // Tạo line từ các điểm
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.3
    });
    const orbit = new THREE.Line(geometry, material);
    this.scene.add(orbit);
}
```

### 4. 🎮 Thêm UI Controls Panel
==================================================

Độ khó: Trung bình ⭐⭐

Thêm HTML panel cho các nút điều khiển:
```html
<div id="controls-panel">
    <button onclick="toggleAutoRotate()">Toggle Auto Rotate</button>
    <button onclick="resetCamera()">Reset View</button>
    <label>
        Earth Speed:
        <input type="range" min="0" max="0.01" step="0.001" 
               id="earthSpeedSlider" onchange="updateEarthSpeed(this.value)">
    </label>
</div>
```

CSS styling:
```css
#controls-panel {
    position: fixed;
    bottom: 30px;
    left: 30px;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    color: #00ff88;
    z-index: 100;
}

#controls-panel button {
    margin: 5px;
    padding: 8px 15px;
    background: #00ff88;
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

#controls-panel input {
    width: 150px;
    margin-left: 10px;
}
```

### 5. 🌏 Thêm Hệ Thống 8 Hành Tinh Đầy Đủ
==================================================

Độ khó: Khó ⭐⭐⭐⭐

```javascript
class PlanetarySystem {
    constructor(scene) {
        this.scene = scene;
        this.planets = [];
        this.createPlanets();
    }
    
    createPlanets() {
        const planetsData = [
            { name: 'Mercury', radius: 0.38, color: 0x8c7853, distance: 4 },
            { name: 'Venus', radius: 0.95, color: 0xffc649, distance: 6 },
            { name: 'Earth', radius: 1, color: 0x4a90ff, distance: 8 },
            { name: 'Mars', radius: 0.53, color: 0xff6347, distance: 10 },
            { name: 'Jupiter', radius: 11.2, color: 0xdaa520, distance: 15 },
            { name: 'Saturn', radius: 9.5, color: 0xf4a460, distance: 20 },
            { name: 'Uranus', radius: 4, color: 0x4fd0e7, distance: 25 },
            { name: 'Neptune', radius: 3.88, color: 0x4166ff, distance: 30 }
        ];
        
        planetsData.forEach(data => {
            const geometry = new THREE.IcosahedronGeometry(data.radius / 5, 32);
            const material = new THREE.MeshPhongMaterial({ color: data.color });
            const planet = new THREE.Mesh(geometry, material);
            planet.userData = {
                name: data.name,
                distance: data.distance,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.005
            };
            this.scene.add(planet);
            this.planets.push(planet);
        });
    }
    
    update() {
        this.planets.forEach(planet => {
            const { distance, speed } = planet.userData;
            planet.userData.angle += speed;
            planet.position.x = Math.cos(planet.userData.angle) * distance;
            planet.position.z = Math.sin(planet.userData.angle) * distance;
        });
    }
}
```

=============================================================

## 📊 OPTIMIZATION TECHNIQUES
Kỹ thuật tối ưu hóa nâng cao

### 1. Level of Detail (LOD)
```javascript
// Sử dụng LOD để thay đổi complexity dựa trên khoảng cách camera
const lod = new THREE.LOD();

// High quality cho gần
const highQuality = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1, 64),
    material
);
lod.addLevel(highQuality, 0);

// Low quality cho xa
const lowQuality = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1, 16),
    material
);
lod.addLevel(lowQuality, 10);

this.scene.add(lod);
```

### 2. Frustum Culling
```javascript
// Three.js tự động làm điều này, nhưng kiểm tra:
this.renderer.sortObjects = true;
this.renderer.frustumCulled = true;
```

### 3. Instanced Rendering (cho nhiều sao)
```javascript
// Thay vì tạo 2000 individual meshes, dùng InstancedMesh
const geometry = new THREE.IcosahedronGeometry(0.05, 8);
const material = new THREE.MeshPhongMaterial();
const count = 2000;

const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
for (let i = 0; i < count; i++) {
    const matrix = new THREE.Matrix4();
    matrix.setPosition(
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400
    );
    instancedMesh.setMatrixAt(i, matrix);
}
this.scene.add(instancedMesh);
```

## 🎨 SHADER CUSTOMIZATION
Tạo shader tùy chỉnh cho hiệu ứng đẹp

### Atmosphere Shader
```glsl
uniform vec3 glowColor;
uniform float glowIntensity;

varying vec3 vNormal;

void main() {
    float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    gl_FragColor = vec4(glowColor, 1.0) * intensity * glowIntensity;
}
```

## 📚 BEST PRACTICES

1. **Texture Optimization**
   - Sử dụng compressed textures (BASIS, KTX2)
   - Implement mipmapping
   - Use texture atlasing cho multiple surfaces

2. **Memory Management**
   - Dispose geometry/textures khi không dùng: `geometry.dispose()`
   - Limit texture resolution dựa trên thiết bị

3. **Animation Performance**
   - Avoid creating objects trong animation loop
   - Pre-compute calculations
   - Use delta time cho frame-independent animation

4. **Code Structure**
   - Tách scenes thành modules
   - Use composition pattern
   - Implement factory pattern cho object creation

*/

// ============================================================================
// TEMPLATE: Add Custom Feature
// ============================================================================

/**
 * Template cho thêm feature mới
 * 
 * B1: Tạo class cho feature
 * B2: Initialize data
 * B3: Thêm update logic
 * B4: Thêm cleanup logic
 */

class CustomFeature {
    constructor(scene, config) {
        this.scene = scene;
        this.config = config;
        this.mesh = null;
        this.initialize();
    }

    initialize() {
        // TODO: Khởi tạo feature
    }

    update(deltaTime) {
        // TODO: Cập nhật mỗi frame
    }

    dispose() {
        // TODO: Clean up resources
        if (this.mesh) {
            this.mesh.geometry?.dispose();
            this.mesh.material?.dispose();
            this.scene.remove(this.mesh);
        }
    }
}

// Để sử dụng:
// const feature = new CustomFeature(scene, config);
// Trong animation loop: feature.update(deltaTime);
// Cleanup: feature.dispose();

// ============================================================================
// CONSOLE COMMANDS (Dùng DevTools Console - F12)
// ============================================================================

/**
 * Paste các lệnh này vào console (F12 → Console) để debug:

// Tăng tốc độ xoay Trái Đất
window.EARTH_VR_CONFIG.EARTH.ROTATION_SPEED = 0.005;

// Ẩn/hiện đám mây
window.simulation.clouds.visible = !window.simulation.clouds.visible;

// Zoom vào gần
window.simulation.camera.position.z = 2;

// Xem hiệu suất
console.log(window.performance.memory);

// Debug mode
window.simulation.renderer.debug.checkShaderErrors = true;
*/
