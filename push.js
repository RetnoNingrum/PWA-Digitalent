var webPush = require('web-push');

const vapidKeys = {
    "publicLey": "BEgrPgHFK3pHHjw3V1R3K0ESsPSdrsWAjsMjszU6qp39dCrnW039zY_6GTG3EWgMD-eoq3ztE8KW0bCBu1-mwZQ",
    "privateKey": "I24t4Ofj_I66DDRg5jESnGWPMemLkk3-VyVNXVkmwVY"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicLey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cdI2Ga7FLUo:APA91bE0Mm2Cu-G_i7CbNCjdjF1t-RiMfN48yh29AJDSeW-BXkGIs3W8PneRrDw627Ds7heSLukoQHkUkMcztIPt7aJb1Ek6Sysgm0KnmoYNzeZLEf9ZRD0ZoADA27BFcpPye-X1axJ4",
    "keys": {
        "p256dh": "BKVj4Rd2iqHrMN5HRWx8DLgOFyK0iCw1+YqyjUMBWXSDv2pnhFpaPsUZTlY8ibmMeaAUpQX7TKfTBQiDXYnzmqY=",
        "auth": "QUgCEITfQgFv0+Oq4v5/ow=="
    }
};
var payload = "Selamat aplikasi Anda sudah dapat menerima push notifikasi!"

var options = {
    gcmAPIKey: '1013958554500',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);
