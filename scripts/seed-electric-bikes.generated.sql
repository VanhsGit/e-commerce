BEGIN; SET LOCAL standard_conforming_strings = on; SET LOCAL client_encoding = 'UTF8';
CREATE TEMP TABLE seed_bike_options (images_only boolean NOT NULL) ON COMMIT DROP;
INSERT INTO seed_bike_options VALUES (FALSE);
CREATE TEMP TABLE seed_bike_categories (slug text PRIMARY KEY, name text, parent_slug text) ON COMMIT DROP;
CREATE TEMP TABLE seed_bike_images (id text, relative_path text, original_name text, mime_type text, file_size bigint) ON COMMIT DROP;
CREATE TEMP TABLE seed_bike_products (id text, name text, model text, category_slug text, price numeric, stock_quantity integer, picture_url text, battery_capacity text, company_id text, brand_id text, colors jsonb, image_urls jsonb) ON COMMIT DROP;
INSERT INTO seed_bike_categories VALUES ('133-12a', '133-12A', '');
INSERT INTO seed_bike_categories VALUES ('133-12a-ban-full', 'Bản full', '133-12a');
INSERT INTO seed_bike_categories VALUES ('133-12a-ban-re', 'Bản rẻ', '133-12a');
INSERT INTO seed_bike_categories VALUES ('133-12a-ban-thuong', 'Bản thường', '133-12a');
INSERT INTO seed_bike_categories VALUES ('133-20a', '133-20A', '');
INSERT INTO seed_bike_categories VALUES ('133-20a-ban-full', 'Bản full', '133-20a');
INSERT INTO seed_bike_categories VALUES ('133-20a-ban-re', 'Bản rẻ', '133-20a');
INSERT INTO seed_bike_categories VALUES ('133-20a-ban-thuong', 'Bản thường', '133-20a');
INSERT INTO seed_bike_categories VALUES ('xe-bull', 'Xe Bull', '');
INSERT INTO seed_bike_categories VALUES ('xe-cv-2-yen', 'Xe CV 2 yên', '');
INSERT INTO seed_bike_categories VALUES ('xe-m1', 'Xe M1', '');
INSERT INTO seed_bike_categories VALUES ('xe-q1', 'Xe Q1', '');
INSERT INTO seed_bike_categories VALUES ('xe-xs', 'Xe XS', '');
INSERT INTO seed_bike_images VALUES ('seed-bike-image-df2e7d72de51e7f9cc8474b093933eee', 'library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/50.jpg', '50.jpg', 'image/jpeg', 1595834);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-6df1ec565c94a9c3d4828392deb0edb8', 'library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/51.jpg', '51.jpg', 'image/jpeg', 1755451);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-5e440ce7dbb1ac3f64f26150ec086235', 'library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/52.jpg', '52.jpg', 'image/jpeg', 1311736);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-88af4d842583fa5075afaa8371ff0fc4', 'library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/53.jpg', '53.jpg', 'image/jpeg', 1788516);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-b4a4c917ac4d9a993e5c1737e932817e', 'library/2026/11/anh xe dien/12AH BẢN FUL/Màu Đỏ/1.jpg', '1.jpg', 'image/jpeg', 1566547);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-753ca2119883fcc42c14eeabb4e40d32', 'library/2026/11/anh xe dien/12AH BẢN FUL/Màu Đỏ/2.jpg', '2.jpg', 'image/jpeg', 1803285);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-af352b0d1e67a49c57b69a8ee0367ce2', 'library/2026/11/anh xe dien/12AH BẢN FUL/Màu Đỏ/3.jpg', '3.jpg', 'image/jpeg', 1141318);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-662a4970ca1ce00cef29920663c62124', 'library/2026/11/anh xe dien/12AH BẢN FUL/Màu Đỏ/4.jpg', '4.jpg', 'image/jpeg', 1338581);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-162ea3fefd7e0ff0451f16358539b7a0', 'library/2026/11/anh xe dien/12AH BẢN FUL/Màu xám/50.jpg', '50.jpg', 'image/jpeg', 1636495);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-898428f5684b3b5faa4ec6830e8c84c5', 'library/2026/11/anh xe dien/12AH BẢN FUL/Màu xám/51.jpg', '51.jpg', 'image/jpeg', 1343350);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-5caab4210740096861b2c583e846485c', 'library/2026/11/anh xe dien/12AH BẢN FUL/Màu xám/52.jpg', '52.jpg', 'image/jpeg', 1526614);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-4817f8d91d14fe6da4c01976389399a9', 'library/2026/11/anh xe dien/12AH BẢN FUL/Màu xám/53.jpg', '53.jpg', 'image/jpeg', 1432888);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-623757162880bcb433f002c0379accc7', 'library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/1.jpg', '1.jpg', 'image/jpeg', 1347340);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-dacd8b7301872fbec0c7dc2a0f3320e9', 'library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/2.jpg', '2.jpg', 'image/jpeg', 1737192);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-2e8e7da236204f53856606790e2db111', 'library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/3.jpg', '3.jpg', 'image/jpeg', 1486698);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-a762d4f9d37101a16b17ccbcfa6ffc37', 'library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/4.jpg', '4.jpg', 'image/jpeg', 1710305);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-66f6b129c345c78173508b8b1f91047c', 'library/2026/11/anh xe dien/12AH BẢN RẺ/hồng phấn/29.jpg', '29.jpg', 'image/jpeg', 1288221);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-a309b93d365d337ac123b29ad614f7df', 'library/2026/11/anh xe dien/12AH BẢN RẺ/hồng phấn/30.jpg', '30.jpg', 'image/jpeg', 1368087);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-56a6aecb0fd35c6ce6fa9b6b6c6f7175', 'library/2026/11/anh xe dien/12AH BẢN RẺ/hồng phấn/31.jpg', '31.jpg', 'image/jpeg', 1434270);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-e155cb282f96cb21036abd4ae9555c1b', 'library/2026/11/anh xe dien/12AH BẢN RẺ/hồng phấn/32.jpg', '32.jpg', 'image/jpeg', 1448497);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-cc519bc38328c0854dcc7a4068ad4ead', 'library/2026/11/anh xe dien/12AH BẢN RẺ/xanh/9.jpg', '9.jpg', 'image/jpeg', 1323318);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-1926ace765a7bb40e20e992c8b830b00', 'library/2026/11/anh xe dien/12AH BẢN RẺ/xanh/10.jpg', '10.jpg', 'image/jpeg', 1558681);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-820ed49aa5dce14e9437980a0f142ae3', 'library/2026/11/anh xe dien/12AH BẢN RẺ/xanh/11.jpg', '11.jpg', 'image/jpeg', 1624400);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-364a84aab99f0e5ff96da10c356aa370', 'library/2026/11/anh xe dien/12AH BẢN RẺ/xanh/12.jpg', '12.jpg', 'image/jpeg', 1879348);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-0f09a555f638b1d556224a18ad06cc59', 'library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/37.jpg', '37.jpg', 'image/jpeg', 1459618);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-17937f621cc7278fa82ac73d7c90b5fd', 'library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/38.jpg', '38.jpg', 'image/jpeg', 1362472);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-5d310fe28bde864c7f9fbbfd27a04bee', 'library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/39.jpg', '39.jpg', 'image/jpeg', 1419040);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d8667bb358b284d84a24a6dd33b74536', 'library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/40.jpg', '40.jpg', 'image/jpeg', 1640307);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-6ed9b61bfd08ba144d20f1cc2e52b890', 'library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/9.jpg', '9.jpg', 'image/jpeg', 1012223);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-671d4e18808f693fc010f862b1432ca5', 'library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/10.jpg', '10.jpg', 'image/jpeg', 1951884);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-bdc49c165a1b955ff84772effc63aa32', 'library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/11.jpg', '11.jpg', 'image/jpeg', 1136564);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-de5b6f271011c0594e671ad409bffd51', 'library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/14.jpg', '14.jpg', 'image/jpeg', 1475798);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-cb3ba2ec00f94256435cc111bffce49c', 'library/2026/11/anh xe dien/20AH Bản full/màu xám/1.jpg', '1.jpg', 'image/jpeg', 1352251);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-16bf772e11972487e5aabc454a08160d', 'library/2026/11/anh xe dien/20AH Bản full/màu xám/2.jpg', '2.jpg', 'image/jpeg', 1595693);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-1735ed5cc016e60191f198c60755e167', 'library/2026/11/anh xe dien/20AH Bản full/màu xám/3.jpg', '3.jpg', 'image/jpeg', 1727159);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-a3563297e1f31899a66648582497b2e4', 'library/2026/11/anh xe dien/20AH Bản full/màu xám/4.jpg', '4.jpg', 'image/jpeg', 1799243);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-9795dc1a9d297862393bf0c4bc213a03', 'library/2026/11/anh xe dien/20AH Bản full/tem đen đỏ/1.jpg', '1.jpg', 'image/jpeg', 1636891);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-23b1988362c4e5a338895575e849526e', 'library/2026/11/anh xe dien/20AH Bản full/tem đen đỏ/2.jpg', '2.jpg', 'image/jpeg', 1613688);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-66d4ae2e7b1e50c650434d81f900512a', 'library/2026/11/anh xe dien/20AH Bản full/tem đen đỏ/3.jpg', '3.jpg', 'image/jpeg', 1562024);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-927c7172a5fd6b2fd981fb4f5bb083fc', 'library/2026/11/anh xe dien/20AH Bản full/tem đen đỏ/4.jpg', '4.jpg', 'image/jpeg', 1632173);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-beda3ff0aed710af8d9976f47e9b257a', 'library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/1.jpg', '1.jpg', 'image/jpeg', 1507084);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-dee83b33d7eb7d1fb1676ff9a6a27e29', 'library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/2.jpg', '2.jpg', 'image/jpeg', 1866198);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-92582b44d5f41df6e747bbebe6308313', 'library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/3.jpg', '3.jpg', 'image/jpeg', 1325876);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-ef83dc9b5a2c9b3d6a746a869c4721be', 'library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/4.jpg', '4.jpg', 'image/jpeg', 1555258);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-39230b0ea13cb6cbc63eea7987f76e63', 'library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/5.jpg', '5.jpg', 'image/jpeg', 1491628);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d4f0bab5066075c5fe142b29ad439233', 'library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/6.jpg', '6.jpg', 'image/jpeg', 1723534);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d39228933e52eeab14f0427bb24ac914', 'library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/7.jpg', '7.jpg', 'image/jpeg', 1715031);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-e239eeb844a2be7994e258126ff8b811', 'library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/8.jpg', '8.jpg', 'image/jpeg', 1421546);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-ae8b5aaaf17efd0a507efa4124de7c9a', 'library/2026/11/anh xe dien/20AH Bản thường/Tem đen đỏ/9.jpg', '9.jpg', 'image/jpeg', 1451495);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-4662abc69aaa7675257f727e052d5056', 'library/2026/11/anh xe dien/20AH Bản thường/Tem đen đỏ/10.jpg', '10.jpg', 'image/jpeg', 1990502);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-cfcdffb9ba29b747e73c953df05246fe', 'library/2026/11/anh xe dien/20AH Bản thường/Tem đen đỏ/11.jpg', '11.jpg', 'image/jpeg', 1550478);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-c89d4ce0611c867ff9306180684e6796', 'library/2026/11/anh xe dien/20AH Bản thường/Tem đen đỏ/12.jpg', '12.jpg', 'image/jpeg', 1795999);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-17d018e24f19d01305365709d33c46cf', 'library/2026/11/anh xe dien/20AH Bản thường/Tem xám/20.jpg', '20.jpg', 'image/jpeg', 1802408);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-6a1e06cb1f51354a962922f8eea6e7ce', 'library/2026/11/anh xe dien/20AH Bản thường/Tem xám/21.jpg', '21.jpg', 'image/jpeg', 1852932);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-5b4efd05319b2d3c74fe1d7764363a1a', 'library/2026/11/anh xe dien/20AH Bản thường/Tem xám/22.jpg', '22.jpg', 'image/jpeg', 1623596);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-8f5dda7504fce545e4359fc5c17bf0a4', 'library/2026/11/anh xe dien/20AH Bản thường/Tem xám/23.jpg', '23.jpg', 'image/jpeg', 1878366);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-f6f17a8d6f1b8855929338f0ed131a99', 'library/2026/11/anh xe dien/20AH Bản thường/Tem Xanh/5.jpg', '5.jpg', 'image/jpeg', 1625750);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-b270a56b83252ef6383a27f51f357f94', 'library/2026/11/anh xe dien/20AH Bản thường/Tem Xanh/6.jpg', '6.jpg', 'image/jpeg', 1692049);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-262502dcf5e1ea17d5837df77522df26', 'library/2026/11/anh xe dien/20AH Bản thường/Tem Xanh/7.jpg', '7.jpg', 'image/jpeg', 1550732);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-a73354f29ba13c52031d3e463382b770', 'library/2026/11/anh xe dien/20AH Bản thường/Tem Xanh/8.jpg', '8.jpg', 'image/jpeg', 1688362);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d18b5eb3232332dd2104ac086af1bdd6', 'library/2026/11/anh xe dien/20AH Bản thường/xám xi măng/20.jpg', '20.jpg', 'image/jpeg', 1504563);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-1b36433a8e4159fd26021c3958babcdd', 'library/2026/11/anh xe dien/20AH Bản thường/xám xi măng/21.jpg', '21.jpg', 'image/jpeg', 1628556);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-638557e35dcb50a7e867737705b7729c', 'library/2026/11/anh xe dien/20AH Bản thường/xám xi măng/22.jpg', '22.jpg', 'image/jpeg', 869175);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-5cf5359a0362f89e3ba092b51795487d', 'library/2026/11/anh xe dien/20AH Bản thường/xám xi măng/23.jpg', '23.jpg', 'image/jpeg', 1355357);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-6fc7644fea70739f46c9d1ec009fbf74', 'library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/1.jpg', '1.jpg', 'image/jpeg', 1689879);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d866676d5f3b73784aa3237baebf3782', 'library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/4.jpg', '4.jpg', 'image/jpeg', 1638435);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-04f225ba850644479b328b0e1b638b02', 'library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/8.jpg', '8.jpg', 'image/jpeg', 1766464);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-9ca60199f9f2ef1befce11ecf95854d8', 'library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/11.jpg', '11.jpg', 'image/jpeg', 1916292);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d6e9400e54f889606737e6b557602d62', 'library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/12.jpg', '12.jpg', 'image/jpeg', 198793);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-a6ab6b0c567b20835d4c53ffc863780d', 'library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/13.jpg', '13.jpg', 'image/jpeg', 1038041);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-a0967163f28628694886f28d0a2e1576', 'library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/14.jpg', '14.jpg', 'image/jpeg', 1219660);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-f414765cb16a195f9516f649d9868e44', 'library/2026/11/anh xe dien/2 Yên/Đen Bóng/1.jpg', '1.jpg', 'image/jpeg', 1689879);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-fc5f42cd67315b566594d3c5ed171bea', 'library/2026/11/anh xe dien/2 Yên/Đen Bóng/2.jpg', '2.jpg', 'image/jpeg', 975747);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-5f1ea1f272dd6cda162f077b2d758a05', 'library/2026/11/anh xe dien/2 Yên/Đen Bóng/3.jpg', '3.jpg', 'image/jpeg', 1381447);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-95e6ca0cf45c3d62d6ff359cdc896791', 'library/2026/11/anh xe dien/2 Yên/Kem/4.jpg', '4.jpg', 'image/jpeg', 1638435);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-111dc9a16a3d1002a4723300cdc5155e', 'library/2026/11/anh xe dien/2 Yên/Kem/5.jpg', '5.jpg', 'image/jpeg', 1063748);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-23a0b2436361ce01b7dcf921a4050ac2', 'library/2026/11/anh xe dien/2 Yên/Kem/6.jpg', '6.jpg', 'image/jpeg', 1543851);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-0c688167d66653f75a1eb1b3ceaeb4fb', 'library/2026/11/anh xe dien/2 Yên/Màu xám/8.jpg', '8.jpg', 'image/jpeg', 1766464);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-a69e3230eb9a2dd0e9781b1fecaef825', 'library/2026/11/anh xe dien/2 Yên/Màu xám/9.jpg', '9.jpg', 'image/jpeg', 1667354);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d13393aad206f249e661e2a3616eadc4', 'library/2026/11/anh xe dien/2 Yên/Màu xám/10.jpg', '10.jpg', 'image/jpeg', 900912);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-9195242fbea73b656541b74a5ce0084f', 'library/2026/11/anh xe dien/2 Yên/Trắng hồng/11.jpg', '11.jpg', 'image/jpeg', 1916292);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-311a9d4b2fffa1cc2ec1efaa304ef791', 'library/2026/11/anh xe dien/2 Yên/Trắng hồng/12.jpg', '12.jpg', 'image/jpeg', 1566241);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-0676aa42fcaa8874834f087ab48d177a', 'library/2026/11/anh xe dien/2 Yên/Trắng hồng/13.jpg', '13.jpg', 'image/jpeg', 1567386);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-471c988d799f549d137908ecc71def4b', 'library/2026/11/anh xe dien/M1 5 bình/Màu Đen/50.jpg', '50.jpg', 'image/jpeg', 1311524);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-0c7a4d2c4b05e27594fd82a3d9df72e4', 'library/2026/11/anh xe dien/M1 5 bình/Màu Đen/51.jpg', '51.jpg', 'image/jpeg', 1743344);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-165e0a06bd300ef3690a77a0f859196b', 'library/2026/11/anh xe dien/M1 5 bình/Màu Đen/52.jpg', '52.jpg', 'image/jpeg', 1569073);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-0539a12270eef0e045df8e6e1d85e242', 'library/2026/11/anh xe dien/M1 5 bình/Màu Đen/53.jpg', '53.jpg', 'image/jpeg', 1600578);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-25d8262595a73a841889b7a35bad4ed7', 'library/2026/11/anh xe dien/M1 5 bình/Màu Trắng/50.jpg', '50.jpg', 'image/jpeg', 1845438);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-e1587baa9b0f35ec64232fb82d0db048', 'library/2026/11/anh xe dien/M1 5 bình/Màu Trắng/51.jpg', '51.jpg', 'image/jpeg', 1698060);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-6c9a52aa6015c2322e5267897df73472', 'library/2026/11/anh xe dien/M1 5 bình/Màu Trắng/52.jpg', '52.jpg', 'image/jpeg', 1199438);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-9a05b34a94a66c9338787865ba6a01cc', 'library/2026/11/anh xe dien/M1 5 bình/Màu Trắng/53.jpg', '53.jpg', 'image/jpeg', 1683084);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-431cbeb5186327fd2c3b1b3b295073d2', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/88.jpg', '88.jpg', 'image/jpeg', 1575075);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d07c9b2c5191a2d597172db1cb286960', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/89.jpg', '89.jpg', 'image/jpeg', 1541611);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-5efd4df1527bece973a441e7878f8f26', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/90.jpg', '90.jpg', 'image/jpeg', 1452042);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-37894e6f25d87faf0d8a0ae2953a4455', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/92.jpg', '92.jpg', 'image/jpeg', 1604372);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-37a5fc8170ce3f65ab8b877fed0a2c01', 'library/2026/11/anh xe dien/Q1 5 binh/Màu đỏ/50.jpg', '50.jpg', 'image/jpeg', 1721817);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-fca4cdb38aa8ad78c3a1bbf2b085a792', 'library/2026/11/anh xe dien/Q1 5 binh/Màu đỏ/51.jpg', '51.jpg', 'image/jpeg', 1716330);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-8245f450c349fa71d9feb05fdcb39e1f', 'library/2026/11/anh xe dien/Q1 5 binh/Màu đỏ/52.jpg', '52.jpg', 'image/jpeg', 1469495);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-f8bfddaa340dd4af27e1b0d5e23fd6f3', 'library/2026/11/anh xe dien/Q1 5 binh/Màu đỏ/53.jpg', '53.jpg', 'image/jpeg', 1585055);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-e3c5f305e7de23c1f94029e97a2a09eb', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Trắng/84.jpg', '84.jpg', 'image/jpeg', 1550678);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-034d03b47d71fff95c0edcd5fd5061ee', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Trắng/85.jpg', '85.jpg', 'image/jpeg', 1505605);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-db1194c7c6b5c58fdc977f3e8c75537b', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Trắng/86.jpg', '86.jpg', 'image/jpeg', 1534757);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-75107089d3c5b4c33bf707ade72874c3', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Trắng/87.jpg', '87.jpg', 'image/jpeg', 1597853);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-05cf0b374bd92bd495f773603421db23', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Xanh/93.jpg', '93.jpg', 'image/jpeg', 1604335);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-fec84ab6dc593fcfe3b024a0b7ec4144', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Xanh/94.jpg', '94.jpg', 'image/jpeg', 1496738);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-e47e6729bc923d0dc62677478483672e', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Xanh/95.jpg', '95.jpg', 'image/jpeg', 1697235);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-7a64a27549ecff37a7c6450049ee886d', 'library/2026/11/anh xe dien/Q1 5 binh/Màu Xanh/96.jpg', '96.jpg', 'image/jpeg', 1631118);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-99bb3f2615ef81bf38f29e904965416f', 'library/2026/11/anh xe dien/XBULL/Đen Bóng/1.jpg', '1.jpg', 'image/jpeg', 1687174);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-47e0a1ffe71401d8ece7944a40897eb7', 'library/2026/11/anh xe dien/XBULL/Đen Bóng/2.jpg', '2.jpg', 'image/jpeg', 1975720);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-2591976830c37c5b8efd88d8557853a8', 'library/2026/11/anh xe dien/XBULL/Đen Bóng/3.jpg', '3.jpg', 'image/jpeg', 1937487);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-3cbf7e18cd7b42824d79279bc18170de', 'library/2026/11/anh xe dien/XBULL/Đen Bóng/4.jpg', '4.jpg', 'image/jpeg', 1952337);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-c937335495cc8d0d4df2c8cd4e8c4183', 'library/2026/11/anh xe dien/XBULL/Màu Đỏ/13.jpg', '13.jpg', 'image/jpeg', 1387845);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-47a9e7b5945ce4df25d80fe62dcab7ea', 'library/2026/11/anh xe dien/XBULL/Màu Đỏ/14.jpg', '14.jpg', 'image/jpeg', 1812911);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-9708c7900b6465d7ce7653277a99c4e7', 'library/2026/11/anh xe dien/XBULL/Màu Đỏ/15.jpg', '15.jpg', 'image/jpeg', 1644032);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-1dca7fb4f160879374bba5a372ca9844', 'library/2026/11/anh xe dien/XBULL/Màu Đỏ/16.jpg', '16.jpg', 'image/jpeg', 1998928);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-ba6a214bdfa1670328e9b8f17ac36311', 'library/2026/11/anh xe dien/XBULL/Màu Xám/1.jpg', '1.jpg', 'image/jpeg', 1720542);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-f8ea6a9efd46abeb59be3a25e5967ef6', 'library/2026/11/anh xe dien/XBULL/Màu Xám/2.jpg', '2.jpg', 'image/jpeg', 2155099);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d35bedbfa2e8778acdf8acaa74e8f225', 'library/2026/11/anh xe dien/XBULL/Màu Xám/3.jpg', '3.jpg', 'image/jpeg', 1953255);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-24c50e7c5ae71d498cdeee67f0e0af76', 'library/2026/11/anh xe dien/XBULL/Màu Xám/4.jpg', '4.jpg', 'image/jpeg', 596708);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-38bd20c6e14102b1b82b9be40399832f', 'library/2026/11/anh xe dien/XBULL/Màu Xanh/1.jpg', '1.jpg', 'image/jpeg', 1718346);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d5090f961bdb4de31df832f8ee49fe9b', 'library/2026/11/anh xe dien/XBULL/Màu Xanh/2.jpg', '2.jpg', 'image/jpeg', 2066697);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-b8f2cbedd576656a29be7482d05c096f', 'library/2026/11/anh xe dien/XBULL/Màu Xanh/3.jpg', '3.jpg', 'image/jpeg', 1862847);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-ce48c64e8195a3c67fb5c62daa53110d', 'library/2026/11/anh xe dien/XBULL/Màu Xanh/4.jpg', '4.jpg', 'image/jpeg', 1902378);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-c9426c224db2155031167413abcb753a', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/70.jpg', '70.jpg', 'image/jpeg', 1534987);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-a5410c4a69d07b30a839a9abf5327d15', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/71.jpg', '71.jpg', 'image/jpeg', 1689359);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-da783ccac444a27cbdd7f87c58891711', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/72.jpg', '72.jpg', 'image/jpeg', 1600441);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-21d1afab1200a41c8f9513e37a20e898', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/73.jpg', '73.jpg', 'image/jpeg', 1665562);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-378f7e994d9fd77562d51248e99adf60', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đỏ/21.jpg', '21.jpg', 'image/jpeg', 1416669);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-b04b9ebba69fbca4f4c865bf9b34163e', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đỏ/22.jpg', '22.jpg', 'image/jpeg', 1979177);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-8663b13e7210fe3078cb6428b17cbee4', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đỏ/23.jpg', '23.jpg', 'image/jpeg', 1300042);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-c987162c9cbfbe878cfafe4701160651', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đỏ/24.jpg', '24.jpg', 'image/jpeg', 1389888);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-d257618dec95bc5cb248848a73bb616c', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xám Lì/80.jpg', '80.jpg', 'image/jpeg', 1129719);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-16db60cc5ab4ca9c18c5599717d95abd', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xám Lì/81.jpg', '81.jpg', 'image/jpeg', 1693160);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-cecc441e615bd86f04fcac368eca4ed2', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xám Lì/82.jpg', '82.jpg', 'image/jpeg', 1567911);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-81eaab31298a18b47b17446aad4c095b', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xám Lì/83.jpg', '83.jpg', 'image/jpeg', 1664751);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-2695dc71dadae06c7e735e10e778bb81', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xanh/17.jpg', '17.jpg', 'image/jpeg', 1589701);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-18de1ac188d9369c8ba457a7f01eba48', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xanh/18.jpg', '18.jpg', 'image/jpeg', 1966649);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-116f8928f9a0cc328d5f61454b9f186e', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xanh/19.jpg', '19.jpg', 'image/jpeg', 1674681);
INSERT INTO seed_bike_images VALUES ('seed-bike-image-0f5ccee65b6467c1ea87d73c501efaed', 'library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xanh/20.jpg', '20.jpg', 'image/jpeg', 1809645);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-205cabb7ea59a0896ba8f606db01e654', 'Xe điện 133-12A bản full', '133-12A-FULL', '133-12a-ban-full', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/50.jpg', '12Ah', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"đen bóng","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/50.jpg"},{"Name":"Màu Đỏ","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu Đỏ/1.jpg"},{"Name":"Màu xám","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu xám/50.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/50.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/51.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/52.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/đen bóng/53.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu Đỏ/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu Đỏ/2.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu Đỏ/3.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu Đỏ/4.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu xám/50.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu xám/51.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu xám/52.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN FUL/Màu xám/53.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-2e0a5e9bb94e5553450316b4ac2172f5', 'Xe điện 133-12A bản rẻ', '133-12A-RE', '133-12a-ban-re', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/1.jpg', '12Ah', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"Đen tem đỏ","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/1.jpg"},{"Name":"hồng phấn","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/hồng phấn/29.jpg"},{"Name":"xanh","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/xanh/9.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/2.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/3.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/Đen tem đỏ/4.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/hồng phấn/29.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/hồng phấn/30.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/hồng phấn/31.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/hồng phấn/32.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/xanh/9.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/xanh/10.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/xanh/11.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN RẺ/xanh/12.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-0851227c0dcd899d60d149268036b136', 'Xe điện 133-12A bản thường', '133-12A-THUONG', '133-12a-ban-thuong', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/37.jpg', '12Ah', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"ĐEN","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/37.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/37.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/38.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/39.jpg","/api/content/entity-images/library/2026/11/anh xe dien/12AH BẢN THƯỜNG/ĐEN/40.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-8a955e3e8afce85433dd7fb497cc2bff', 'Xe điện 133-20A bản full', '133-20A-FULL', '133-20a-ban-full', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/9.jpg', '20Ah', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"màu đen tem bạc","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/9.jpg"},{"Name":"màu xám","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu xám/1.jpg"},{"Name":"tem đen đỏ","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/tem đen đỏ/1.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/9.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/10.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/11.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu đen tem bạc/14.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu xám/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu xám/2.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu xám/3.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/màu xám/4.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/tem đen đỏ/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/tem đen đỏ/2.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/tem đen đỏ/3.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản full/tem đen đỏ/4.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-5ad5150b52041aaaed332ba5d8658ff8', 'Xe điện 133-20A bản rẻ', '133-20A-RE', '133-20a-ban-re', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/1.jpg', '20Ah', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"Màu Xám","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/1.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/2.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/3.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản rẻ/Màu Xám/4.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-cbc13556834c024533d851b09d083d64', 'Xe điện 133-20A bản thường', '133-20A-THUONG', '133-20a-ban-thuong', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/5.jpg', '20Ah', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"màu xanh mặt nạ to","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/5.jpg"},{"Name":"Tem đen đỏ","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem đen đỏ/9.jpg"},{"Name":"Tem xám","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem xám/20.jpg"},{"Name":"Tem Xanh","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem Xanh/5.jpg"},{"Name":"xám xi măng","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/xám xi măng/20.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/5.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/6.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/7.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/màu xanh mặt nạ to/8.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem đen đỏ/9.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem đen đỏ/10.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem đen đỏ/11.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem đen đỏ/12.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem xám/20.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem xám/21.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem xám/22.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem xám/23.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem Xanh/5.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem Xanh/6.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem Xanh/7.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/Tem Xanh/8.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/xám xi măng/20.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/xám xi măng/21.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/xám xi măng/22.jpg","/api/content/entity-images/library/2026/11/anh xe dien/20AH Bản thường/xám xi măng/23.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-c0052939e041d47cfb6c3472660788e2', 'Xe điện 2 yên', '2-YEN', 'xe-cv-2-yen', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Đen Bóng/1.jpg', '', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"Đen Bóng","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Đen Bóng/1.jpg"},{"Name":"Kem","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Kem/4.jpg"},{"Name":"Màu xám","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Màu xám/8.jpg"},{"Name":"Trắng hồng","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Trắng hồng/11.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/4.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/8.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/11.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/12.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/13.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/ảnh thân xe gộp/14.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Đen Bóng/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Đen Bóng/2.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Đen Bóng/3.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Kem/4.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Kem/5.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Kem/6.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Màu xám/8.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Màu xám/9.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Màu xám/10.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Trắng hồng/11.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Trắng hồng/12.jpg","/api/content/entity-images/library/2026/11/anh xe dien/2 Yên/Trắng hồng/13.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-d87acb7ac83a0fe14dbe799161c94bac', 'Xe điện M1 5 bình', 'M1-5-BINH', 'xe-m1', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Đen/50.jpg', '', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"Màu Đen","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Đen/50.jpg"},{"Name":"Màu Trắng","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Trắng/50.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Đen/50.jpg","/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Đen/51.jpg","/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Đen/52.jpg","/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Đen/53.jpg","/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Trắng/50.jpg","/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Trắng/51.jpg","/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Trắng/52.jpg","/api/content/entity-images/library/2026/11/anh xe dien/M1 5 bình/Màu Trắng/53.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-a0ae1705821dfb8df512c6c287e14b5d', 'Xe điện Q1 5 bình', 'Q1-5-BINH', 'xe-q1', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/88.jpg', '', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"Màu Đen","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/88.jpg"},{"Name":"Màu đỏ","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu đỏ/50.jpg"},{"Name":"Màu Trắng","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Trắng/84.jpg"},{"Name":"Màu Xanh","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Xanh/93.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/88.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/89.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/90.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Đen/92.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu đỏ/50.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu đỏ/51.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu đỏ/52.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu đỏ/53.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Trắng/84.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Trắng/85.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Trắng/86.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Trắng/87.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Xanh/93.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Xanh/94.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Xanh/95.jpg","/api/content/entity-images/library/2026/11/anh xe dien/Q1 5 binh/Màu Xanh/96.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-36b7d41c77c998230e77f4e35df1bc5d', 'Xe điện XBULL', 'XBULL', 'xe-bull', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Đen Bóng/1.jpg', '', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"Đen Bóng","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Đen Bóng/1.jpg"},{"Name":"Màu Đỏ","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Đỏ/13.jpg"},{"Name":"Màu Xám","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xám/1.jpg"},{"Name":"Màu Xanh","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xanh/1.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Đen Bóng/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Đen Bóng/2.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Đen Bóng/3.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Đen Bóng/4.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Đỏ/13.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Đỏ/14.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Đỏ/15.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Đỏ/16.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xám/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xám/2.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xám/3.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xám/4.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xanh/1.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xanh/2.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xanh/3.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XBULL/Màu Xanh/4.jpg"]'::jsonb);
INSERT INTO seed_bike_products VALUES ('seed-bike-product-4e51ce89637824ccde8d4ee797b78151', 'Xe điện XS', 'XS', 'xe-xs', 0, 0, '/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/70.jpg', '', 'company-seed-bike-pending', 'brand-seed-bike-pending', '[{"Name":"Màu Đen Bóng","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/70.jpg"},{"Name":"Màu Đỏ","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đỏ/21.jpg"},{"Name":"Màu Xám Lì","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xám Lì/80.jpg"},{"Name":"Màu Xanh","HexCode":"","ImageUrl":"/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xanh/17.jpg"}]'::jsonb, '["/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/70.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/71.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/72.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đen Bóng/73.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đỏ/21.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đỏ/22.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đỏ/23.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Đỏ/24.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xám Lì/80.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xám Lì/81.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xám Lì/82.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xám Lì/83.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xanh/17.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xanh/18.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xanh/19.jpg","/api/content/entity-images/library/2026/11/anh xe dien/XE ĐIỆN XS/Màu Xanh/20.jpg"]'::jsonb);
-- The PowerShell wrapper supplies data to these temporary tables first.
-- Execute the complete generated file in ONE transaction with ON_ERROR_STOP.
SET LOCAL lock_timeout = '10s';

INSERT INTO public."Companies"
    ("Id", "Name", "Description", "LogoUrl", "Address", "PhoneNumber", "Email", "Website", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT 'company-seed-bike-pending', 'Công ty xe điện - Chưa cập nhật', '', '', '', '', '', '', '{}'::jsonb, now(), now(), TRUE
WHERE EXISTS (SELECT 1 FROM seed_bike_products WHERE company_id = 'company-seed-bike-pending')
  AND NOT (SELECT images_only FROM seed_bike_options)
ON CONFLICT ("Id") DO NOTHING;

INSERT INTO public."Brands"
    ("Id", "Name", "Description", "LogoUrl", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT 'brand-seed-bike-pending', 'Chưa cập nhật', '', '', '{}'::jsonb, now(), now(), TRUE
WHERE EXISTS (SELECT 1 FROM seed_bike_products WHERE brand_id = 'brand-seed-bike-pending')
  AND NOT (SELECT images_only FROM seed_bike_options)
ON CONFLICT ("Id") DO NOTHING;

-- Reuse active categories by slug, including categories with custom IDs.
INSERT INTO public."ProductCategories"
    ("Id", "Kind", "Name", "Slug", "ParentId", "Description", "ImageUrl", "SortOrder", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT 'seed-bike-cat-' || md5(c.slug), 'Bike', c.name, c.slug, NULL, '', '', 100, '{}'::jsonb, now(), now(), TRUE
FROM seed_bike_categories c
WHERE c.parent_slug = ''
  AND NOT (SELECT images_only FROM seed_bike_options)
  AND NOT EXISTS (SELECT 1 FROM public."ProductCategories" e WHERE e."Kind" = 'Bike' AND e."Slug" = c.slug AND e."IsUsed")
ON CONFLICT ("Id") DO UPDATE SET "IsUsed" = TRUE;

INSERT INTO public."ProductCategories"
    ("Id", "Kind", "Name", "Slug", "ParentId", "Description", "ImageUrl", "SortOrder", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT 'seed-bike-cat-' || md5(c.slug), 'Bike', c.name, c.slug, p."Id", '', '', 100, '{}'::jsonb, now(), now(), TRUE
FROM seed_bike_categories c
JOIN public."ProductCategories" p ON p."Kind" = 'Bike' AND p."Slug" = c.parent_slug AND p."IsUsed"
WHERE c.parent_slug <> ''
  AND NOT (SELECT images_only FROM seed_bike_options)
  AND NOT EXISTS (SELECT 1 FROM public."ProductCategories" e WHERE e."Kind" = 'Bike' AND e."Slug" = c.slug AND e."IsUsed")
ON CONFLICT ("Id") DO UPDATE SET "IsUsed" = TRUE;

DO $validation$
BEGIN
    IF (SELECT images_only FROM seed_bike_options) AND EXISTS (
        SELECT 1 FROM seed_bike_products s
        WHERE NOT EXISTS (SELECT 1 FROM public."ElectricBikeProducts" p WHERE p."Id" = s.id)
    ) THEN
        RAISE EXCEPTION 'An existing seed product is missing. Image-only mode does not recreate deleted products.';
    END IF;
    IF NOT (SELECT images_only FROM seed_bike_options) AND EXISTS (
        SELECT 1 FROM seed_bike_products s
        LEFT JOIN public."Brands" b ON b."Id" = s.brand_id AND b."IsUsed"
        LEFT JOIN public."Companies" c ON c."Id" = s.company_id AND c."IsUsed"
        LEFT JOIN public."ProductCategories" cat ON cat."Kind" = 'Bike' AND cat."Slug" = s.category_slug AND cat."IsUsed"
        WHERE b."Id" IS NULL OR c."Id" IS NULL OR cat."Id" IS NULL
    ) THEN
        RAISE EXCEPTION 'Missing or inactive brand, company, or category. No seed data will be committed.';
    END IF;
END
$validation$;

INSERT INTO public."EntityImages"
    ("Id", "RelativePath", "OriginalFileName", "MimeType", "FileSize", "CreatedAt", "IsUsed")
SELECT id, relative_path, original_name, mime_type, file_size, now(), TRUE
FROM seed_bike_images
ON CONFLICT ("RelativePath") DO NOTHING;

INSERT INTO public."ElectricBikeProducts"
    ("Id", "Name", "Brand", "Model", "Category", "Description", "Price", "StockQuantity", "PictureUrl", "BatteryCapacity",
     "CompanyId", "BrandId", "CategoryId", "Colors", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT s.id, s.name, b."Name", s.model, 'ElectricBikeModel', '', s.price, s.stock_quantity, s.picture_url, NULLIF(s.battery_capacity, ''),
       s.company_id, s.brand_id, c."Id", s.colors, jsonb_build_object('seedImageUrls', s.image_urls::text), now(), now(), TRUE
FROM seed_bike_products s
JOIN public."Brands" b ON b."Id" = s.brand_id
JOIN public."ProductCategories" c ON c."Kind" = 'Bike' AND c."Slug" = s.category_slug AND c."IsUsed"
WHERE NOT (SELECT images_only FROM seed_bike_options)
ON CONFLICT ("Id") DO NOTHING;

-- Update only images, preserving all other product data and administrator-edited colors.
-- No joins to categories/brands here: those may have changed since the first seed.
UPDATE public."ElectricBikeProducts" p
SET "PictureUrl" = s.picture_url,
    "Colors" = (
        SELECT COALESCE(jsonb_agg(merged.color ORDER BY merged.sort_order), '[]'::jsonb)
        FROM (
            SELECT old.color || CASE WHEN new.color IS NULL THEN '{}'::jsonb
                ELSE jsonb_build_object(CASE WHEN old.color ? 'imageUrl' THEN 'imageUrl' ELSE 'ImageUrl' END, new.color->'ImageUrl') END AS color,
                old.position AS sort_order
            FROM jsonb_array_elements(p."Colors") WITH ORDINALITY old(color, position)
            LEFT JOIN jsonb_array_elements(s.colors) new(color)
                ON COALESCE(old.color->>'Name', old.color->>'name') = new.color->>'Name'
            UNION ALL
            SELECT new.color, 100000 + new.position
            FROM jsonb_array_elements(s.colors) WITH ORDINALITY new(color, position)
            WHERE NOT EXISTS (
                SELECT 1 FROM jsonb_array_elements(p."Colors") old(color)
                WHERE COALESCE(old.color->>'Name', old.color->>'name') = new.color->>'Name'
            )
        ) merged
    ),
    "Metadata" = p."Metadata" || jsonb_build_object('seedImageUrls', s.image_urls::text),
    "UpdatedAt" = now()
FROM seed_bike_products s
WHERE p."Id" = s.id;

SELECT p."Id", p."Name", p."Price", p."StockQuantity", jsonb_array_length(p."Colors") AS color_count
FROM public."ElectricBikeProducts" p JOIN seed_bike_products s ON s.id = p."Id"
ORDER BY p."Name";

COMMIT;
