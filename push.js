var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BEgEBDC_lfzDDkGBy1zMja7FIlL1rmevg0-4GEWMSYlA9us0fmGyfhoIVXrgTG5CykRqXloFDBmBW-K-vpgwF44",
   "privateKey": "eTHumD9bZGOzYMj3EbHp6RiVz3XznXuWZD7Scy_KwFI"
};
 

 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint":" https://fcm.googleapis.com/fcm/send/f78lS831BS4:APA91bH79nYdcuRmA4AZ09blDDwr1pKhGGVnKyVmIaKrNM4HBw67KsRSCujyygzD5DJ5g8rOx8DvXz_6Hzu6MiMUZQtyXLnxWc5aeNADUTQGXXDA6724AbHB8UXjQIPiSbcBNpGIqgln   ",
   "keys": {
       "p256dh": "BIcjLynnEVIYw1voWWa5LtLKQi7ryOaqX0Cc7tculuwwyBjjVhFhTT+xhKW8j97d3YJQh3qTtXkife+I2Tpbdpo=  ",
       "auth": " QplDOJsYqMhGGrI3hsIXqg=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '694474045132',
    TTL: 60
 };
 webPush.sendNotification(
    pushSubscription,
    payload,
    options
 );