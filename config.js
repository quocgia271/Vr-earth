// ============================================================================
// Configuration File - Earth VR Simulation
// Dễ dàng tùy chỉnh các thông số mà không sửa main.js
// ============================================================================

const EARTH_VR_CONFIG = {
    // ========== CAMERA ==========
    CAMERA: {
        FOV: 75,                          // Field of view độ
        INITIAL_ZOOM: 3,                  // Khoảng cách ban đầu
        MIN_ZOOM: 1.5,                    // Zoom tối thiểu
        MAX_ZOOM: 15,                     // Zoom tối đa
        AUTO_ROTATE_SPEED: 2              // Tốc độ tự xoay
    },

    // ========== EARTH/PLANET ==========
    EARTH: {
        ROTATION_SPEED: 0.001,            // Tốc độ xoay Trái Đất (0.001 = 1000 frames/vòng)
        RADIUS: 1,                        // Bán kính
        SEGMENTS: 64,                     // Độ phân giải (64 = mịn, 32 = nhanh hơn)
        TEXTURE_WIDTH: 2048,              // Độ rộng texture
        TEXTURE_HEIGHT: 1024              // Độ cao texture
    },

    // ========== CLOUDS ==========
    CLOUDS: {
        ROTATION_SPEED: 0.0012,           // Tốc độ xoay đám mây (nhanh hơn Trái Đất)
        RADIUS_OFFSET: 0.025,             // Offset từ Trái Đất (0.025 = cao 0.025 đơn vị)
        OPACITY: 0.6,                     // Độ trong suốt (0-1)
        TEXTURE_WIDTH: 1024,
        TEXTURE_HEIGHT: 512
    },

    // ========== STARS ==========
    STARS: {
        COUNT: 2000,                      // Số lượng sao
        FIELD_SIZE: 400,                  // Kích thước bầu trời sao (-200 đến +200)
        SIZE: 0.5                         // Kích thước pixel của sao
    },

    // ========== LIGHTING ==========
    LIGHTING: {
        SUN: {
            COLOR: 0xffffff,              // Màu ánh sáng mặt trời
            INTENSITY: 1.5,               // Cường độ
            POSITION: { x: 10, y: 5, z: 7 }  // Vị trí
        },
        AMBIENT: {
            COLOR: 0x666688,              // Màu ánh sáng môi trường
            INTENSITY: 0.7                // Cường độ
        },
        HEMISPHERE: {
            SKY_COLOR: 0x87ceeb,          // Màu trời
            GROUND_COLOR: 0x2a2a4e,       // Màu đất
            INTENSITY: 0.4                // Cường độ
        },
        SHADOWS: {
            MAP_SIZE: 2048,               // Kích thước shadow map (2048 = chất lượng cao)
            ENABLED: true                 // Bật/tắt shadows
        }
    },

    // ========== COLORS ==========
    COLORS: {
        // Đại dương
        OCEAN_DARK: '#0a3a7d',
        OCEAN_MAIN: '#1a4d7a',
        OCEAN_LIGHT: '#0a3a7d',

        // Lục địa
        LAND_MAIN: '#2d7016',             // Màu xanh chính
        LAND_MOUNTAIN: '#4a9d1a',         // Màu xanh lục địa cao

        // Sky
        SKY_GRADIENT_1: '#0a3a7d',
        SKY_GRADIENT_2: '#1a4d7a'
    },

    // ========== TEXTURES ==========
    TEXTURES: {
        EARTH_NOISE_INTENSITY: 0.3,       // Cường độ noise (0-1)
        CLOUD_OPACITY: 0.7,               // Độ trong suốt đám mây
        CLOUD_DENSITY: 0.3,               // Mật độ đám mây (0-1, thấp = hiếm)
        USE_LOADED_TEXTURE: false,        // Nếu true, sẽ tìm earth.jpg từ server
        LOADED_TEXTURE_PATH: './earth.jpg'  // Đường dẫn ảnh Trái Đất (nếu có)
    },

    // ========== CONTROLS ==========
    CONTROLS: {
        DAMPING_ENABLED: true,
        DAMPING_FACTOR: 0.05,             // Mức độ cản (nhỏ = mượt hơn)
        ZOOM_SPEED: 1,
        PAN_ENABLED: true
    },

    // ========== RENDERING ==========
    RENDERING: {
        PIXEL_RATIO: window.devicePixelRatio,
        ANTIALIAS: true,
        POWER_PREFERENCE: 'high-performance',
        TONE_MAPPING: 'ACESFilmic'        // Chế độ tone mapping (ACESFilmic, Linear, Reinhard)
    },

    // ========== PHYSICS ==========
    PHYSICS: {
        EARTH_TILT: 23.5,                 // Độ nghiêng trục của Trái Đất (độ)
        ORBITAL_SPEED: 0,                 // Tốc độ quỹ đạo (0 = không chuyển động quỹ đạo)
        EARTH_ORBITAL_RADIUS: 0            // Bán kính quỹ đạo (0 = không có quỹ đạo)
    },

    // ========== UI/DEBUG ==========
    UI: {
        SHOW_FPS: true,                   // Hiển thị FPS counter
        SHOW_INFO_PANEL: true,            // Hiển thị thông tin panel
        SHOW_WIREFRAME: false,            // Hiển thị wireframe (debug)
        AUTO_ROTATE_DEFAULT: true        // Tự xoay theo mặc định
    },

    // ========== KEYBOARD SHORTCUTS ==========
    KEYS: {
        TOGGLE_AUTOROTATE: 'Space',
        RESET_VIEW: 'KeyR',
        TOGGLE_INFO: 'KeyF',
        ENTER_VR: 'KeyV',
        TOGGLE_WIREFRAME: 'KeyW'
    }
};

// ============================================================================
// PRESETS (Các cấu hình sẵn)
// ============================================================================

const EARTH_VR_PRESETS = {
    // Chế độ hiệu suất cao (cho thiết bị yếu)
    PERFORMANCE: {
        EARTH: { SEGMENTS: 32, TEXTURE_WIDTH: 1024, TEXTURE_HEIGHT: 512 },
        STARS: { COUNT: 1000 },
        CLOUDS: { OPACITY: 0.5 },
        LIGHTING: { SHADOWS: { MAP_SIZE: 1024 } }
    },

    // Chế độ cân bằng (mặc định)
    BALANCED: {
        EARTH: { SEGMENTS: 64, TEXTURE_WIDTH: 2048, TEXTURE_HEIGHT: 1024 },
        STARS: { COUNT: 2000 },
        CLOUDS: { OPACITY: 0.6 },
        LIGHTING: { SHADOWS: { MAP_SIZE: 2048 } }
    },

    // Chế độ chất lượng cao (cho máy mạnh)
    QUALITY: {
        EARTH: { SEGMENTS: 128, TEXTURE_WIDTH: 4096, TEXTURE_HEIGHT: 2048 },
        STARS: { COUNT: 5000 },
        CLOUDS: { OPACITY: 0.75 },
        LIGHTING: { SHADOWS: { MAP_SIZE: 4096 } }
    }
};

// ============================================================================
// Hàm Trợ Giúp
// ============================================================================

/**
 * Áp dụng preset cấu hình
 * @param {string} presetName - 'PERFORMANCE', 'BALANCED', or 'QUALITY'
 */
function applyPreset(presetName) {
    const preset = EARTH_VR_PRESETS[presetName];
    if (!preset) {
        console.warn(`Preset "${presetName}" không tìm thấy`);
        return;
    }

    // Merge preset vào config
    for (let key in preset) {
        if (EARTH_VR_CONFIG[key]) {
            Object.assign(EARTH_VR_CONFIG[key], preset[key]);
        }
    }

    console.log(`✓ Đã áp dụng preset: ${presetName}`);
}

/**
 * Lấy preset dựa trên hiệu suất GPU
 */
function autoSelectPreset() {
    // Đơn giản: kiểm tra memory
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
        applyPreset('PERFORMANCE');
    } else if (navigator.deviceMemory && navigator.deviceMemory >= 8) {
        applyPreset('QUALITY');
    } else {
        applyPreset('BALANCED');
    }
}

// Export để sử dụng trong main JS
window.EARTH_VR_CONFIG = EARTH_VR_CONFIG;
window.applyPreset = applyPreset;
window.autoSelectPreset = autoSelectPreset;
