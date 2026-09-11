### 1. PHÂN RÃ COMPONENT (COMPONENT TREE)

- **MasterLayout [SMART]**: Component bọc ngoài cùng cho các trang yêu cầu đăng nhập. Chứa Layout chính, xử lý fetch thông tin người dùng ban đầu nếu chưa có.
  - **Header [SMART]**: Thanh điều hướng trên cùng, cố định (sticky). Lấy dữ liệu user và thông báo từ Global State.
    - **Logo [DUMB]**: *(Shared UI)* Nhận src ảnh/text để hiển thị logo và liên kết về trang chủ.
    - **NotificationIcon [DUMB]**: Nhận số lượng thông báo (`unreadCount`) và callback `onClick`.
    - **UserDropdown [DUMB]**: Nhận thông tin user (avatar, tên) và các hàm callback (Đăng xuất, Chuyển trang).
  - **Sidebar [DUMB]**: Thanh menu điều hướng bên trái. Nhận mảng danh sách các mục menu và đường dẫn hiện tại để highlight.
    - **MenuItem [DUMB]**: Nhận icon, label, trạng thái `isActive`.
  - **MainContent [DUMB]**: Vùng chứa nội dung trang con (render qua `<Outlet />` của React Router).
  - **GlobalFooter [DUMB]**: Chân trang, có thể nhận danh sách cột link hoặc render tĩnh.
    - **FooterColumn [DUMB]**: Nhận tiêu đề cột và danh sách các link.

### 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

- **Các State cần thiết và Chiến lược lưu trữ:**
  - `currentUser` (Thông tin người dùng đang đăng nhập): **Global State** (Redux Toolkit / RTK Query). Cần dùng chung ở Header và các trang bên trong.
  - `unreadNotificationCount` (Số lượng thông báo chưa đọc): **Global State** (RTK Query polling hoặc kết hợp WebSockets/RabbitMQ theo kiến trúc backend).
  - `isSidebarOpen` (Trạng thái ẩn/hiện Sidebar trên Mobile): **Local State** (`useState` trong `MasterLayout`).
  - `isUserDropdownOpen` (Trạng thái mở menu ở Avatar): **Local State** (`useState` trong `Header`).
  - `currentPath` (Đường dẫn hiện tại để bôi đậm mục trong Sidebar): **Router State** (Lấy trực tiếp từ `useLocation()` của React Router, không cần lưu vào State thủ công).

### 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)

```typescript
// Cấu trúc dữ liệu dùng chung
interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string | null;
  role: 'USER' | 'ADMIN';
}

// Props cho các Dumb Component
interface LogoProps {
  src?: string;
  altText: string;
  homeUrl: string;
}

interface NotificationIconProps {
  unreadCount: number;
  onClick: () => void;
}

interface UserDropdownProps {
  user: UserProfile;
  onNavigateProfile: () => void;
  onNavigateSettings: () => void;
  onLogout: () => void;
}

interface MenuItemData {
  id: string;
  label: string;
  path: string;
  iconName: string;
}

interface SidebarProps {
  items: MenuItemData[];
  currentPath: string;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

interface MenuItemProps {
  item: MenuItemData;
  isActive: boolean;
  onClick?: () => void;
}

interface FooterLink {
  label: string;
  url: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}
```
