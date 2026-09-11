### 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

* **Root Layout:** `min-h-screen bg-slate-50 text-slate-900 flex flex-col`.

* **Header:** `sticky top-0 z-50 h-16 w-full bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 lg:px-8`.

* **Body Container:** `flex flex-1 min-h-0`.

* **Sidebar Desktop:** `hidden md:flex flex-col w-60 lg:w-64 bg-white border-r border-slate-200`.

* **Mobile Drawer:** `fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-lg md:hidden`.

* **Main Content:** `flex-1 min-w-0 bg-slate-50 p-4 md:p-6 lg:p-8`.

* **Content Container:** `w-full max-w-7xl mx-auto`.

* **Card chuẩn:** `bg-white border border-slate-200 rounded-xl shadow-sm p-4 md:p-6`.

* **Footer:** `w-full bg-white border-t border-slate-200 px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8`.

* **Responsive:** Desktop dùng Sidebar cố định; tablet/mobile chuyển Sidebar thành Drawer; Main Content luôn `w-full`.

### 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

* **Logo [DUMB]**:

  * Box Style: `flex items-center gap-2`.
  * Typography: `text-xl font-bold tracking-tight text-sky-600`.
  * Interaction: `hover:opacity-80 transition-opacity cursor-pointer`.

* **NotificationIcon [DUMB]**:

  * Box Style: `relative p-2 rounded-lg`.
  * Badge: `absolute -top-1 -right-1 min-w-4 h-4 rounded-full bg-red-500`.
  * Typography: `text-xs font-semibold text-white`.
  * Interaction: `hover:bg-slate-100 transition-colors cursor-pointer`.

* **UserDropdown [DUMB]**:

  * Box Style: `absolute right-0 mt-2 w-52 bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden`.
  * Typography: `text-sm text-slate-700`.
  * Interaction: `hover:bg-slate-50 transition-colors cursor-pointer`.

* **Sidebar [DUMB]**:

  * Box Style: `h-full bg-white py-4 overflow-y-auto`.
  * Typography: `text-sm`.

* **MenuItem [DUMB]**:

  * Box Style: `flex items-center gap-3 mx-3 px-3 py-2.5 rounded-lg`.
  * Typography: `text-sm font-medium`.
  * Default: `text-slate-600 hover:bg-slate-50 hover:text-slate-900`.
  * Active: `bg-sky-50 text-sky-700 font-semibold`.
  * Interaction: `transition-colors cursor-pointer`.

* **MobileDrawer [DUMB]**:

  * Box Style: `w-72 h-full bg-white border-r border-slate-200 shadow-lg p-4`.
  * Interaction: `transition-transform duration-200`.

* **MainContent [DUMB]**:

  * Box Style: `w-full max-w-7xl mx-auto`.
  * Child Card Standard: `bg-white rounded-xl border border-slate-200 shadow-sm p-6`.

* **GlobalFooter [DUMB]**:

  * Box Style: `bg-white border-t border-slate-200`.

* **FooterColumn [DUMB]**:

  * Box Style: `flex flex-col gap-3`.
  * Typography Title: `text-sm font-semibold text-slate-900`.
  * Typography Link: `text-sm text-slate-500`.
  * Interaction: `hover:text-sky-600 transition-colors cursor-pointer`.

### 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

* **Primary:** `sky-600`.

* **Primary Hover:** `sky-700`.

* **Primary Light / Active:** `sky-50`.

* **Page Background:** `bg-slate-50`.

* **Surface / Card / Header / Sidebar:** `bg-white`.

* **Text Primary:** `text-slate-900`.

* **Text Secondary:** `text-slate-500` / `text-slate-600`.

* **Border:** `border-slate-200`.

* **Notification / Error:** `bg-red-500 text-white`.

* **Success:** `text-green-600`.

* **Warning:** `text-amber-600`.

* Không dùng gradient mạnh, glassmorphism hoặc màu neon.

* Không dùng màu làm tín hiệu trạng thái duy nhất.

### 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

```javascript
const mockNotificationCount = 3;

const mockUser = {
  id: "user_001",
  name: "Trịnh Xuân Diện",
  avatarUrl: "https://i.pravatar.cc/150?u=enlearning-user",
  role: "USER"
};

const mockMenuItems = [
  { id: "dashboard", label: "Dashboard", path: "/dashboard", iconName: "HomeIcon" },
  { id: "flashcards", label: "Flashcard", path: "/flashcards", iconName: "CardsIcon" },
  { id: "writing", label: "Luyện viết", path: "/writing", iconName: "PencilIcon" },
  { id: "listening", label: "Luyện nghe", path: "/listening", iconName: "HeadphonesIcon" },
  { id: "exams", label: "Bài kiểm tra", path: "/exams", iconName: "FileTextIcon" },
  { id: "statistics", label: "Thống kê", path: "/statistics", iconName: "ChartIcon" },
  { id: "recommendations", label: "Gợi ý học tập", path: "/recommendations", iconName: "LightbulbIcon" },
  { id: "chat", label: "Chat", path: "/chat", iconName: "MessageIcon" },
  { id: "profile", label: "Hồ sơ & Cài đặt", path: "/profile", iconName: "UserIcon" }
];

const mockFooterData = [
  {
    title: "En-Learning",
    links: [
      { label: "Hỗ trợ người học", url: "/support" }
    ]
  },
  { 
    title: "Chính sách",
    links: [
      { label: "Chính sách bảo mật", url: "/privacy" },
      { label: "Điều khoản sử dụng", url: "/terms" }
    ]
  },
  {
    title: "Liên hệ",
    links: [
      { label: "Trung tâm hỗ trợ", url: "/support" },
      { label: "Gửi phản hồi", url: "/feedback" }
    ]
  }
];
```
