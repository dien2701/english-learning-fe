# KẾ HOẠCH KỸ THUẬT: MÀN HÌNH DASHBOARD

## 1. PHÂN RÃ COMPONENT (COMPONENT TREE)

```text
Dashboard (Page) [SMART]
├── DashboardLayout [DUMB] (Shared UI: Bố cục chính cho các trang có Sidebar & Header)
│   ├── Sidebar [SMART] (Shared UI: Điều hướng chính, lấy active route)
│   ├── Header [SMART] (Shared UI: Thanh tìm kiếm, chuông thông báo, avatar)
│   └── DashboardContent [SMART] (Container gọi API tổng cho nội dung Dashboard)
│       ├── WelcomeHeader [DUMB] (Hiển thị lời chào, mục tiêu, số ngày học liên tiếp)
│       ├── ContinueLearningCard [DUMB] (Card nổi bật nhất, nút "Tiếp tục học")
│       ├── QuickActions [DUMB] (Danh sách các thao tác học nhanh)
│       │   └── ActionButton [DUMB] (Shared UI: Nút thao tác)
│       ├── LearningProgressChart [DUMB] (Biểu đồ số phút học 7 ngày qua)
│       ├── Recommendations [DUMB] (Danh sách gợi ý học tập)
│       │   └── RecommendationItem [DUMB]
│       └── RecentActivities [DUMB] (Lịch sử hoạt động gần đây)
│           └── ActivityItem [DUMB]
```

## 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

**Local State (useState / useReducer):**
- `isSidebarOpen`: Trạng thái đóng/mở Sidebar trên màn hình nhỏ.
- `searchQuery`: Text đang gõ trong thanh tìm kiếm trên Header trước khi submit.

**Global State (Redux Toolkit / RTK Query):**
- `auth`: Chứa token, thông tin cơ bản của User (Avatar, Tên, Roles) để hiển thị trên Header.
- `dashboardApi`: Sử dụng RTK Query để fetch toàn bộ dữ liệu trang Dashboard (Tiến độ học, Gợi ý, Lịch sử) và cache tự động, cung cấp state `isLoading`, `isFetching`, `isError` mà không cần quản lý thủ công.

**URL Query Parameters:**
- Không khuyến khích đẩy nhiều State lên URL cho Dashboard mặc định trừ khi người dùng cần filter khoảng thời gian cho biểu đồ (VD: `?chartRange=7d`). Trong trường hợp này có thể sử dụng `chartRange` trên URL.

## 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)

```typescript
// Data Models
export interface UserProfile {
  id: string;
  fullName: string;
  avatarUrl: string | null;
  streakDays: number;
  todayGoal: string;
}

export interface ContinueLearningData {
  moduleId: string;
  moduleName: string;
  moduleType: 'FLASHCARD' | 'LISTENING' | 'WRITING' | 'EXAM';
  progressPercentage: number;
  lastLearnedAt: string; // ISO Date String
}

export interface QuickAction {
  id: string;
  title: string;
  actionType: 'FLASHCARD' | 'WRITING' | 'LISTENING' | 'EXAM';
  iconName: string;
  href: string;
}

export interface ProgressStat {
  date: string; // ISO Date String
  minutesLearned: number;
}

export interface Recommendation {
  id: string;
  message: string;
  ctaText: string;
  actionUrl: string;
  priority: 'HIGH' | 'NORMAL';
}

export interface RecentActivity {
  id: string;
  activityName: string;
  timestamp: string; // ISO Date String
  score: number | null;
}

// Component Props
export interface WelcomeHeaderProps {
  user: UserProfile;
}

export interface ContinueLearningCardProps {
  data: ContinueLearningData | null;
  onContinueClick: (moduleId: string, moduleType: string) => void;
}

export interface QuickActionsProps {
  actions: QuickAction[];
}

export interface LearningProgressChartProps {
  stats: ProgressStat[];
  totalWordsLearned: number;
  totalWritingsSubmitted: number;
  latestScore: number | null;
}

export interface RecommendationsProps {
  items: Recommendation[];
  onActionClick: (url: string) => void;
}

export interface RecentActivitiesProps {
  activities: RecentActivity[];
}
```
