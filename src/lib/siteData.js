// Central site data — Sri Kumaran Blue Metals & Bricks

const MEDIA = '/images';

export const IMG = {
    logoBricks: `${MEDIA}/logo-bricks.jpg`,
    logoBlueMetals: `${MEDIA}/logo-blue-metals.jpg`,
    periyasami: `${MEDIA}/periyasami.jpg`,
    prabakaran: `${MEDIA}/prabakaran.jpg`,
    surya: `${MEDIA}/surya.jpg`,
    hero: `${MEDIA}/hero-jcb-yard.jpg`,
    flyAshBricks: `${MEDIA}/fly-ash-bricks.png`,
    mSand: `${MEDIA}/m-sand.png`,
    pSand: `${MEDIA}/p-sand.png`,
    aggregates: `${MEDIA}/aggregates.png`,
    blueMetalTexture: `${MEDIA}/blue-metal-texture.png`,
    aggregatesPile: `${MEDIA}/aggregates-pile.png`,
    chips: `${MEDIA}/chips.png`,
    quarry: `${MEDIA}/quarry.jpg`,
    breaking: `${MEDIA}/breaking.jpg`,
    loading: `${MEDIA}/loading.jpg`,
    haulTruck: `${MEDIA}/haul-truck.png`,
    rockFace: `${MEDIA}/rock-face.jpg`,
};

export const PHONE_OFFICE_DISPLAY = '+91 98428 66389';
export const PHONE_OFFICE_TEL = 'tel:+919842866389';
export const PHONE_OFFICE_RAW = '919842866389';
export const PHONE_PERSONAL_DISPLAY = '+91 63832 57570';
export const PHONE_PERSONAL_TEL = 'tel:+916383257570';

export const WHATSAPP = 'https://wa.me/919842866389';
export const whatsappLink = (message) =>
    `https://wa.me/919842866389?text=${encodeURIComponent(message)}`;

export const MAPS_LINK =
    'https://www.google.com/maps/place/SRI+KUMARAN+BLUE+METALS/@11.1521351,78.6390196,17z/data=!3m1!4b1!4m6!3m5!1s0x3babaa943079fcc5:0x797ec4fa1813c2b1!8m2!3d11.1521351!4d78.6390196!16s%2Fg%2F11g03kntnc';
export const MAPS_EMBED =
    'https://www.google.com/maps?q=11.1521351,78.6390196&z=17&output=embed';
export const DIRECTIONS_LINK =
    'https://www.google.com/maps/dir/?api=1&destination=11.1521351,78.6390196';

export const INSTAGRAM = 'https://www.instagram.com/kumaran_buliding_materials/';
export const CLOUDPHYSIO = 'https://cloudphysio.co.in/';

export const LOCATION = '4/12, Kilakuvadi Village, Thuraiyur, Tamil Nadu 621010';
export const LOCATION_SHORT = 'Kilakuvadi Village, Thuraiyur';
export const HOURS = 'Monday – Sunday, 7:00 AM – 6:00 PM';
export const HERITAGE = 'From Stone to Structure — A Legacy Built to Last.';

export const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Our Gallery', path: '/gallery' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Areas We Supply', path: '/areas' },
    { label: 'Contact Us', path: '/contact' },
];

export const AGGREGATE_SIZES = [
    '20 mm Jally',
    '40 mm Jally',
    '12 mm Jally',
    '6 mm Chips',
    'Quarry Dust',
    '100 Waste',
    'Wed Mix',
    'GSB',
    'Sludge',
];

export const AGGREGATE_FILLERS = ['Wed Mix', 'GSB', 'Sludge'];

export const DELIVERY_HUBS = {
    thuraiyurRoad: ['Kalipatti', 'Pulivalam', 'Pagalavadi', 'Karatampatti', 'Ammapatti'],
    otherThuraiyur: [
        'Kotathur', 'Puthanampatti', 'Kilakuvadi', 'Adivaram', 'Keerambur',
        'Sengathupatti', 'Vengadathanur', 'Narasingapuram', 'Eragudi', 'Kannanur',
        'Jammunathapuram', 'Renganathapuram', 'Sellipalayam', 'Murugur', 'Valispuram',
        'Punachi', 'Uppliyapuram', 'Pachaperumalpatti', 'Thapettai', 'Okkarai',
    ],
    perambalur: ['Nagalapuram', 'Adaikkampatti', 'T. Kalathur', 'Nakkaselam'],
};

export const GALLERY_ITEMS = [
    { src: IMG.mSand, category: 'blue-metals', caption: 'Double washed M Sand — crushed, graded and washed for concrete work.', alt: 'A large dark grey mound of manufactured M Sand at the yard' },
    { src: IMG.pSand, category: 'blue-metals', caption: 'P Sand — a finer manufactured sand intended for plastering and finishing.', alt: 'A close view of grey P Sand held in two hands' },
    { src: IMG.aggregates, category: 'blue-metals', caption: 'Hard blue-metal aggregates, crushed and graded for concrete.', alt: 'A close-up texture of crushed grey granite aggregates' },
    { src: IMG.flyAshBricks, category: 'bricks', caption: 'Sri Kumaran Fly Ash Bricks — ISI-certified, 9 × 4 × 3 inches.', alt: 'A single grey fly ash brick with SKB embossed on its face' },
    { src: IMG.blueMetalTexture, category: 'blue-metals', caption: 'Blue metal chips after crushing — sharp-edged and clean.', alt: 'A texture of small dark grey crushed blue-metal stones' },
    { src: IMG.aggregatesPile, category: 'blue-metals', caption: 'Graded aggregates stockpiled at the yard, ready for loading.', alt: 'A large pile of freshly crushed grey aggregates at the yard' },
    { src: IMG.chips, category: 'blue-metals', caption: '6 mm chips — a fine aggregate for topping and finishing work.', alt: 'An overhead view of fine 6 mm stone chips spread across the ground' },
    { src: IMG.hero, category: 'machinery', caption: 'A wheel loader filling a tipper with M Sand at the Kumaran yard.', alt: 'A yellow JCB wheel loader loading grey M Sand into a tipper truck' },
    { src: IMG.quarry, category: 'machinery', caption: 'Conveyor screens grading aggregates at the crushing plant.', alt: 'Conveyor belts over a large pile of graded aggregates at the quarry plant' },
    { src: IMG.breaking, category: 'machinery', caption: 'Rock-breaking excavators working the quarry face.', alt: 'Two yellow JCB excavators breaking rock at the quarry face' },
    { src: IMG.loading, category: 'machinery', caption: 'A haul truck loaded by an excavator inside the quarry.', alt: 'A yellow excavator loading a yellow haul truck with broken rock' },
    { src: IMG.haulTruck, category: 'machinery', caption: 'Tipper trucks moving material from the quarry to site.', alt: 'A haul truck driving past rock piles with an excavator working behind' },
    { src: IMG.rockFace, category: 'machinery', caption: 'A breaker excavator working close to the rock face.', alt: 'A yellow JCB excavator with a rock breaker at the grey rock face' },
    { src: `${MEDIA}/fly-ash-bricks-shed.png`, type: 'image', category: 'bricks', caption: 'Fresh fly ash bricks curing under the shed at the Kumaran brick yard.', alt: 'Rows of grey fly ash bricks curing under a blue-roofed shed at the brick yard' },
    { src: 'https://media.base44.com/videos/public/6ac62fe6861a5dfb9ebb252f/022fd4e0e_Video-22331.mp4', type: 'video', category: 'machinery', caption: 'Inside the Sri Kumaran yard — machinery and materials at work.', alt: 'Video from the Sri Kumaran Blue Metals yard' },
    { src: 'https://media.base44.com/videos/public/6ac62fe6861a5dfb9ebb252f/f41be1a68_WhatsAppVideo2026-10-08at124844PM.mp4', type: 'video', category: 'machinery', caption: 'Another look inside the Sri Kumaran yard at Thuraiyur.', alt: 'Video from the Sri Kumaran Blue Metals yard at Thuraiyur' },
];
