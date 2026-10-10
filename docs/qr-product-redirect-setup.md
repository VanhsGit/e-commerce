# QR mở sản phẩm bằng camera điện thoại

QR mới chứa URL tuyệt đối dạng:

```text
https://shop.example.vn/api/qr/products/bike/PRODUCT_ID
```

Camera điện thoại, Zalo hoặc ứng dụng quét QR có thể mở URL này trực tiếp. API công khai `GET /api/qr/products/{kind}/{id}` kiểm tra sản phẩm đang hoạt động, rồi trả HTTP 302 tới trang sản phẩm. `kind` gồm `bike`, `machine`, `appliance`. Sản phẩm đã xóa, bị ẩn hoặc loại không hợp lệ trả HTTP 404.

## Cấu hình link đích trên backend

Trong `API/appsettings.json`, mặc định dùng trang chi tiết trên cùng domain:

```json
{
  "QrRedirect": {
    "ProductUrlTemplate": "/product-detail/{kind}/{id}"
  }
}
```

Nếu frontend dùng domain khác, cấu hình URL tuyệt đối:

```json
{
  "QrRedirect": {
    "ProductUrlTemplate": "https://shop.example.vn/product-detail/{kind}/{id}"
  }
}
```

Cũng có thể đặt biến môi trường `QrRedirect__ProductUrlTemplate`. `{kind}` và `{id}` được thay bằng loại và ID sản phẩm đã mã hóa URL. Có thể dùng link cố định nếu muốn mọi QR mở cùng một trang. Link đích chỉ lấy từ cấu hình máy chủ, không nhận từ query string của người quét.

Sau khi thay cấu hình, khởi động lại API để áp dụng chắc chắn (file JSON được tải lại nếu host bật reload). Tem QR đã in vẫn dùng được khi thay link đích, miễn giữ nguyên domain và đường dẫn API trong QR. Redirect 302 không được cache.

## Cấu hình URL được ghi trong QR

`client/src/environments/environment.ts` và `environment.prod.ts` có `qrApiBaseUrl`:

```typescript
qrApiBaseUrl: '', // dùng apiUrl trên domain của website đang mở
```

Nếu API có domain riêng, đặt đầy đủ base URL bao gồm `/api/`, rồi build lại frontend:

```typescript
qrApiBaseUrl: 'https://api.example.vn/api/',
```

Tạo lại QR/PNG/PDF trong **Admin → Mã QR sản phẩm**. QR ID trần đã in trước đây vẫn đọc được bằng chức năng tra cứu trong website, nhưng cần in lại thành QR URL để camera điện thoại mở được trực tiếp. PNG, PDF và bản in đều dùng cùng URL API; chữ ID vẫn hiển thị trên tem.

## Thử trên điện thoại khi phát triển

1. Chạy API và Angular như hiện tại. Angular có proxy `/api` đến API và lắng nghe `0.0.0.0:4200`.
2. Điện thoại và máy tính dùng cùng Wi-Fi; mở `http://IP_LAN_MAY_TINH:4200` trên điện thoại hoặc máy tính để tạo QR. Nếu tạo từ `localhost`, đặt `qrApiBaseUrl` thành `http://IP_LAN_MAY_TINH:4200/api/`.
3. Nếu cấu hình link đích tuyệt đối, dùng cùng địa chỉ LAN cho `QrRedirect:ProductUrlTemplate`, ví dụ `http://IP_LAN_MAY_TINH:4200/product-detail/{kind}/{id}`. Mặc định đường dẫn tương đối đã hoạt động qua proxy Angular.
4. Quét QR bằng camera điện thoại rồi mở link. Khi triển khai thật, dùng domain công khai có HTTPS; `localhost` của máy tính không truy cập được từ điện thoại. Cho phép cổng 4200 qua firewall nếu cần.

Font toàn giao diện và tem PDF là **Be Vietnam Pro**, tải qua Google Fonts; cần kết nối internet để tải font lần đầu.
