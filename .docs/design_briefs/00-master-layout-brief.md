### 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

- **Root Layout:** `min-h-screen bg-slate-50 text-slate-900 flex flex-col`.
- **Top Navigation (Header):** `sticky top-0 z-50 w-full h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8`.
- **Body Container (Bọc Sidebar & Main Content):** `flex flex-1 overflow-hidden`.
- **Sidebar:** `hidden md:flex flex-col w-64 h-full bg-white border-r border-slate-200 overflow-y-auto`. (Mobile dùng local state để toggle class chuyển đổi thành Absolute/Fixed layer).
- **Main Content:** `flex-1 overflow-y-auto w-full p-4 md:p-8`. 
- **Global Footer:** `w-full bg-white border-t border-slate-200 py-8 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8`.

### 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

- **Logo [DUMB]**:
  - Box Style: Không bo góc/bóng đổ.
  - Typography: `text-xl font-bold tracking-tight text-blue-600`.
  - Trạng thái tương tác: `hover:opacity-80 transition-opacity cursor-pointer`.

- **NotificationIcon [DUMB]**:
  - Box Style: Nút bấm `relative p-2 rounded-full`. Badge `absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500`.
  - Typography: Badge `text-[10px] font-bold text-white`.
  - Trạng thái tương tác: Nút bấm `hover:bg-slate-100 transition-colors cursor-pointer`.

- **UserDropdown [DUMB]**:
  - Box Style: Menu list `absolute right-0 mt-2 w-48 rounded-xl shadow-lg border border-slate-100 bg-white overflow-hidden`. Avatar `h-8 w-8 rounded-full object-cover`.
  - Typography: Tên user `text-sm font-medium text-slate-700`, menu item `text-sm text-slate-600`.
  - Trạng thái tương tác: Menu item `hover:bg-slate-50 transition-colors cursor-pointer`.

- **Sidebar [DUMB]**:
  - Box Style: `bg-white h-full w-full py-4`.

- **MenuItem [DUMB]**:
  - Box Style: `flex items-center gap-3 px-4 py-3 mx-4 rounded-lg`.
  - Typography: `text-sm font-medium`.
  - Trạng thái tương tác:
    - Mặc định: `text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer`.
    - Active (`isActive = true`): `bg-blue-50 text-blue-700 font-semibold shadow-sm`.

- **MainContent [DUMB]**:
  - Box Style: Khu vực trống. Các Card nội dung bên trong sẽ dùng chuẩn: `bg-white rounded-xl shadow-sm border border-slate-100 p-6`.

- **GlobalFooter [DUMB]**:
  - Box Style: Khung ngoài `bg-white w-full`.

- **FooterColumn [DUMB]**:
  - Box Style: `flex flex-col gap-3`.
  - Typography: Tiêu đề cột `text-sm font-semibold text-slate-900 uppercase tracking-wider`, Link `text-sm text-slate-500`.
  - Trạng thái tương tác: Link `hover:text-blue-600 transition-colors cursor-pointer`.

### 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

- **Màu nền (Background):**
  - Nền trang tổng thể (phía sau content): `bg-slate-50`.
  - Nền Header, Sidebar, Footer, Card nội dung: `bg-white`.
  - Nền hover (Menu, Icon): `bg-slate-50` hoặc `bg-slate-100`.
  - Nền MenuItem đang chọn (Active): `bg-blue-50`.
- **Màu chữ (Text):**
  - Văn bản chính, tiêu đề: `text-slate-900`.
  - Văn bản phụ, liên kết chưa active: `text-slate-500` hoặc `text-slate-600`.
  - Text nhấn mạnh, Logo, Link hover, MenuItem active: `text-blue-600` hoặc `text-blue-700`.
  - Số thông báo (Badge): Text `text-white` trên nền `bg-red-500`.
- **Màu viền (Border):**
  - Viền ngăn cách (Divider giữa Sidebar/Header): `border-slate-200`.

### 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

```javascript
// Cho NotificationIcon
const mockNotificationCount = 3;

// Cho UserDropdown
const mockUser = {
  id: "user_123",
  name: "Nguyễn Văn Học",
  avatarUrl: "https://i.pravatar.cc/150?u=nguyenvanhoc",
  role: "USER"
};

// Cho Sidebar (Danh sách MenuItem)
const mockMenuItems = [
  { id: "1", label: "Dashboard", path: "/dashboard", iconName: "HomeIcon" },
  { id: "2", label: "Flashcard", path: "/flashcards", iconName: "CollectionIcon" },
  { id: "3", label: "Luyện viết", path: "/writing", iconName: "PencilAltIcon" },
  { id: "4", label: "Luyện nghe", path: "/listening", iconName: "VolumeUpIcon" },
  { id: "5", label: "Bài kiểm tra", path: "/tests", iconName: "DocumentTextIcon" },
  { id: "6", label: "Thống kê", path: "/stats", iconName: "ChartBarIcon" },
  { id: "7", label: "Gợi ý học tập", path: "/suggestions", iconName: "LightBulbIcon" },
  { id: "8", label: "Chat", path: "/chat", iconName: "ChatIcon" },
  { id: "9", label: "Hồ sơ", path: "/profile", iconName: "UserIcon" }
];

// Cho GlobalFooter (Danh sách FooterColumn)
const mockFooterData = [
  {
    title: "En-Learning",
    links: [
      { label: "Về chúng tôi", url: "/about" },
      { label: "Liên hệ: hotro@enlearning.vn", url: "mailto:hotro@enlearning.vn" }
    ]
  },
  {
    title: "Pháp lý",
    links: [
      { label: "Chính sách bảo mật", url: "/privacy" },
      { label: "Điều khoản sử dụng", url: "/terms" }
    ]
  },
  {
    title: "Cộng đồng",
    links: [
      { label: "Facebook Page", url: "https://facebook.com" },
      { label: "Group Học viên", url: "https://facebook.com/groups" }
    ]
  }
];
```
