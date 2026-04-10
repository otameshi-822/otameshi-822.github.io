// ══════════════════════════════════════════════════════════════════
//  COURSE 5 — スノークレスト (Snow Crest)
//  Snow/Ice theme, very low friction, 8 holes
// ══════════════════════════════════════════════════════════════════
window.GOLF_COURSES = window.GOLF_COURSES || [];
window.GOLF_COURSES.push({
    id: 5,
    name: '雪',
    nameEn: 'Snow Crest',
    desc: '凍てつく雪山の氷上コース。\n摩擦が低く滑りやすい地表を正確なショットで攻略しろ。',
    badge: 'ICE',
    emoji: '🏔️',
    theme: 'snow',
    groundColor:   0xe0f7fa,
    fairwayColor:  0xb2ebf2,
    greenColor:    0x80deea,
    skyColor:      0xcbe5fa,
    fogColor:      0xdeeefc,
    wallColor:     0xaed3e0,
    obstacleColor: 0xc4e4f0,
    GW: 252, GD: 312,

    groundFriction: 0.10, // Very slippery
    ballFriction:   0.10, // Ball slips
    linearDamping:  0.25, // Less friction slowing down the ball

    holes: [
        { par: 4, spawn: [  0, 3.5, 110], holeX: -60, holeZ:  50 },
        { par: 3, spawn: [-70, 3.5,  40], holeX:  10, holeZ:  10 },
        { par: 5, spawn: [ 20, 3.5,   0], holeX: -50, holeZ: -70 },
        { par: 3, spawn: [-60, 3.5,-100], holeX:  40, holeZ:-110 },
        { par: 4, spawn: [ 50, 3.5, -90], holeX:  70, holeZ: -10 },
        { par: 4, spawn: [ 80, 3.5,   0], holeX:  20, holeZ:  60 },
        { par: 5, spawn: [ 30, 3.5,  80], holeX: -90, holeZ: -10 },
        { par: 4, spawn: [-80, 3.5, -30], holeX: -10, holeZ:-100 },
    ],

    ramps: [
        [[20, 0.4, 14], [-30,  0.25,   80], -0.04,  0.03],
        [[14, 0.4, 14], [-10,  0.30,   25],  0.05, -0.02],
        [[18, 0.4, 18], [-20, -0.15,  -40],  0.00,  0.06],
        [[22, 0.4, 12], [ 40,  0.20,  -80], -0.05, -0.04],
        [[16, 0.4, 16], [ 60, -0.30,   30],  0.06,  0.00],
    ],

    obstacles: [
        [[15, 2,  6], [-20,  1,  60]],
        [[ 8, 2, 18], [ 20,  1,  30]],
        [[12, 2,  8], [-30,  1, -10]],
        [[ 6, 2, 14], [ 10,  1, -50]],
        [[20, 2,  8], [ 60,  1, -70]],
        [[10, 2,  6], [ 80,  1,  20]],
        [[14, 2, 10], [-50,  1, -30]],
    ],

    treePositions: [
        [-80,  80], [ 70, 100], [-90, -40], [ 80, -50],
        [ 90,  30], [-70,  10], [ 10,-120], [-40, 110]
    ],

    rockPositions: [
        [-50,  90], [ 40,  90], [-60, -60], [ 30, -80],
        [  0, -40], [-100, 20], [ 100,-10], [ 50,  10]
    ],
});
