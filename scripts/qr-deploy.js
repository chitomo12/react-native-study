#!/usr/bin/env node

const QRCode = require('qrcode-terminal');
const { execSync } = require('child_process');

// アプリの設定
const owner = 'chitomo12';
const slug = 'rn-study';
const branch = process.argv[2] || 'main';

// Expo Go用のURL
const expoUrl = `exp://exp.host/@${owner}/${slug}?branch=${branch}`;

console.log('\n🚀 React Native Sample App - QR Code for Expo Go\n');
console.log(`📱 Branch: ${branch}`);
console.log(`🔗 URL: ${expoUrl}\n`);

// QRコードを生成
console.log('📲 Scan this QR code with Expo Go app:\n');
QRCode.generate(expoUrl, { small: true });

console.log('\n📋 Instructions:');
console.log('1. Install Expo Go app on your mobile device');
console.log('2. Scan the QR code above');
console.log('3. The app will load automatically\n');

// 最新のEAS Update情報を表示
try {
  console.log('🔄 Latest EAS Update:');
  const updateInfo = execSync('eas update:list --limit=1 --json', { encoding: 'utf8' });
  const updates = JSON.parse(updateInfo);
  
  if (updates.length > 0) {
    const latest = updates[0];
    console.log(`   Message: ${latest.message}`);
    console.log(`   Date: ${new Date(latest.createdAt).toLocaleString()}`);
    console.log(`   Platforms: ${latest.platforms.join(', ')}`);
  }
} catch (error) {
  console.log('   (Unable to fetch update info)');
}

console.log('');