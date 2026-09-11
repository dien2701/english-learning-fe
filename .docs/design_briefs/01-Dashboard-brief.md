1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM):
- Cấu trúc Root: Bố cục Flexbox toàn màn hình `flex min-h-screen bg-slate-50`.
- Layout chính: 
  + Sidebar (Desktop): `w-64 flex-shrink-0 hidden md:flex flex-col`.
  + Content Area: `flex-1 flex flex-col`.
  + Container nội dung: `max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8`.
- Grid/Flexbox cho các Section chính:
  + Header nội dung: `flex items-center justify-between mb-8`.
  + Main Grid (chứa các Card): `grid grid-cols-1 lg:grid-cols-3 gap-6`.
  + Cột trái (Chứa Continue Learning, Actions, Progress): `lg:col-span-2 flex flex-col gap-6`.
  + Cột phải (Chứa Recommendations, Activities): `lg:col-span-1 flex flex-col gap-6`.

2. ĐẶC TẢ COMPONENT (COMPONENT SPECS):
- DashboardLayout:
  + Box Style: `min-h-screen bg-slate-50`.
- WelcomeHeader:
  + Typography: Lời chào `text-2xl font-bold tracking-tight text-slate-900`, Mục tiêu/Thông tin phụ `text-sm text-slate-500`.
- ContinueLearningCard:
  + Box Style: `bg-white rounded-xl shadow-sm border border-slate-200 p-6`.
  + Typography: Tiêu đề bài học `text-lg font-semibold text-slate-900`, Thông tin tiến độ `text-sm text-slate-500`.
  + Trạng thái tương tác: `hover:shadow-md transition-all`. Nút "Tiếp tục học": `bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg px-4 py-2 font-medium shadow-sm hover:shadow`.
- QuickActions & ActionButton:
  + Cấu trúc lưới: `grid grid-cols-2 sm:grid-cols-4 gap-4`.
  + Box Style (ActionButton): `bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col items-center justify-center gap-3`.
  + Typography: `text-sm font-medium text-slate-700`.
  + Trạng thái tương tác: `hover:-translate-y-1 hover:shadow-md hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer`.
- LearningProgressChart:
  + Box Style: `bg-white rounded-xl shadow-sm border border-slate-200 p-6`.
  + Typography: Tiêu đề card `text-lg font-semibold text-slate-900`, Các con số thống kê `text-2xl font-bold text-slate-900`.
- Recommendations & RecommendationItem:
  + Box Style (Card tổng): `bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4`.
  + Box Style (Item): `flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100`.
  + Typography: Tiêu đề gợi ý `text-sm font-medium text-slate-900`, Mô tả hành động `text-xs font-semibold text-blue-600`.
  + Trạng thái tương tác: `hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer`.
- RecentActivities & ActivityItem:
  + Box Style (Card tổng): `bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4`.
  + Box Style (Item): `flex items-center justify-between py-3 border-b border-slate-100 last:border-0`.
  + Typography: Tên hoạt động `text-sm font-medium text-slate-800`, Thời gian `text-xs text-slate-400`.

3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS):
- Nền trang (Background): `bg-slate-50`.
- Nền Card (Surface): `bg-white`.
- Viền (Border): `border-slate-200`.
- Chữ chính (Primary Text): `text-slate-900`.
- Chữ phụ (Secondary Text): `text-slate-500` hoặc `text-slate-400`.
- Nút CTA và Điểm nhấn (Primary Brand): `bg-blue-600` / `text-blue-600`.
- Trạng thái hoàn thành/Thành công (Success): `text-green-600` / `bg-green-50`.

4. MOCK DATA (DỮ LIỆU HIỂN THỊ):
- WelcomeHeader: 
  + Lời chào: "Chào buổi sáng, Tiến Dũng!"
  + Mục tiêu: "Mục tiêu hôm nay: Học 20 từ mới"
  + Chuỗi ngày học: "🔥 5 ngày liên tiếp"
- ContinueLearningCard:
  + Tên bài học: "TOEIC Listening - Part 2: Question & Response"
  + Tiến độ: "Đã hoàn thành 65%"
  + Lần học cuối: "Học lần cuối: 2 giờ trước"
- QuickActions: 
  + Nút 1: "Học Flashcard"
  + Nút 2: "Luyện viết AI"
  + Nút 3: "Luyện nghe"
  + Nút 4: "Làm bài test"
- LearningProgressChart: 
  + Thống kê nhanh: "120 từ đã học", "3 bài viết đã nộp", "Điểm trung bình: 8.5"
- Recommendations: 
  + Gợi ý 1: "Bạn cần ôn lại 12 từ Flashcard chưa nhớ" (Hành động: Ôn tập ngay)
  + Gợi ý 2: "Hãy luyện thêm chủ đề câu điều kiện loại 2" (Hành động: Luyện tập)
- RecentActivities:
  + Hoạt động 1: "Hoàn thành bài kiểm tra Reading (8.0/9.0)" - Thời gian: "25 phút trước"
  + Hoạt động 2: "Nộp bài viết Task 1 - Line Chart" - Thời gian: "Hôm qua"
