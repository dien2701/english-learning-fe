# 01-Dashboard-plan

**### 1. PHÂN RÃ COMPONENT (COMPONENT TREE)**

* **DashboardPage [SMART]**: Điều phối dữ liệu Dashboard sau đăng nhập: bài đang học, nội dung hoàn thành và thống kê học gần đây. Dashboard chỉ giữ thông tin tổng quan; phân tích chuyên sâu thuộc `/statistics`.

  * **HeroBanner [DUMB]**: Hiển thị lời chào “En-Learning trợ lý ngoại ngữ của bạn!” và thông tin định hướng học tập ngắn.

  * **ContinueLearningSection [SMART]**: Lấy bài học gần nhất chưa hoàn thành.

    * **ContinueLearningCard [DUMB]**: Hiển thị tên bài, loại bài học, tiến độ, lần học gần nhất và CTA `Tiếp tục học`.

    * **ProgressBar [DUMB]**: **(Shared UI)** Hiển thị phần trăm hoàn thành.

  * **CompletedLearningSection [SMART]**: Lấy danh sách nội dung đã hoàn thành gần đây.

    * **CompletedLessonList [DUMB]**: Hiển thị danh sách ngang và nút `Xem chi tiết`.

    * **CompletedLessonCard [DUMB]**: Hiển thị tên bài, loại nội dung và thời gian hoàn thành.

    * **StatusTag [DUMB]**: **(Shared UI)** Hiển thị trạng thái `Đã hoàn thành`.

  * **LearningChartSection [SMART]**: Lấy dữ liệu học theo khoảng thời gian và quản lý chế độ `week/month`.

    * **PeriodSwitcher [DUMB]**: **(Shared UI)** Chuyển giữa `Tuần` và `Tháng`.

    * **LearningTimeChart [DUMB]**: Hiển thị số phút học theo ngày/tuần.

  * **DashboardEmptyState [DUMB]**: **(Shared UI)** Hiển thị khi chưa có dữ liệu học và CTA bắt đầu Flashcard.

  * **DashboardSkeleton [DUMB]**: **(Shared UI)** Trạng thái loading.

  * **ErrorState [DUMB]**: **(Shared UI)** Hiển thị lỗi và callback `Thử lại`.

**### 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)**

* `currentUser`: **Global State** (`Zustand`) — thông tin người dùng đăng nhập.

* `continueLearning`: **Server State** (`TanStack Query`) — bài học gần nhất chưa hoàn thành.

* `completedLessons`: **Server State** (`TanStack Query`) — các bài học đã hoàn thành gần đây.

* `learningStats`: **Server State** (`TanStack Query`) — dữ liệu thời gian học phục vụ biểu đồ.

* `chartPeriod`: **URL Query Parameter** (`?period=week|month`) — giữ chế độ biểu đồ khi reload/share URL.

* `isLoading`, `isError`: **Server State** (`TanStack Query`) — không lưu riêng bằng `useState`.

* `showAllCompleted`: **Local State** (`useState`) — mở rộng/thu gọn danh sách bài đã hoàn thành.

* Không đưa dữ liệu Dashboard vào Zustand vì đây là **Server State**, tránh duplicate state và cache thủ công.

**### 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)**

```typescript
type LearningType =
  | 'FLASHCARD'
  | 'WRITING'
  | 'LISTENING'
  | 'EXAM';

type ChartPeriod = 'week' | 'month';

interface ContinueLearningItem {
  id: string;
  title: string;
  type: LearningType;
  progressPercent: number;
  lastStudiedAt: string;
  continuePath: string;
}

interface ContinueLearningCardProps {
  item: ContinueLearningItem;
  onContinue: (path: string) => void;
}

interface CompletedLesson {
  id: string;
  title: string;
  type: LearningType;
  completedAt: string;
}

interface CompletedLessonCardProps {
  lesson: CompletedLesson;
}

interface CompletedLessonListProps {
  lessons: CompletedLesson[];
  showAll: boolean;
  onViewMore: () => void;
}

interface LearningChartPoint {
  label: string;
  studyMinutes: number;
}

interface LearningTimeChartProps {
  data: LearningChartPoint[];
  period: ChartPeriod;
}

interface PeriodSwitcherProps {
  value: ChartPeriod;
  onChange: (period: ChartPeriod) => void;
}

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
}

interface DashboardEmptyStateProps {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}
```
