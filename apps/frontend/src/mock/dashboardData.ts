// Mock data khớp với thiết kế Stitch - En-Learning User Dashboard

export const mockUser = {
  name: "Điền",
  fullName: "Trịnh Điền",
  initials: "TĐ",
  role: "Học viên",
  avatar: "",
};

export const statCards = [
  {
    id: 1,
    title: "Chuỗi ngày học",
    value: "7 ngày",
    description: "Tiếp tục duy trì!",
    icon: "local_fire_department",
    iconColor: "#F59E0B",
    iconBg: "#FFFBEB",
    descColor: "#F59E0B",
    descIcon: "local_fire_department",
  },
  {
    id: 2,
    title: "Thời gian học tuần này",
    value: "4 giờ 35 phút",
    description: "+12% so với tuần trước",
    icon: "schedule",
    iconColor: "#16A34A",
    iconBg: "#F0FDF4",
    descColor: "#16A34A",
    descIcon: "trending_up",
  },
  {
    id: 3,
    title: "Từ đã học",
    value: "328",
    description: "42 từ cần ôn lại",
    icon: "spellcheck",
    iconColor: "#008FD5",
    iconBg: "#E6F4FA",
    descColor: "#008FD5",
    descIcon: "sync_problem",
  },
  {
    id: 4,
    title: "Điểm trung bình",
    value: "8.2",
    valueSuffix: "/ 10",
    description: "Trong 5 bài gần nhất",
    icon: "award_star",
    iconColor: "#007BB8",
    iconBg: "#EFF6FF",
    descColor: "#64748B",
    descIcon: "history",
  },
];

export const continueLearning = {
  badge: "Từ vựng",
  badgeSubtitle: "Hoàn thành bài học gần nhất của bạn.",
  title: "Tiếp tục học: Daily Activities",
  progressLabel: "Tiến độ hiện tại:",
  current: 18,
  total: 30,
  percent: 60,
  remaining: 12,
  icon: "menu_book",
};

export const dailyGoal = {
  percent: 78,
  studied: 35,
  target: 45,
  remaining: 10,
};

export const quickActions = [
  {
    id: 1,
    title: "Học từ vựng",
    description: "Ôn tập và ghi nhớ từ mới theo phương pháp ngắt quãng.",
    icon: "style",
    iconColor: "#008FD5",
    iconBg: "#EFF6FF",
    route: "/flashcard",
  },
  {
    id: 2,
    title: "Luyện viết",
    description: "Viết câu và nhận góp ý chỉnh sửa ngữ pháp từ AI.",
    icon: "edit_note",
    iconColor: "#4F46E5",
    iconBg: "#EEF2FF",
    route: "/writing",
  },
  {
    id: 3,
    title: "Luyện nghe",
    description: "Cải thiện khả năng nghe hiểu với đoạn thoại thực tế.",
    icon: "headphones",
    iconColor: "#0284C7",
    iconBg: "#F0F9FF",
    route: "/listening",
  },
  {
    id: 4,
    title: "Làm bài kiểm tra",
    description: "Đánh giá trình độ hiện tại với bài test phân loại.",
    icon: "quiz",
    iconColor: "#0D9488",
    iconBg: "#F0FDFA",
    route: "/exam",
  },
];

export const aiRecommendations = [
  {
    id: 1,
    title: "Ôn lại 12 từ vựng chưa nhớ",
    category: "Từ vựng",
    estimatedTime: "10 phút",
    icon: "spellcheck",
    iconColor: "#008FD5",
    iconBg: "#DBEAFE",
    buttonText: "Học ngay",
    buttonVariant: "primary" as const,
  },
  {
    id: 2,
    title: "Luyện viết câu sử dụng thì quá khứ đơn",
    category: "Luyện viết",
    estimatedTime: "15 phút",
    icon: "history_edu",
    iconColor: "#4F46E5",
    iconBg: "#E0E7FF",
    buttonText: "Luyện tập",
    buttonVariant: "outline" as const,
  },
];

export const skills = [
  { name: "Từ vựng", percent: 78 },
  { name: "Viết", percent: 65 },
  { name: "Nghe", percent: 72 },
  { name: "Bài kiểm tra", percent: 81 },
];

export const activityChartData = [
  { day: "T2", minutes: 35, heightPercent: 46 },
  { day: "T3", minutes: 50, heightPercent: 66 },
  { day: "T4", minutes: 20, heightPercent: 26 },
  { day: "T5", minutes: 45, heightPercent: 60 },
  { day: "T6", minutes: 55, heightPercent: 73 },
  { day: "T7", minutes: 75, heightPercent: 100, isPeak: true },
  { day: "CN", minutes: 40, heightPercent: 53 },
];

export const recentActivities = [
  {
    id: 1,
    title: "Đã học bộ từ vựng Daily Activities",
    detail: "18 từ · 25 phút",
    time: "10:32 hôm nay",
    icon: "style",
    iconColor: "#008FD5",
    iconBg: "#EFF6FF",
  },
  {
    id: 2,
    title: "Hoàn thành bài luyện viết",
    detail: "Điểm AI: 8.5 / 10",
    detailHighlight: true,
    time: "Hôm qua",
    icon: "edit_note",
    iconColor: "#4F46E5",
    iconBg: "#EEF2FF",
  },
  {
    id: 3,
    title: "Hoàn thành bài kiểm tra Grammar Basics",
    detail: "Điểm: 82%",
    detailHighlight: true,
    time: "2 ngày trước",
    icon: "quiz",
    iconColor: "#0D9488",
    iconBg: "#F0FDFA",
  },
  {
    id: 4,
    title: "Hoàn thành bài nghe At the Coffee Shop",
    detail: "8 / 10 câu đúng",
    time: "3 ngày trước",
    icon: "headphones",
    iconColor: "#0284C7",
    iconBg: "#F0F9FF",
  },
];
