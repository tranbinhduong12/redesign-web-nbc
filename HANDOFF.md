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
- [x] Khung chung: header, menu ngang 7 mục (có E-learning), mega menu 6 cột, footer, routing
- [x] Trang chủ, Tin tức, Giới thiệu, Hoạt động (5 trang)
- [x] Hỏi đáp (Câu hỏi thường gặp, Danh sách câu hỏi, Tạo câu hỏi) và Liên hệ
- [~] E-learning (/e-learning): làm dở khi hết token, cần kiểm tra và hoàn thiện

## Còn lại
- [ ] Hoàn thiện E-learning (bộ lọc, 8 thẻ khóa học từ src/data/elearning.json, thẻ "Theo yêu cầu", dòng cập nhật 14/01/2016)
- [ ] Prompt 5B: Đăng nhập/Đăng kí (modal), Tìm kiếm, nút "Theo dõi", đổi ngôn ngữ Việt/Anh, widget thời tiết, thanh cố định ở đáy màn hình
- [ ] Rà soát: responsive, hover/focus, alt ảnh, link menu không 404
## Menu
Trang chủ | Giới thiệu (Giới thiệu chung, Sơ đồ tổ chức) | Tin tức (Tin tức/Sự kiện, Hoạt động MSMV tại địa phương) | Hoạt động (Mã số mã vạch, Truy xuất nguồn gốc, Mã LEI, Mã UDI, Đào tạo) | Hỏi đáp (Câu hỏi thường gặp, Danh sách câu hỏi, Tạo câu hỏi) | Liên hệ