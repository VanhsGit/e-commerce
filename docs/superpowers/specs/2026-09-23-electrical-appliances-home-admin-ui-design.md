# Thiết kế nhóm đồ điện gia dụng và chuẩn hóa giao diện sản phẩm

## Mục tiêu

Mở rộng hệ thống với nhóm sản phẩm **Đồ điện cơ – điện dân dụng**, hiển thị sản phẩm trên trang chủ theo hướng ưu tiên hình ảnh, đồng thời chuẩn hóa trải nghiệm quản trị theo bố cục trang Company hiện tại. Phạm vi cũng bao gồm sửa lỗi ánh xạ dữ liệu khi chỉnh sửa, thu nhỏ toggle và cải thiện hai giao diện Edit/Detail.

## Phạm vi

- Thêm entity, API và giao diện cho sản phẩm đồ điện gia dụng.
- Thêm trường `type` dạng enum với sáu giá trị:
  - Máy rửa xe
  - Dụng cụ cầm tay
  - Máy xây dựng
  - Mô Tơ
  - Máy Bơm
  - Ắc quy các loại
- Seed một sản phẩm mẫu cho mỗi loại bằng migration, có khóa định danh cố định để tránh tạo trùng.
- Tích hợp nhóm sản phẩm mới vào Home, Products, Product Detail và Admin.
- Chuẩn hóa các trang CRUD Brand, xe điện, máy nông nghiệp và đồ điện gia dụng theo ngôn ngữ giao diện của Company.
- Sửa toggle trạng thái và lỗi ánh xạ dữ liệu Edit/Update.
- Không thay đổi luồng xác thực, OTP, quản lý ảnh độc lập hoặc cấu trúc Company/Brand ngoài phần cần thiết để liên kết sản phẩm.

## Thiết kế dữ liệu và backend

### Entity

Tạo `ElectricalApplianceProduct` kế thừa `BaseEntity`. Entity có các trường chung phù hợp với hai nhóm sản phẩm hiện tại:

- `Name`, `Brand`, `Model`, `Description`
- `Type` (`ElectricalApplianceType`)
- `Price`, `StockQuantity`, `PictureUrl`
- `Power`, `Voltage`, `Capacity`, `Compatibility`
- `CompanyId`, `Company`
- `BrandId`, `BrandEntity`
- `Metadata`, `CreatedAt`, `UpdatedAt`, `IsUsed`

Enum được lưu dưới dạng chuỗi trong database để dữ liệu dễ đọc và ít phụ thuộc vào thứ tự số của enum.

### API

Tạo DTO cho read/create/update, AutoMapper profile, specification hỗ trợ lọc theo company, brand, type, từ khóa và trạng thái, cùng controller CRUD có cùng quy ước với hai controller sản phẩm hiện tại.

Endpoint dự kiến: `/api/ElectricalApplianceProducts`.

PUT yêu cầu `id` trong route trùng với `id` trong body. Soft delete đặt `IsUsed = false`; kích hoạt lại sử dụng PUT với DTO đầy đủ.

### Migration và seed

Migration tạo bảng mới, foreign key đến Company và Brand, cấu hình metadata JSON/JSONB và thêm sáu bản ghi mẫu. Dữ liệu seed sử dụng ID cố định. Company/Brand tham chiếu phải tồn tại; nếu dữ liệu hiện tại không có bản ghi ổn định để làm khóa ngoại, migration sẽ seed một Company và Brand mặc định dành cho dữ liệu mẫu trước khi seed sản phẩm.

Mỗi bản ghi có `Name` và `Type` tương ứng với danh sách đã duyệt, mô tả ngắn, giá/tồn kho mẫu và đường dẫn ảnh placeholder hợp lệ. Admin có thể sửa hoặc bổ sung nhiều sản phẩm cho cùng một type.

## Thiết kế frontend công khai

### Model và service

Thêm model TypeScript và service riêng cho đồ điện gia dụng. Kiểu `ProductKind` được mở rộng từ hai loại thành ba loại: `bike`, `machine`, `appliance`.

### Home

Home tải song song ba nhóm sản phẩm. Mỗi nhóm có một section sản phẩm nổi bật với card thiên về hình ảnh:

- Khung ảnh lớn, tỷ lệ thống nhất và nền sáng.
- Tên/type đặt ngắn gọn phía dưới hoặc overlay nhẹ.
- Không đưa mô tả dài và nhiều thông số lên card.
- Có trạng thái loading, empty và ảnh fallback.
- Desktop hiển thị dạng lưới; mobile cuộn ngang hoặc lưới một/hai cột tùy chiều rộng.

Nhóm đồ điện gia dụng được bổ sung vào tìm kiếm và điều hướng “Xem tất cả”. Chỉ sản phẩm có `IsUsed != false` xuất hiện ở giao diện công khai.

### Products và Product Detail

Products nhận bộ lọc `appliance`, hợp nhất kết quả tìm kiếm của cả ba service và giữ cùng một card model. Product Detail chọn service theo `kind`, hiển thị ảnh chính, thông tin chung và nhóm thông số phù hợp với từng loại sản phẩm.

## Thiết kế Admin

### Chuẩn giao diện

Company là chuẩn thị giác cho các trang CRUD sản phẩm và Brand:

- Page header, nút tạo mới và nút refresh nhất quán.
- Khối thống kê nhỏ và bộ lọc cùng khoảng cách.
- Bảng có ảnh thumbnail, tên, phân loại, tồn kho, trạng thái và hành động.
- Empty state rõ ràng.
- Modal Edit có header, nội dung chia nhóm và footer cố định.
- Modal Detail có hero gồm ảnh, tên, trạng thái và ID; thông tin còn lại hiển thị bằng detail list hai cột.

Users và Media giữ nghiệp vụ riêng nhưng dùng chung spacing, card, header, action button và trạng thái để không phá vỡ luồng chuyên biệt của chúng.

### Edit và ánh xạ dữ liệu

Mỗi trang sản phẩm dùng ba bước tách biệt:

1. `toFormValue(record)` chuyển API model sang giá trị form, bảo toàn enum, ID liên kết, boolean và giá trị nullable.
2. `toCreateDto(raw, metadata)` chuẩn hóa number/string/null trước khi POST.
3. `toUpdateDto(id, raw, metadata)` thêm ID và tạo đúng DTO PUT.

Không spread trực tiếp response model vào request vì response có các trường chỉ đọc như `companyName`, `brandName`, `categoryName`, `createdAt` và `updatedAt`. Cách tách này xử lý lỗi mapData hiện tại và giúp toggle dùng cùng một mapper cập nhật an toàn.

### Toggle

Toggle dùng class chung cho Admin, thu nhỏ track/thumb bằng token CSS của Angular Material thay vì scale toàn bộ component. Màu bật có độ tương phản rõ; màu tắt vẫn nhìn thấy đường track. Label trạng thái đặt cạnh toggle và vùng bấm vẫn đủ lớn để sử dụng.

## Xử lý lỗi

- API trả lỗi validation theo định dạng hiện tại; frontend ưu tiên hiển thị message cụ thể.
- Nếu một request trong Home lỗi, các nhóm tải thành công vẫn được hiển thị thay vì làm hỏng toàn trang.
- Form không đóng khi lưu lỗi và giữ nguyên dữ liệu người dùng đã nhập.
- Ảnh lỗi chuyển sang ảnh placeholder bằng directive hiện có.
- Seed/migration phải chạy lặp lại an toàn theo cơ chế migration của EF Core.

## Kiểm thử và xác minh

- Unit test backend cho AutoMapper create/update và specification/type mới.
- Integration hoặc controller test cho create, update, soft delete và lọc theo type nếu hạ tầng test cho phép.
- Test frontend cho các hàm map form/DTO, đặc biệt ID, enum, nullable, number và `isUsed`.
- Test component/service cho nhóm appliance và route detail.
- Chạy `dotnet test`, Angular unit tests phù hợp và production build.
- Kiểm tra migration sinh đúng schema/seed và rà soát trực quan Home, bảng Admin, toggle, Edit và Detail ở desktop/mobile.

## Tiêu chí hoàn thành

- Database có bảng đồ điện gia dụng và sáu sản phẩm mẫu, mỗi sản phẩm có type đúng.
- Admin quản lý đầy đủ nhóm mới; Edit không còn gửi payload sai hoặc mất dữ liệu.
- Các trang CRUD có giao diện thống nhất với Company; toggle nhỏ, rõ trạng thái.
- Home hiển thị ảnh sản phẩm nổi bật của cả ba nhóm và hỗ trợ điều hướng đến chi tiết.
- Products và Product Detail hoạt động với `appliance` mà không làm hỏng hai nhóm hiện có.
- Backend test, frontend test liên quan và build đều thành công.
