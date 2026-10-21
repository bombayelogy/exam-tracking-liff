// ตั้งค่าระบบส่งรูปประจำเขต (แยกจาก config.js ของระบบรายงานรถ)
window.PHOTO_CONFIG = {
  // URL เว็บแอป Apps Script ของ "ระบบส่งรูป" (ลงท้าย /exec) — เว้นว่างไว้ = โหมดตัวอย่าง ไม่ส่งข้อมูลจริง
  API_URL: "https://script.google.com/macros/s/AKfycbw1T0_zL8dQvBQQ-QI6XUUcnTzEvcbL6Z787N8qg_tmw77rmB_9dmDRYhNvORRzx888rQ/exec",
  // LIFF ตัวเดียวกับระบบรายงานรถ (ให้ระบบรู้ชื่อไลน์ผู้ส่ง)
  LIFF_ID: "2011909530-beJI0GnK",
  // ขนาดรูปที่ส่ง (ด้านยาว, พิกเซล) และคุณภาพ JPEG
  MAX_EDGE: 1600,
  JPEG_QUALITY: 0.82
};
