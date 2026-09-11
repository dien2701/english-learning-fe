# 01-Dashboard-idea-brief

**### 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)**

* **Root Layout:** `min-h-screen bg-slate-50 text-slate-900`.

* **Dashboard Container:** `w-full max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8`.

* **Dashboard Stack:** `flex flex-col gap-6 md:gap-8`.

* **Hero Section:** `w-full`.

* **Continue Learning Section:** `w-full`.

* **Completed Learning Section:** `w-full flex flex-col gap-4`.

* **Completed Lesson List:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`.

* **Learning Chart Section:** `w-full flex flex-col gap-4`.

* **Chart Header:** `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`.

* **Chart Container:** `w-full min-h-72 md:min-h-80`.

* **Card Standard:** `bg-white border border-slate-200 rounded-xl shadow-sm p-4 md:p-6`.

* **Section Spacing:** `space-y-4`.

* **Mobile:** `grid-cols-1`, CTA chính `w-full`, nội dung ưu tiên theo thứ tự `Hero → Continue Learning → Completed → Chart`.

* **Tablet:** `sm:grid-cols-2`, khoảng cách `gap-4 md:gap-6`.

* **Desktop:** `max-w-7xl`, danh sách hoàn thành tối đa `lg:grid-cols-4`; không chia Dashboard thành nhiều cột báo cáo dày đặc.

---

**### 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)**

* **HeroBanner [DUMB]**:

  * Box Style: `w-full bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8`.

  * Layout: `flex flex-col gap-3`.

  * Typography Title: `text-2xl md:text-3xl font-bold tracking-tight text-slate-900`.

  * Typography Description: `text-sm md:text-base text-slate-500 leading-relaxed`.

  * Interaction: `transition-shadow hover:shadow-md`.

* **ContinueLearningCard [DUMB]**:

  * Box Style: `bg-white border border-slate-200 rounded-xl shadow-sm p-5 md:p-6`.

  * Layout: `flex flex-col gap-5 md:flex-row md:items-center md:justify-between`.

  * Typography Title: `text-lg md:text-xl font-semibold text-slate-900`.

  * Typography Meta: `text-sm text-slate-500`.

  * CTA: `h-10 px-5 rounded-lg bg-sky-600 text-white text-sm font-semibold`.

  * Interaction CTA: `hover:bg-sky-700 active:bg-sky-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors`.

  * Interaction Card: `hover:shadow-md transition-shadow`.

* **ProgressBar [DUMB]**:

  * Box Style: `w-full h-2 rounded-full bg-slate-100 overflow-hidden`.

  * Progress Fill: `h-full rounded-full bg-sky-600 transition-all duration-300`.

  * Typography Label: `text-xs font-medium text-slate-500`.

  * State Completed: `bg-green-600`.

* **CompletedLessonList [DUMB]**:

  * Box Style: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`.

  * View More Button: `self-start text-sm font-semibold text-sky-600 rounded-lg px-3 py-2`.

  * Interaction: `hover:bg-sky-50 hover:text-sky-700 active:bg-sky-100 transition-colors`.

* **CompletedLessonCard [DUMB]**:

  * Box Style: `bg-white border border-slate-200 rounded-xl shadow-sm p-4 flex flex-col gap-3`.

  * Typography Title: `text-sm md:text-base font-semibold text-slate-900 line-clamp-2`.

  * Typography Meta: `text-xs text-slate-500`.

  * Interaction: `hover:border-slate-300 hover:shadow-md transition-all`.

* **StatusTag [DUMB]**:

  * Box Style: `inline-flex w-fit items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1`.

  * Typography: `text-xs font-semibold text-green-700`.

  * Completed State: `bg-green-50 text-green-700`.

  * Interaction: `select-none`.

* **PeriodSwitcher [DUMB]**:

  * Box Style: `inline-flex rounded-lg bg-slate-100 p-1`.

  * Item: `px-3 py-1.5 rounded-md text-sm font-medium`.

  * Default: `text-slate-500 hover:text-slate-900`.

  * Active: `bg-white text-sky-700 shadow-sm`.

  * Disabled: `text-slate-300 cursor-not-allowed`.

  * Interaction: `transition-colors cursor-pointer`.

* **LearningTimeChart [DUMB]**:

  * Box Style: `w-full bg-white border border-slate-200 rounded-xl shadow-sm p-4 md:p-6`.

  * Chart Area: `w-full h-64 md:h-72`.

  * Typography Axis: `text-xs text-slate-500`.

  * Typography Tooltip: `text-xs font-medium text-slate-700`.

  * Line / Main Data: `stroke-sky-600`.

  * Grid Line: `stroke-slate-200`.

  * Interaction: `cursor-crosshair`.

* **DashboardEmptyState [DUMB]**:

  * Box Style: `w-full bg-white border border-dashed border-slate-300 rounded-xl p-8 md:p-10`.

  * Layout: `flex flex-col items-center justify-center text-center gap-4`.

  * Typography Title: `text-lg font-semibold text-slate-900`.

  * Typography Description: `max-w-md text-sm text-slate-500`.

  * CTA: `h-10 px-5 rounded-lg bg-sky-600 text-white text-sm font-semibold`.

  * Interaction CTA: `hover:bg-sky-700 active:bg-sky-800 transition-colors`.

* **DashboardSkeleton [DUMB]**:

  * Box Style: `bg-white border border-slate-200 rounded-xl p-5 md:p-6`.

  * Skeleton Line: `h-4 rounded bg-slate-200 animate-pulse`.

  * Skeleton Title: `h-6 w-1/3 rounded bg-slate-200 animate-pulse`.

  * Skeleton Block: `h-40 rounded-lg bg-slate-100 animate-pulse`.

  * Interaction: `pointer-events-none`.

* **ErrorState [DUMB]**:

  * Box Style: `w-full bg-white border border-red-200 rounded-xl p-6 md:p-8`.

  * Layout: `flex flex-col items-center text-center gap-3`.

  * Typography Title: `text-base font-semibold text-slate-900`.

  * Typography Message: `text-sm text-slate-500`.

  * Error Icon: `text-red-600`.

  * Retry Button: `h-10 px-4 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-700`.

  * Interaction: `hover:bg-slate-50 active:bg-slate-100 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors`.

---

**### 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)**

* **Primary:** `bg-sky-600`, `text-sky-600`, `border-sky-600`.

* **Primary Hover:** `bg-sky-700`, `text-sky-700`.

* **Primary Active:** `bg-sky-800`.

* **Primary Light:** `bg-sky-50`.

* **Page Background:** `bg-slate-50`.

* **Surface / Card:** `bg-white`.

* **Border Default:** `border-slate-200`.

* **Border Hover:** `border-slate-300`.

* **Text Primary:** `text-slate-900`.

* **Text Secondary:** `text-slate-500`.

* **Text Muted:** `text-slate-400`.

* **Success:** `text-green-600`, `text-green-700`, `bg-green-50`.

* **Warning:** `text-amber-600`, `bg-amber-50`.

* **Error:** `text-red-600`, `bg-red-50`, `border-red-200`.

* **Disabled:** `bg-slate-300`, `text-slate-300`.

* **Chart Primary Line:** `stroke-sky-600`.

* **Chart Grid:** `stroke-slate-200`.

* Không dùng `gradient`.

* Không dùng `glassmorphism`, `backdrop-blur` hoặc nền trong suốt phức tạp.

* Không dùng màu neon.

* Không dùng quá nhiều màu trong biểu đồ; biểu đồ chính ưu tiên `sky-600`.

* Trạng thái hoàn thành phải có icon/text đi kèm, không phụ thuộc duy nhất vào màu xanh lá.

---

**### 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)**

```javascript
const mockHero = {
  title: "En-Learning trợ lý ngoại ngữ của bạn!",
  description: "Tiếp tục bài học gần nhất và duy trì tiến độ học tiếng Anh mỗi ngày."
};

const mockContinueLearning = {
  id: "deck_001",
  title: "300 từ vựng tiếng Anh giao tiếp cơ bản",
  type: "FLASHCARD",
  progressPercent: 68,
  progressLabel: "68% hoàn thành",
  lastStudiedAt: "Học gần nhất: Hôm nay, 09:20",
  continuePath: "/flashcards/deck_001/study",
  ctaLabel: "Tiếp tục học"
};

const mockCompletedLessons = [
  {
    id: "lesson_001",
    title: "Từ vựng chủ đề Công việc",
    type: "FLASHCARD",
    completedAt: "Hoàn thành hôm nay",
    status: "Đã hoàn thành"
  },
  {
    id: "lesson_002",
    title: "Viết email xin nghỉ phép",
    type: "WRITING",
    completedAt: "Hoàn thành hôm qua",
    status: "Đã hoàn thành"
  },
  {
    id: "lesson_003",
    title: "Listening: Daily Conversation",
    type: "LISTENING",
    completedAt: "Hoàn thành 09/09/2026",
    status: "Đã hoàn thành"
  },
  {
    id: "lesson_004",
    title: "Bài kiểm tra từ vựng A2",
    type: "EXAM",
    completedAt: "Hoàn thành 08/09/2026",
    status: "Đã hoàn thành"
  }
];

const mockWeekChart = [
  { label: "T2", studyMinutes: 25 },
  { label: "T3", studyMinutes: 40 },
  { label: "T4", studyMinutes: 20 },
  { label: "T5", studyMinutes: 55 },
  { label: "T6", studyMinutes: 35 },
  { label: "T7", studyMinutes: 65 },
  { label: "CN", studyMinutes: 45 }
];

const mockMonthChart = [
  { label: "Tuần 1", studyMinutes: 180 },
  { label: "Tuần 2", studyMinutes: 245 },
  { label: "Tuần 3", studyMinutes: 210 },
  { label: "Tuần 4", studyMinutes: 295 }
];

const mockChart = {
  title: "Thời gian học tập",
  description: "Tổng thời gian bạn đã dành cho việc học tiếng Anh.",
  period: "week",
  periodOptions: [
    { label: "Tuần", value: "week" },
    { label: "Tháng", value: "month" }
  ],
  unit: "phút"
};

const mockEmptyState = {
  title: "Bạn chưa có dữ liệu học tập",
  description: "Bắt đầu một bài học để En-Learning ghi nhận tiến độ của bạn.",
  actionLabel: "Bắt đầu học Flashcard"
};

const mockErrorState = {
  title: "Không thể tải dữ liệu Dashboard",
  message: "Đã xảy ra lỗi khi tải tiến độ học tập. Vui lòng thử lại.",
  retryLabel: "Thử lại"
};

const mockSkeleton = {
  continueLearning: true,
  completedLessons: 4,
  chart: true
};
```
