# HANDOFF - Dựng lại website nbc.gov.vn

## Mục tiêu
Dựng lại layout website Trung tâm Mã số, Mã vạch Quốc gia (nbc.gov.vn), giống khoảng 90%, dữ liệu mẫu là đủ.
Stack: React + Vite + TypeScript + Tailwind. Giao diện tiếng Việt, responsive.

## Thương hiệu
- Màu chính: #3385cd. Thanh menu navy đậm (~#0b1c2c). Nền trắng.
- Logo và tên: src/config/brand.ts (đang placeholder, sẽ thay khi có logo mới).
- Không gõ mã màu trực tiếp trong component, dùng biến CSS/tailwind.config.
- Dữ liệu mẫu để trong src/data/*.json.

## Đã làm
- [x] Khung chung: header 2 tầng, menu + mega menu, footer, routing (SiteLayout, config/navigation)
- [x] Trang chủ
- [x] Tin tức (danh sách, chi tiết, src/data/news.json)
- [~] Giới thiệu + Hoạt động: làm DỞ khi công cụ hết token, cần kiểm tra file thiếu/lỗi

## Còn lại
- [ ] Hoàn thiện: Giới thiệu chung, Sơ đồ tổ chức; Hoạt động (Mã số mã vạch, Truy xuất nguồn gốc, Mã LEI, Mã UDI, Đào tạo) dùng template trang nội dung dùng chung
- [ ] Hỏi đáp (Câu hỏi thường gặp, Danh sách câu hỏi, Tạo câu hỏi), Liên hệ, Đăng nhập/Đăng kí, Tìm kiếm, chuyển ngôn ngữ Việt/Anh
- [ ] Rà soát: responsive, hover/focus, alt ảnh, link menu không 404

## Menu
Trang chủ | Giới thiệu (Giới thiệu chung, Sơ đồ tổ chức) | Tin tức (Tin tức/Sự kiện, Hoạt động MSMV tại địa phương) | Hoạt động (Mã số mã vạch, Truy xuất nguồn gốc, Mã LEI, Mã UDI, Đào tạo) | Hỏi đáp (Câu hỏi thường gặp, Danh sách câu hỏi, Tạo câu hỏi) | Liên hệ