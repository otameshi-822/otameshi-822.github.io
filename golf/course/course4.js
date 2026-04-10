// ══════════════════════════════════════════════════════════════════
//  COURSE 4 — オーシャンディープ (Ocean Deep)
//  Underwater theme, low gravity, high resistance, 8 holes
// ══════════════════════════════════════════════════════════════════
window.GOLF_COURSES = window.GOLF_COURSES || [];
window.GOLF_COURSES.push({
    id: 4,
    name: 'オーシャン',
    nameEn: 'Ocean Deep',
    desc: '水の抵抗と浮力を感じる海底コース。\nふわりと浮かぶ球の軌道を読み切れ。',
    badge: 'UNDERWATER',
    emoji: '🌊',
    theme: 'underwater',
    groundColor:   0x0a4a6e,
    fairwayColor:  0x146d9e,
    greenColor:    0x1c98bd,
    skyColor:      0x05253b,
    fogColor:      0x0c3d5e,
    wallColor:     0x073552,
    obstacleColor: 0x185b80,
    GW: 252, GD: 312,

    gravity: [0, -5, 0],         // Low gravity (buoyancy)
    linearDamping: 0.90,         // High resistance in water
    angularDamping: 0.95,

    holes: [
        { par: 4, spawn: [  0, 3.5, 110], holeX:  40, holeZ:  50 },
        { par: 3, spawn: [ 40, 3.5,  40], holeX: -50, holeZ:  10 },
        { par: 5, spawn: [-50, 3.5,   0], holeX:  60, holeZ: -60 },
        { par: 3, spawn: [ 70, 3.5,-100], holeX:  20, holeZ: -40 },
        { par: 4, spawn: [ 10, 3.5, -40], holeX: -80, holeZ: -20 },
        { par: 4, spawn: [-80, 3.5, -10], holeX: -20, holeZ:  60 },
        { par: 5, spawn: [-20, 3.5,  70], holeX:  90, holeZ: 100 },
        { par: 4, spawn: [ 80, 3.5, 120], holeX:  10, holeZ: 100 },
    ],

    ramps: [
        [[18, 0.4, 20], [  0,  0.30,   80], -0.06,  0.03],
        [[14, 0.4, 14], [-20,  0.40,   25],  0.00, -0.05],
        [[20, 0.4, 16], [ 40, -0.25,  -30],  0.07,  0.00],
        [[16, 0.4, 18], [ 20,  0.35,  -80], -0.04,  0.06],
        [[22, 0.4, 14], [-60, -0.20,  -10],  0.00, -0.05],
    ],

    obstacles: [
        [[ 8, 2, 20], [ 20,  1,  80]],
        [[12, 2, 10], [-30,  1,  40]],
        [[18, 2,  6], [ 10,  1, -10]],
        [[ 6, 2, 22], [ 50,  1, -50]],
        [[14, 2,  8], [-10,  1, -70]],
        [[10, 2, 10], [-50,  1,  20]],
        [[ 8, 2, 12], [ 60,  1,  90]],
    ],

    treePositions: [],

    rockPositions: [
        [-40, 100], [ 80,  40], [-60,  60], [ 20, -40],
        [-90, -80], [ 70,-100], [  0, -90], [-40, -20],
        [ 90, -20], [-100, 20], [ 30, 110], [-20, 120],
    ],
});
