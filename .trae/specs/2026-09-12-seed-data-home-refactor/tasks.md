# Tasks: Seed Data & Home Refactor

Liên kết: [spec.md](file:///d:/e-commerce/.trae/specs/2026-09-12-seed-data-home-refactor/spec.md)

---

## Task 1: Tạo JSON seed data cho Companies và Brands

- **Trạng thái**: pending
- **Ưu tiên**: high
- **Phụ thuộc**: không có
- **Coverage AC**: AC-1, AC-4

### Mô tả
Tạo 2 file JSON trong `Infrastructure/Data/SeedData/`:
1. `seed-companies.json`: 3 công ty (VinFast EcoMobility, Động Lực Nông Nghiệp Việt, Xe Điện Xanh SM) – đủ field + metadata
2. `seed-brands.json`: 9 brand (VinFast, Celesta, XSM, Samsung SDI, Bosch, Kubota, Yanmar, Giken, Kabuto) – đủ field + metadata

### Lưu ý
- Id cố định 1-3 cho companies, 1-9 cho brands
- LogoUrl giữ placeholder URL hợp lý
- Metadata mỗi entity ≥ 2 entry
- JSON format phải đúng chuẩn (không trailing comma)

### Test Requirements
| TR | Loại | Nội dung |
|---|---|---|
| TR-1.1 | rule | `seed-companies.json` parse được thành 3 record, đủ field `Name,Description,LogoUrl,Address,PhoneNumber,Email,Website,Metadata` |
| TR-1.2 | rule | `seed-brands.json` parse được thành 9 record, đủ field |
| TR-1.3 | rule | Mỗi record có `Metadata.Count ≥ 2` |

---

## Task 2: Tạo JSON seed data cho ElectricBikeProducts & AgriculturalMachineProducts

- **Trạng thái**: pending
- **Ưu tiên**: high
- **Phụ thuộc**: Task 1 (để dùng đúng CompanyId, BrandId)
- **Coverage AC**: AC-1, AC-2, AC-3, AC-4

### Mô tả
Tạo 2 file JSON:
1. `seed-electric-bikes.json`: ≥6 sản phẩm
   - ≥4 xe hoàn chỉnh (ElectricBikeModel): xe máy điện, xe đạp điện, xe điện tải, xe thể thao
   - ≥2 phụ tùng (ElectricBikePart): Pin Lithium, Động cơ BLDC
   - Mỗi sản phẩm: đủ field, CompanyId ∈ {1,2,3}, BrandId ∈ {1..9}, Metadata ≥ 2 entry
2. `seed-agricultural-machines.json`: ≥6 sản phẩm
   - ≥4 máy hoàn chỉnh (MachineModel): máy gặt, máy cày, máy bơm, máy phun thuốc
   - ≥2 phụ tùng (MachinePart): lưỡi dao, lọc dầu
   - Mỗi sản phẩm: đủ field, CompanyId ∈ {2}, BrandId ∈ {6..9}, Metadata ≥ 2 entry

### Test Requirements
| TR | Loại | Nội dung |
|---|---|---|
| TR-2.1 | rule | `seed-electric-bikes.json` parse được ≥6 records, `Category` mix `ElectricBikeModel` và `ElectricBikePart` |
| TR-2.2 | rule | `seed-agricultural-machines.json` parse được ≥6 records, mix category |
| TR-2.3 | rule | Tất cả CompanyId, BrandId nằm trong khoảng đã định (không FK violation) |
| TR-2.4 | rule | Mỗi product `Metadata.Count ≥ 2` |
| TR-2.5 | rule | Phụ tùng có `Compatibility` khác null |

---

## Task 3: Cập nhật StoreContextSeed.SeedAsync để seed các bảng mới

- **Trạng thái**: pending
- **Ưu tiên**: high
- **Phụ thuộc**: Task 1, Task 2
- **Coverage AC**: AC-1, AC-4

### Mô tả
Sửa `Infrastructure/Data/StoreContextSeed.cs`:
- Thêm block seed `Brands` trước (nếu `!context.Brands.Any()`)
- Thêm block seed `Companies` (nếu `!context.Companies.Any()`)
- Thêm block seed `ElectricBikeProducts`
- Thêm block seed `AgriculturalMachineProducts`
- Đúng thứ tự: Brands → Companies → EB → AM (vì EB/AM FK tới cả 2)
- Mỗi block: ReadAllText → Deserialize List → Add → SaveChangesAsync
- Bọc try-catch, log lỗi với logger

### Test Requirements
| TR | Loại | Nội dung |
|---|---|---|
| TR-3.1 | rule | Build project thành công (no compile error) |
| TR-3.2 | rule | Chạy seed lần 1 → có dữ liệu. Chạy lại lần 2 → không duplicate (Any() check) |

---

## Task 4: Sửa MappingProfiles cho CategoryName tiếng Việt + Bỏ [Authorize] GET list máy nông nghiệp

- **Trạng thái**: pending
- **Ưu tiên**: high
- **Phụ thuộc**: không có
- **Coverage AC**: AC-2, AC-3

### Mô tả
1. Sửa `API/Helpers/MappingProfiles.cs`:
   - Thay vì `.Category.ToString()`, dùng mapping cho CategoryName tiếng Việt:
     - `ElectricBikeModel` → "Xe điện hoàn chỉnh"
     - `ElectricBikePart` → "Phụ tùng xe điện"
     - `MachineModel` → "Máy nông nghiệp"
     - `MachinePart` → "Phụ tùng nông nghiệp"
   - Hoặc giữ nguyên nếu frontend xử lý (không bắt buộc backend xử lý – AC-6 flexible)
2. Sửa `AgriculturalMachineProductsController.cs`:
   - Bỏ `[Authorize]` khỏi phương thức `GetAgriculturalMachineProducts` (HTTP GET list)
   - Giữ `[Authorize]` cho Get by id (để phù hợp với project_memory hard constraint? -> Quyết định: Đọc lại spec → chỉ public GET list, giữ Get(id) với Authorize hoặc bỏ cả 2? → theo FR-7: cho phép public list, giữ Create/Update/Delete Authorize)
   - Update spec FR-7 mapping đúng

### Test Requirements
| TR | Loại | Nội dung |
|---|---|---|
| TR-4.1 | rule | Build thành công |
| TR-4.2 | rule | GET /api/agriculturalMachineProducts không cần token trả về 200 với data |
| TR-4.3 | rule | CategoryName trong DTO trả về tiếng Việt |

---

## Task 5: Tạo 8 Section Components cho trang Home (Frontend)

- **Trạng thái**: pending
- **Ưu tiên**: high
- **Phụ thuộc**: không có
- **Coverage AC**: AC-5, AC-11, AC-12

### Mô tả
Tạo thư mục `client/src/app/home/sections/` chứa 8 component:
Mỗi component là standalone, tách .html + .ts riêng:

1. **hero-section.component**
   - Input: không (static content + scrollToSection Output EventEmitter<string>)
   - HTML: section#hero
2. **about-feature-section.component**
   - Input: không (static)
   - HTML: section#about
3. **partners-section.component**
   - Input: `companies: Signal<Company[]> | Company[]`
   - HTML: section#partners
4. **bikes-section.component**
   - Input: `products: Signal<ElectricBikeProduct[]> | ElectricBikeProduct[]`, `featuredCount?: number` (default 4)
   - HTML: section#bikes
   - Output: `scrollRequested: EventEmitter<string>`
5. **agriculture-section.component**
   - Input: `products: Signal<AgriculturalMachineProduct[]>`, `featuredCount?: number`
   - HTML: section#agriculture
   - Output: `scrollRequested: EventEmitter<string>`
6. **warranty-section.component**
   - Input: `warrantySerial`, `warrantyPhone`, `warrantyResult`, `warrantySearchSubmitted` (hoặc gom vào object)
   - Output: `serialChange`, `phoneChange`, `lookup`, `reset` (EventEmitters)
   - HTML: section#warranty
7. **company-story-section.component**
   - Input: `story: { heading, subheading, mission, vision, introParagraph, stats, values, milestones, ceoQuote } | null`
   - HTML: section#intro-company
8. **cta-section.component**
   - Input: không (static)
   - HTML: section#cta

### Convention tuân thủ:
- Standalone component, `imports` đủ CommonModule, RouterLink, Nz modules tương ứng
- Signals + Input() với transform nếu cần
- Template URL tách file `.html`
- Selector: `app-home-hero`, `app-home-about`, `app-home-partners`, ...

### Test Requirements
| TR | Loại | Nội dung |
|---|---|---|
| TR-5.1 | rule | `ng build` (hoặc `npm run build`) không lỗi biên dịch 8 component |
| TR-5.2 | rule | Mỗi component có file .html + .ts riêng (không inline template) |
| TR-5.3 | rubric | Thiết kế UI/UX so với gốc: 0-2, ngưỡng ≥2 (giữ nguyên spacing, màu, animation, responsive) |

---

## Task 6: Refactor HomeComponent - gọi API thật & dùng 8 section component

- **Trạng thái**: pending
- **Ưu tiên**: high
- **Phụ thuộc**: Task 3, Task 4, Task 5
- **Coverage AC**: AC-5, AC-6, AC-7, AC-8, AC-9, AC-10, AC-12

### Mô tả
Sửa `client/src/app/home/home.component.ts` và `.html`:

#### home.component.ts:
1. Inject services: `CompanyService`, `ElectricBikeService`, `AgriculturalMachineService`
2. Xóa các hàm `mockCompanies()`, `mockElectricBikes()`, `mockAgriculturalMachines()` (giữ `mockWarranties()`, `mockCompanyStory()` tạm thời)
3. Trong `ngOnInit`:
   ```
   forkJoin([
     companyService.getCompanies(),
     electricBikeService.getAll(),
     agriculturalMachineService.getAll()
   ]).subscribe(([companies, bikes, machines]) => {
     this.companies.set(companies);
     this.electricBikes.set(bikes);
     this.agriculturalMachines.set(machines);
   });
   ```
4. Giữ signals: `companies`, `electricBikes`, `agriculturalMachines`, `companyStory`, warranty-related
5. Giữ `featuredBikes = computed(...)`, `featuredMachines = computed(...)`
6. Giữ `lookupWarranty()`, `resetWarranty()`, `scrollToSection()`, `getDetailUrl()`

#### home.component.html:
- Thay toàn bộ 8 section bằng selector component:
  ```html
  <app-home-hero (navigate)="scrollToSection($event)"></app-home-hero>
  <app-home-about></app-home-about>
  <app-home-partners [companies]="companies"></app-home-partners>
  <app-home-bikes [products]="electricBikes" (navigate)="scrollToSection($event)"></app-home-bikes>
  <app-home-agriculture [products]="agriculturalMachines" (navigate)="scrollToSection($event)"></app-home-agriculture>
  <app-home-warranty
    [serial]="warrantySerial()"
    [phone]="warrantyPhone()"
    [result]="warrantyResult()"
    [submitted]="warrantySearchSubmitted()"
    (serialChange)="warrantySerial.set($event)"
    (phoneChange)="warrantyPhone.set($event)"
    (lookup)="lookupWarranty()"
    (reset)="resetWarranty()">
  </app-home-warranty>
  <app-home-company-story [story]="companyStory()"></app-home-company-story>
  <app-home-cta></app-home-cta>
  ```

### Test Requirements
| TR | Loại | Nội dung |
|---|---|---|
| TR-6.1 | rule | `npm run build` không lỗi |
| TR-6.2 | rule | Home component không còn hàm mockCompanies, mockElectricBikes, mockAgriculturalMachines (search = 0 match) |
| TR-6.3 | rule | Tải trang home: Network tab có request GET /api/companies, /api/electricBikeProducts, /api/agriculturalMachineProducts (với token hoặc không) |
| TR-6.4 | rule | Bikes section render đúng 4 cards (từ API) |
| TR-6.5 | rule | Agriculture section render đúng 4 cards (từ API) |
| TR-6.6 | rule | Partners section render 3 company cards (từ API) |
| TR-6.7 | rule | Warranty lookup: nhập VF-E200-882134 → chuyển trang chi tiết (behavior không đổi) |
| TR-6.8 | rubric | Code convention: 0-2, ngưỡng ≥2 (signals, computed, inject, standalone, tách html/ts) |

---

## Task 7: Manual Integration Test - Full Flow

- **Trạng thái**: pending
- **Ưu tiên**: medium
- **Phụ thuộc**: Task 3, Task 4, Task 6
- **Coverage AC**: AC-1, AC-2, AC-3, AC-5, AC-7, AC-8, AC-9, AC-10

### Mô tả
1. Xóa database cũ hoặc apply migration
2. Chạy API → kiểm tra console có log seed success
3. Dùng Swagger/Postman test:
   - GET /api/companies → 200, 3 items
   - GET /api/brands → 200, 9 items
   - GET /api/electricBikeProducts → 200, ≥6 items, mỗi có metadata
   - GET /api/agriculturalMachineProducts → 200 (public!), ≥6 items
4. Chạy client → mở / → kiểm tra:
   - Load lần đầu có request network API thật
   - Hiển thị đúng 3 đối tác, 4 xe, 4 máy
   - Scroll smooth hoạt động
   - Bảo hành tra cứu hoạt động
   - Responsive không lỗi layout

### Test Requirements
| TR | Loại | Nội dung |
|---|---|---|
| TR-7.1 | rule | 4 endpoints GET list trả về 200 với số record mong muốn |
| TR-7.2 | rule | Trang home load thành công, không console error |
| TR-7.3 | rule | Ấn "Xem chi tiết" card xe → điều hướng /product-detail/bike/:id hoạt động |
