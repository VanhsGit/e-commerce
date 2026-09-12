# Spec: Seed Dữ liệu Xe Điện + Máy Nông Nghiệp & Tách Component Trang Home

## Vấn đề

Hiện tại trang home đang sử dụng dữ liệu cứng (mock data) trong home.component.ts cho:
- `mockCompanies()`, `mockElectricBikes()`, `mockAgriculturalMachines()`, `mockWarranties()`, `mockCompanyStory()`
- Không có dữ liệu thật trong database cho các bảng `Companies`, `Brands`, `ElectricBikeProducts`, `AgriculturalMachineProducts`
- Toàn bộ template home nằm trong 1 file HTML/1 component duy nhất, khó bảo trì và tốn công

## Mục tiêu

1. **Seed toàn bộ dữ liệu mẫu (đủ entity đầy đủ) vào database thông qua StoreContextSeed (không dùng API, dùng JSON seed, không dùng, không dùng, không dùng, không dùng, không dùng, không dùng)
   - 3 Companies (VinFast EcoMobility, Động Lực NN Việt, Xe Điện Xanh SM)
   - 9 Brands (VinFast, Celesta, XSM, Samsung SDI, Bosch, Kubota, Yanmar, Giken, Kabuto)
   - ElectricBikeProducts: Bao gồm cả xe hoàn chỉnh + phụ tùng
   - AgriculturalMachineProducts: Bao gồm cả máy hoàn chỉnh + phụ tùng
   - Mỗi sản phẩm có Metadata (Dictionary<string, string>) để chứa field đặc biệt
2. **Tách 8 section của trang home thành các component standalone riêng biệt
3. **Home component gọi API thật (CompanyService, ElectricBikeService, AgriculturalMachineService) thay vì dùng mock data

## Người dùng & Ràng buộc cứng

- Module xe điện (ElectricBike): GET endpoints công khai (không cần auth)
- Module máy nông nghiệp (AgriculturalMachine): GET endpoints yêu cầu [Authorize] → trên Controller (giữ nguyên constraint hiện tại)
- Trang home hiển thị section máy nông nghiệp nhưng cần auth; do dữ liệu thật. Cần giải quyết cho người dùng chưa đăng nhập vẫn xem được section máy nông nghiệp nổi bật.
- Component tách ra dùng Angular Signals + standalone (giữ convention code)
- Seed theo pattern hiện tại: StoreContextSeed.SeedAsync + JSON files trong Infrastructure/Data/SeedData

## Phạm vi

### Làm (In Scope)
1. Backend:
   - Tạo JSON seed data mới cho Companies, Brands
   - Tạo JSON seed data cho ElectricBikeProducts (xe + phụ tùng)
   - Tạo JSON seed data cho AgriculturalMachineProducts (máy + phụ tùng)
   - Cập nhật StoreContextSeed.SeedAsync để seed các bảng trên theo đúng thứ tự (FK dependency)
   - Cập nhật MappingProfiles CategoryName hiển thị tiếng Việt thay vì enum.ToString()
   - Optional: bỏ [Authorize] khỏi GET list AgriculturalMachine để public xem section
2. Frontend:
   - Tách các section của home thành 8 component:
     1. HeroSectionComponent
     2. AboutFeatureSectionComponent
     3. PartnersSectionComponent
     4. BikesSectionComponent
     5. AgricultureSectionComponent
     6. WarrantySectionComponent
     7. CompanyStorySectionComponent  
     8. CtaSectionComponent
   - HomeComponent: inject services, gọi API thật trong ngOnInit, truyền Input cho các section component
   - Giữ nguyên styling, behavior scrollToSection, warranty lookup logic

### Không làm (Out of Scope)
- Không tạo entity Warranty trong database (warranty lookup vẫn là mock, tạm giữ trong home)
- Không tạo API riêng cho company story (stats, values, milestones – giữ là static data)
- Không refactor Product entity cũ (legacy products.json cũ)
- Không sửa đổi admin pages

## Yêu cầu chức năng

### FR-1 Seed Companies và Brands (rule
- 3 Company đủ field đầy đủ (Name, Description, LogoUrl, Address, PhoneNumber, Email, Website, Metadata
- 9 Brand đủ field đầy đủ (Name, Description, LogoUrl, Metadata
- FK Brand và Company không trùng Id
- Metadata dạng Dictionary<string, string> chứa các field đặc biệt (VD: Company: {"foundedYear": "2010"}
### FR-2 Seed ElectricBikeProducts đủ loại
- Ít nhất 6 sản phẩm: 4 xe (ElectricBikeModel) + 2-4 phụ tùng (ElectricBikePart)
- Bao gồm đầy đủ Name, Brand, Model, Category, Description, Price, StockQuantity, PictureUrl, Voltage, Power, BatteryCapacity, Compatibility (từng field null hợp lý
- CompanyId, BrandId phải tồn tại trong bảng Companies/Brands
### FR-3 Seed AgriculturalMachineProducts đủ loại
- Ít nhất 6 sản phẩm: 4 máy (MachineModel) + 2-4 phụ tùng (MachinePart)
- Bao gồm đầy đủ Name, Brand, Model, Category, Description, Price, StockQuantity, PictureUrl, EngineType, Power, FuelType, Capacity, Compatibility
- CompanyId, BrandId phải tồn tại
### FR-4 Metadata string-string cho từng sản phẩm
- Mỗi sản phẩm có ít nhất 2-3 entry trong Metadata
- VD xe điện: {"warrantyMonths": "24", "origin": "Việt Nam", "maxSpeed": "80 km/h"}
- VD phụ tùng: {"material": "Thép không gỉ", "origin": "Nhật Bản", "lifespanHours": "2000"}
### FR-5 StoreContextSeed seed theo đúng thứ tự
- Brands trước → Companies → ElectricBikeProducts → AgriculturalMachineProducts
- Kiểm tra Any() trước khi seed (idempotent)
- Seed chỉ chạy nếu bảng đang trống
### FR-6 CategoryName tiếng Việt
- ElectricBikeCategory hiển thị: ElectricBikeModel → "Xe điện", ElectricBikePart → "Phụ tùng xe điện"
- AgriculturalMachineCategory: MachineModel → "Thiết bị nông nghiệp", MachinePart → "Phụ tùng nông nghiệp"
- Hoặc chi tiết hơn nếu cần Category field hiển thị theo từng loại
### FR-7 Public GET Agricultural Machine list
- Cho phép người dùng vô danh xem được danh sách máy nông nghiệp nổi bật (bỏ hoặc điều chỉnh [Authorize] ở GetAgriculturalMachineProducts để get list)
- Giữ [Authorize] cho Create/Update/Delete
### FR-8 Tách 8 home section thành component
- Mỗi component là standalone, imports
- Mỗi component .ts + .html riêng
- Home component làm data fetching & lifecycle
- Các component nhận Input() cần thiết:
  - PartnersSection: Input companies
  - BikesSection: Input bikeProducts
  - AgricultureSection: Input machineProducts
  - WarrantySection: Input list bikes + machines + Output lookupWarranty fn
  - CompanyStorySection: Input story object
### FR-9 Home gọi API thật
- HomeComponent.ngOnInit gọi CompanyService.getCompanies(), ElectricBikeService.getAll(), AgriculturalMachineService.getAll()
- Dùng signal để lưu state
- featuredBikes / featuredMachines là computed()
- Error handling: nếu API lỗi hiển thị thông báo/chạy được với loading state

## Non-functional

### NFR-1 Performance
- Seed idempotent: chạy nhiều lần không duplicate data (kiểm tra Any()
### NFR-2 Convention
- Giữ coding conventions hiện tại (Signals, standalone, standalone)
- Không inline styling (tách .html / .ts
### NFR-3 Compatibility
- Không breaking changes với API shape hiện tại (DTO shapes)

## Giả định
1. Dữ liệu seed dựa trên mock data trong home.component.ts hiện tại
2. Hình ảnh sản phẩm dùng placeholder URL or ảnh sản phẩm hiện có trong Content/images nếu có thể
3. CategoryName tiếng Việt mapping qua helper trong MappingProfiles (không dùng enum.ToString())
4. AgriculturalMachine GET list bỏ [Authorize] theo yêu cầu hiển thị công khai

## Câu hỏi mở
1. Hình ảnh sản phẩm seed có dùng ảnh thực tế (Content/images) hay giữ placeholder URL?
→ Quyết định: giữ placeholder URL giống mock data cho đơn giản, có thể cập nhật ảnh thật bằng EntityImage sau.
2. BrandId trong sản phẩm tham chiếu bảng Brands mới (Id 1-9) hay dùng bảng ProductBrands cũ?
→ Quyết định: dùng bảng Brands mới (entity Brand.cs có trong StoreContext.Brands), bỏ qua ProductBrands cũ.

## Tiêu chí chấp nhận (Acceptance Criteria)

| ID | Loại | Nội dung |
|---|---|---|
| AC-1 | rule | Chạy `dotnet run` → log seed → database có 3 Company, 9 Brand, ≥6 ElectricBikeProduct, ≥6 AgriculturalMachineProduct |
| AC-2 | rule | GET /api/electricBikeProducts trả về ≥6 sản phẩm, mỗi có Metadata ≥2 entry, CompanyName, BrandName tiếng Việt |
| AC-3 | rule | GET /api/agriculturalMachineProducts (không token) trả về ≥6 sản phẩm (public access) |
| AC-4 | rule | Mỗi product trong seed có CompanyId, BrandId tồn tại, không FK violation |
| AC-5 | rule | Trang home load thành công, 8 section component render đúng (ktra selector trong DevTools) |
| AC-6 | rule | Home component không còn hàm mockCompanies, mockElectricBikes, mockAgriculturalMachines |
| AC-7 | rule | Bikes section hiển thị 4 sản phẩm đầu từ API (không phải mock) |
| AC-8 | rule | Agriculture section hiển thị 4 sản phẩm đầu từ API |
| AC-9 | rule | Partners section hiển thị 3 company từ API |
| AC-10 | rule | Warranty lookup hoạt động (vẫn dùng mock data warranty – không đổi behavior) |
| AC-11 | rubric | Mức độ bảo tồn UI/UX: 0-2. Điểm ≥2 (giữ nguyên 100% styling, spacing, animations) |
| AC-12 | rubric | Code organization & convention matching: 0-2. Điểm ≥2 (signals, standalone, tách .html/.ts đúng conventions) |
