// ตั้งค่าระบบ — แก้ไฟล์นี้ไฟล์เดียวหลังติดตั้ง (ถ้าปล่อย API_URL ว่าง หน้าเว็บจะแสดงข้อมูลตัวอย่าง)
window.CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycby2QAeB_CNFdlF9RtFOkH-I3dhUIGwTqRxdpktDxvDjIsvhsZejAkWcqBROLrgzhOL2sg/exec',
  LIFF_ID: '2011909530-beJI0GnK',   // LIFF ID (LINE Login channel 2011909530)
  VIEW_KEY: '',     // เว้นว่างไว้ ส่งรหัสให้ผู้บริหารทางลิงก์ …/dashboard/?key=XXXX แทน
  STALE_MIN: 180,   // ไม่มีรายงานเกินกี่นาที ให้ขึ้นเตือน "ขาดการติดต่อ"
  REFRESH_SEC: 60   // แดชบอร์ดดึงข้อมูลใหม่ทุกกี่วินาที
};
