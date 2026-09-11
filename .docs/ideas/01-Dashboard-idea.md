Ý TƯỞNG: THỐNG KÊ (DashBoard)

**1. Thông tin chung (Meta Info)**
* **Dự án:** En-Learning.
* **Tính năng:** THỐNG KÊ (Landing Page/DashBoard)
* **Mục đích:** Là "phễu" đón khách đầu tiên. Phải Giúp người học biết nhanh bài đang dở, những mục đã học và, biểu đồ hiển thị thời gian học theo tuần và theo tháng.
**2. Đối tượng & Trải nghiệm (Target & UX)**
* **Người dùng chính:** Sinh viên và người đi làm đang tự học tiếng Anh qua Flashcard, luyện viết và luyện nghe.
* **Hành động chính:** Bấm “Tiếp tục học” tại các bài học đang dở, xem danh sách những bài đã học, Xem biểu đồ hiển thị thời gian học trong tuần/ tháng.
* **Cảm xúc mang lại:** Tập trung, rõ ràng, có động lực học tiếp; giao diện đơn giản dễ control.

**3. Đặc tả Thiết kế (Design Specs)**
* **Phong cách UI:** Dashboard SaaS hiện đại, chuyên nghiệp, Ưu tiên không gian trắng; sử dụng Sidebar trái, Header trên cùng và các Card nội dung bo góc mềm mại (`rounded-2xl`).
* **Màu sắc chủ đạo (Brand Colors):** - Xanh dương `#008FD5` cho nút chính, trạng thái đang chọn và điểm nhấn.
  - Nền trang `#F7F9FF`, Card trắng `#FFFFFF`, viền `#E5E8EE`.
  - Chữ chính `#181C20`, chữ phụ `#64748B`, trạng thái hoàn thành dùng xanh lá `#16A34A`.
* **Cấu trúc Màn hình (Top to Bottom):**
  - **Hero Banner:** Một banner nổi lớn nổi bật cùng lời giới thiệu: "En-Learning trợ lý ngoại ngữ của bạn!"
  - **Card** “Tiếp tục học” phải nổi bật nhất và chỉ có một CTA chính: “Tiếp tục học”.
  - **Danh mục** một hàng ngang các khối ghi các nội dung đã hoàn thành bài học, nếu danh sách quá một dòng thêm nút "Xem chi tiết"
  - **Biểu đồ**: Biểu đồ hiển thị thời gian học tập theo tuần có nút đổi hiển thị theo tháng
* **Quy tắc hiển thị:** 
  - Biểu đồ tiến độ chỉ hiển thị dữ liệu tuần gần nhất, tránh quá nhiều biểu đồ gây rối.
  - Mỗi Card chỉ có một mục tiêu rõ ràng; sử dụng icon nét đơn giản, không dùng gradient mạnh, glassmorphism hoặc animation phức tạp.
  - Khi chưa có dữ liệu học, hiển thị Empty State kèm CTA như “Bắt đầu học Flashcard”.

**4. Dữ liệu cốt lõi (Mock Data)**

* **Tiếp tục học (Continue Learning):** Tên bộ Flashcard hoặc bài học gần nhất, tiến độ hoàn thành, thời gian học gần nhất và nút “Tiếp tục học”.
* **Danh mục**: Tên bộ FLashCard hoặc bài học đã hoàn thành
* **Biểu đổ**: vẽ biểu đồ đường hiển thị số bài đã hoàn thành trong tuần và tương tự với biểu đồ tháng
