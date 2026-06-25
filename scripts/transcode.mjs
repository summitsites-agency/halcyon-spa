import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import ffmpegPath from 'ffmpeg-static';

// Usage: node scripts/transcode.mjs <input> <output-name> [startSec] [durSec] [dir]
//   dir defaults to "videos" -> public/videos/<name>.mp4 + <name>-poster.jpg
const [input, name, start = '0', dur = '10', dir = 'videos'] = process.argv.slice(2);
if (!input || !name) {
  console.error('usage: node scripts/transcode.mjs <input> <output-name> [start] [dur] [dir]');
  process.exit(1);
}

const outDir = `public/${dir}`;
mkdirSync(outDir, { recursive: true });

execFileSync(ffmpegPath, [
  '-ss', String(start), '-t', String(dur), '-i', input,
  '-vf', 'scale=-2:1080,fps=30', '-an',
  '-c:v', 'libx264', '-crf', '28', '-maxrate', '3000k', '-bufsize', '6000k',
  '-movflags', '+faststart', `${outDir}/${name}.mp4`,
], { stdio: 'inherit' });

execFileSync(ffmpegPath, [
  '-ss', String(Number(start) + 1), '-i', input, '-frames:v', '1',
  '-vf', 'scale=-2:1080', `${outDir}/${name}-poster.jpg`,
], { stdio: 'inherit' });

console.log(`done: ${outDir}/${name}.mp4 (+ poster)`);
