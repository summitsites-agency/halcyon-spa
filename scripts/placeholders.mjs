import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import ffmpegPath from 'ffmpeg-static';

// Generates on-brand placeholder media so the site runs end-to-end with no
// broken images. Real photography / AI renders are a drop-in swap at the SAME
// paths (see public/CREDITS.md). Run with: npm run placeholders

mkdirSync('public/images', { recursive: true });
mkdirSync('public/videos', { recursive: true });

// Soft cream & blush tints (hex without leading # for ffmpeg color source).
const images = [
  // signature treatments
  ['images/treatment-massage.jpg', 1600, 1200, 'EAD9CF'],
  ['images/treatment-facial.jpg', 1600, 1200, 'F3E0DC'],
  ['images/treatment-hydro.jpg', 1600, 1200, 'E3DAD0'],
  // ritual (4:5)
  ['images/ritual.jpg', 1200, 1500, 'E8DCD0'],
  // practitioners (3:4)
  ['images/practitioner-maren.jpg', 1200, 1600, 'EDE2D7'],
  ['images/practitioner-sofia.jpg', 1200, 1600, 'F0DCD6'],
  ['images/practitioner-idris.jpg', 1200, 1600, 'E6DBCF'],
  // gallery
  ['images/gallery-1.jpg', 1600, 1100, 'EFE4DA'],
  ['images/gallery-2.jpg', 1100, 1100, 'F3E0DC'],
  ['images/gallery-3.jpg', 1100, 1100, 'E3DAD0'],
  ['images/gallery-4.jpg', 1100, 1100, 'EAD9CF'],
  ['images/gallery-5.jpg', 1100, 1100, 'E8DCD0'],
  // cta (deeper so light text reads) + hero poster
  ['images/cta.jpg', 1920, 1080, 'C9A39B'],
  ['videos/hero-poster.jpg', 1920, 1080, 'EFE4DA'],
];

for (const [out, w, h, color] of images) {
  execFileSync(ffmpegPath, [
    '-y', '-f', 'lavfi', '-i', `color=c=0x${color}:s=${w}x${h}`,
    '-frames:v', '1', `public/${out}`,
  ], { stdio: 'ignore' });
  console.log(`image: public/${out}`);
}

// Calm looping hero clip (gentle 8s solid tint; swap for a real spa clip later).
execFileSync(ffmpegPath, [
  '-y', '-f', 'lavfi', '-i', 'color=c=0xEFE4DA:s=1920x1080:d=8:r=30',
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
  'public/videos/hero.mp4',
], { stdio: 'ignore' });
console.log('video: public/videos/hero.mp4');

console.log('placeholders done.');
