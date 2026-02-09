/**
 * Script para convertir imágenes PNG/JPG a WebP
 *
 * USO:
 *   node scripts/convert-to-webp.js
 *
 * Esto convierte TODAS las imágenes PNG/JPG en public/img a WebP
 * con calidad del 90% (alta calidad, archivos más pequeños)
 *
 * Las imágenes originales se MANTIENEN (no se borran)
 * Los archivos WebP se crean junto a los originales
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_IMG_DIR = path.join(__dirname, '..', 'public', 'img');
const QUALITY = 90; // 90% calidad - excelente balance calidad/tamaño

// Extensiones a convertir
const EXTENSIONS = ['.png', '.jpg', '.jpeg'];

// Estadísticas
let stats = {
  converted: 0,
  skipped: 0,
  errors: 0,
  savedBytes: 0
};

async function convertImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  // Si ya existe el WebP y es más reciente que el original, saltar
  if (fs.existsSync(outputPath)) {
    const originalStat = fs.statSync(inputPath);
    const webpStat = fs.statSync(outputPath);

    if (webpStat.mtime >= originalStat.mtime) {
      console.log(`  ⏭️  Saltando (ya existe): ${path.basename(inputPath)}`);
      stats.skipped++;
      return;
    }
  }

  try {
    const originalSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    const saved = originalSize - newSize;
    const savedPercent = ((saved / originalSize) * 100).toFixed(1);

    stats.converted++;
    stats.savedBytes += saved;

    console.log(`  ✅ ${path.basename(inputPath)} → .webp (${formatBytes(originalSize)} → ${formatBytes(newSize)}, -${savedPercent}%)`);
  } catch (error) {
    console.error(`  ❌ Error con ${path.basename(inputPath)}: ${error.message}`);
    stats.errors++;
  }
}

async function processDirectory(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      console.log(`\n📁 Procesando carpeta: ${path.relative(PUBLIC_IMG_DIR, fullPath) || 'img/'}`);
      await processDirectory(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        await convertImage(fullPath);
      }
    }
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function main() {
  console.log('🖼️  Convertidor de Imágenes a WebP');
  console.log('=====================================');
  console.log(`📂 Directorio: ${PUBLIC_IMG_DIR}`);
  console.log(`🎨 Calidad: ${QUALITY}%`);
  console.log('');

  if (!fs.existsSync(PUBLIC_IMG_DIR)) {
    console.error('❌ El directorio public/img no existe');
    process.exit(1);
  }

  await processDirectory(PUBLIC_IMG_DIR);

  console.log('\n=====================================');
  console.log('📊 RESUMEN:');
  console.log(`   ✅ Convertidas: ${stats.converted}`);
  console.log(`   ⏭️  Saltadas: ${stats.skipped}`);
  console.log(`   ❌ Errores: ${stats.errors}`);
  console.log(`   💾 Espacio ahorrado: ${formatBytes(stats.savedBytes)}`);
  console.log('=====================================\n');

  if (stats.converted > 0) {
    console.log('📝 SIGUIENTE PASO:');
    console.log('   Ahora debes actualizar las referencias en el código');
    console.log('   de .png/.jpg a .webp');
    console.log('');
  }
}

main().catch(console.error);
