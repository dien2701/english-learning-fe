# MÀN HÌNH: Dashboard Học Tập Người Dùng (User Learning Dashboard)

**1. Thông tin chung (Meta Info)**
* **Dự án:** En-Learning – Nền tảng học tiếng Anh trực tuyến ứng dụng AI.
* **Tính năng:** Trang Dashboard sau khi người dùng đăng nhập thành công.
* **Mục đích:** Giúp người học biết nhanh hôm nay cần học gì, tiếp tục bài đang dở, theo dõi tiến độ và nhận gợi ý học tập phù hợp chỉ trong vài giây.

**2. Đối tượng & Trải nghiệm (Target & UX)**
* **Người dùng chính:** Sinh viên và người đi làm đang tự học tiếng Anh qua Flashcard, luyện viết và luyện nghe.
* **Hành động chính:** Bấm “Tiếp tục học”, chọn chức năng học nhanh, xem tiến độ trong tuần và mở bài học được hệ thống gợi ý.
* **Cảm xúc mang lại:** Tập trung, rõ ràng, có động lực học tiếp; giao diện giống một công cụ học tập thực tế, không quá trẻ con hoặc rườm rà.

**3. Đặc tả Thiết kế (Design Specs)**
* **Phong cách UI:** Dashboard SaaS hiện đại, chuyên nghiệp, nhiều khoảng trắng; sử dụng Sidebar trái, Header trên cùng và các Card nội dung bo góc `10px–12px`.
* **Bố cục chính:** 
  - Cột trái là Sidebar gồm: Dashboard, Flashcard, Luyện viết, Luyện nghe, Kiểm tra, Thống kê, Gợi ý học tập, Thông báo và Hồ sơ.
  - Header hiển thị ô tìm kiếm, chuông thông báo, avatar và tên người dùng.
  - Nội dung Dashboard theo thứ tự: Lời chào → Tiếp tục học → Thao tác nhanh → Tiến độ học → Gợi ý học tập → Hoạt động gần đây.
* **Màu sắc chủ đạo:** 
  - Xanh dương `#008FD5` cho nút chính, trạng thái đang chọn và điểm nhấn.
  - Nền trang `#F7F9FF`, Card trắng `#FFFFFF`, viền `#E5E8EE`.
  - Chữ chính `#181C20`, chữ phụ `#64748B`, trạng thái hoàn thành dùng xanh lá `#16A34A`.
* **Quy tắc hiển thị:** 
  - Card “Tiếp tục học” phải nổi bật nhất và chỉ có một CTA chính: “Tiếp tục học”.
  - Biểu đồ tiến độ chỉ hiển thị dữ liệu tuần gần nhất, tránh quá nhiều biểu đồ gây rối.
  - Mỗi Card chỉ có một mục tiêu rõ ràng; sử dụng icon nét đơn giản, không dùng gradient mạnh, glassmorphism hoặc animation phức tạp.
  - Khi chưa có dữ liệu học, hiển thị Empty State kèm CTA như “Bắt đầu học Flashcard”.

**4. Dữ liệu cốt lõi (Core Data)**
* **Lời chào cá nhân (Welcome Header):** Tên người dùng, lời chào theo thời gian, mục tiêu học hôm nay và số ngày duy trì học liên tiếp.
* **Tiếp tục học (Continue Learning):** Tên bộ Flashcard hoặc bài học gần nhất, tiến độ hoàn thành, thời gian học gần nhất và nút “Tiếp tục học”.
* **Thao tác nhanh (Quick Actions):**
  - “Học Flashcard”.
  - “Luyện viết với AI”.
  - “Luyện nghe”.
  - “Làm bài kiểm tra”.
* **Tiến độ học tập (Learning Progress):** Số từ đã học, số bài viết đã nộp, điểm luyện nghe hoặc bài kiểm tra gần nhất, biểu đồ số phút học trong 7 ngày.
* **Gợi ý học tập (Recommendation):** Nội dung gợi ý dựa trên kết quả học, ví dụ: “Bạn cần ôn lại 12 từ Flashcard chưa nhớ” hoặc “Hãy luyện thêm chủ đề câu điều kiện”.
* **Hoạt động gần đây (Recent Activity):** Danh sách các hành động gần nhất như hoàn thành bộ từ, nộp bài viết, nhận phản hồi AI hoặc hoàn thành bài nghe.
* **Call to Action (CTA):** Nút chính “Tiếp tục học”; các nút phụ gồm “Xem thống kê”, “Xem tất cả gợi ý” và “Khám phá bài học”.