# Metadata preview khi chia sẻ link

Trang chủ có metadata mặc định trong `client/src/index.html`. Trang chi tiết sản phẩm cập nhật title, description, URL chuẩn và ảnh đại diện theo sản phẩm trên client.

Các crawler của Facebook, Instagram và một số nền tảng khác thường chỉ đọc HTML ban đầu, không chạy Angular. Vì vậy API cũng thay metadata trong HTML trả về cho các route `/product-detail/{kind}/{id}` (`bike`, `machine`, `appliance`) dựa trên sản phẩm đang hoạt động. Ảnh dùng ảnh đầu tiên trong thư viện ảnh màu của sản phẩm.

Sau khi cập nhật frontend, build và copy SPA vào `API/wwwroot` theo quy trình hiện tại:

```powershell
cd client
npm run build:wwwroot
```

Sau đó deploy lại API. Domain phải truy cập công khai, và URL ảnh sản phẩm cũng phải truy cập công khai qua HTTP(S) để nền tảng mạng xã hội có thể tải ảnh xem trước. Sau khi deploy, dùng Facebook Sharing Debugger để kiểm tra URL hoặc làm mới cache preview đã lưu.
