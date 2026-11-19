const fs = require('node:fs');
const assert = require('node:assert/strict');
const sharp = require('sharp');
(async () => {
  for (const file of ['src/Assests/srv.svg', 'public/srv.svg']) {
    const before = fs.readFileSync(file, 'utf8');
    let after = before;
    for (const match of before.matchAll(/data:img\/png;base64,([^"\s]+)/g)) {
      const original = Buffer.from(match[1], 'base64');
      const optimized = await sharp(original).webp({ lossless: true, effort: 6 }).toBuffer();
      if (optimized.length >= original.length) continue;
      // Validate the visible pixels, including alpha. Ignore RGB stored under
      // fully transparent pixels because it cannot affect SVG rendering.
      const a = await sharp(original).ensureAlpha().raw().toBuffer();
      const b = await sharp(optimized).ensureAlpha().raw().toBuffer();
      assert.equal(a.length, b.length);
      for (let i = 0; i < a.length; i += 4) {
        assert.equal(a[i + 3], b[i + 3]);
        if (a[i + 3] !== 0) assert.deepEqual(a.subarray(i, i + 3), b.subarray(i, i + 3));
      }
      after = after.replace(match[0], 'data:image/webp;base64,' + optimized.toString('base64'));
    }
    // The decorative texture tolerates high-quality compression. Only process
    // large lossless payloads, so rerunning the script cannot accumulate loss.
    for (const match of after.matchAll(/data:image\/webp;base64,([^"\s]+)/g)) {
      const original = Buffer.from(match[1], 'base64');
      if (original.length < 100000) continue;
      const compressed = await sharp(original).webp({ quality: 90, effort: 6 }).toBuffer();
      const a = await sharp(original).flatten({ background: '#000' }).raw().toBuffer();
      const b = await sharp(compressed).flatten({ background: '#000' }).raw().toBuffer();
      let error = 0;
      for (let i = 0; i < a.length; i++) error += (a[i] - b[i]) ** 2;
      const rms = Math.sqrt(error / a.length);
      if (rms <= 1 && compressed.length < original.length) after = after.replace(match[0], 'data:image/webp;base64,' + compressed.toString('base64'));
    }
    fs.writeFileSync(file, after);
    console.log(`${file}: ${Buffer.byteLength(before)} -> ${Buffer.byteLength(after)} bytes; texture compression limited to RMS error <= 1/255.`);
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
