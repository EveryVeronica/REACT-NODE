var admin = require("firebase-admin");

var serviceAccount = {
  type: "service_account",
  project_id: "everyproject-84667",
  private_key_id: "7d791647328ebc69d2920155226d9997d143a95a",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWam6NlxadVl7t\n63wkCngWsscv1AXr1wHDT88dB/cn3wzDxBk0p0wL6Ad3MfG26X3lWxqseIlLm5Qj\nH2AglmBczHYwZqe8ArnjM2kchEYblVQMzkcyxX1YsUxcr1CJZNpqU1r9pTj3DVsx\nTg1333turiGMyffYAO/UjW3/xqRCuNYPHy42wQlyLMV2tFj+KYVO65MtmZyQkSdK\nUQfrTdoikEmHv99iYRBdyuZByEFhRoMvMeDzHFEdvBQQIIlyiCuNMx46Skjy71/m\nicnFf4m8l73BbU9ma+yG412REbS7+4H5ruamGKLVXL5b3E1T7FgRQkMxP15jMNYV\njXstH0NzAgMBAAECggEAR48B4l2HVjnxdpoJ2LGcWRwbdA8X9A+5WHxfCa4w8KiG\nT5o67ZhLrvxnlNbPalgh21wgz/2WP8CX1K/IESjJVky1S6iC0wiu+76JGpZ5LgU4\nU9FNAQQAcpICxLNpCrxOxre6OaKBe9NAV7AM60MIW2r/LhYl0X78mi/grYcIvW6r\n7P8hr+nxSrw5Gs2zLHREOcmssNcufCMjnw25Phvc/iYxb6Ow1fxTTU7QlWLbiFMi\npMJfgWdwtr4J6by4YmMHiNDlzeTpfuZdDM0XS5WrPoz13oIrU2uBhozexTxb6W6C\nFvdRgTgj0OJ2JMiP8B9Xm9tMs7VREZdSGcJmsTznZQKBgQDP9Zy29j0Iv9zmRrei\ng0YGxhbpZHph2SQHX7ygH9A2MkXNju488zau/XBxonvt/ji9JMW+YYHgOUHBXNRW\nI5xvW2HXpAZMT5HBuoYE+kZl/eZPa0/1AtytoZROvqJkjSEBGn1wC0uDiuk7MHlO\nIK4MsxR8mdCNfo8LR3p8Y0mCXwKBgQC5KcdhrYRRMIQJSK/Stiigq57h+/bXiSpp\n/QSvfis/mDImoWKiEk72D3Buv/k0Wk7U/13PJAsI1v1SHXp7zwOQQHIP/bYkb/ei\n3f2V0HuFaQ+ldbJ3Z7QJ5hTcf0qUv7igIncGe2PD5oUCY7YEt1+Ed9nADCc1G0Ns\nj5gd/P7fbQKBgQDP254dXffZY/RGko5/uBhpMtu5wn10idYyLKXbopC5avxMHr3P\nXAXfWGBopFCcq8pIe5XO2aU32eL4g3GU+5kj0MH2CPNmmO2GJopINWPiE6p83TUZ\nHxg10FftcSvdtxYzBSg1soRy4YiHaccFqTJubRxgAlnq44HUc0hhRdg2nwKBgH8o\nyOs0rYzQQ6zYhR6wyF/m3HsXfWJxqXYWM7SNcgf/blmHNWRWLHHhEnaMUgj5B/BQ\n20yY1RciBd/xrJ8AANN83phKxV5qombwCulqvplVGFCp7oD/7+1oW+U9aauTqqgW\nYyVJca8kTS3h6it8/xTK9fhkoDxhV8FjL7VQfHxVAoGASmTyqUOp87E0A+SiKTj2\ngG6JB7CDzNaSfgk/HHZ4EulQshNmPGUzcMoBl7okJAKxu17ttuoremkRuE5OkxEl\n9FzCifKPa+m4xovqH8MrZCl3dhWqhmp6LL2t7kB6HZk3lfempVoDOtET064/b28b\nWZ7yOWReBqdyhjh1iWgtTXc=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-38r5l@everyproject-84667.iam.gserviceaccount.com",
  client_id: "116088910117974790655",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-38r5l%40everyproject-84667.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://everyproject-84667-default-rtdb.asia-southeast1.firebasedatabase.app",
});



module.exports = admin;