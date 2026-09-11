### 1. PHÂN RÃ COMPONENT (COMPONENT TREE)

* **MasterLayout [SMART]**: Layout chính cho khu vực người học sau đăng nhập. Quản lý Header, Sidebar, nội dung và Footer.

  * **Header [SMART]**: Lấy thông tin user và số thông báo chưa đọc.

    * **Logo [DUMB]**: *(Shared UI)* Logo En-Learning, click về Dashboard.

    * **NotificationIcon [DUMB]**: Hiển thị số thông báo chưa đọc.

    * **UserDropdown [DUMB]**: Hiển thị Hồ sơ, chuyển đổi nền sáng tối, chuyển đổi ngôn ngữ giữa tiếng việt và tiếng anh, Đăng xuất.

  * **Sidebar [DUMB]**: *(Shared UI)* Hiển thị menu Dashboard, Flashcard, Writing, Listening, Exam, Statistics, Recommendation, Chat, Profile.

    * **MenuItem [DUMB]**: *(Shared UI)* Hiển thị từng mục và trạng thái `isActive`.

  * **MobileDrawer [DUMB]**: *(Shared UI)* Sidebar dạng Drawer trên mobile/tablet.

  * **MainContent [DUMB]**: Render nội dung trang qua `<Outlet />`.

  * **GlobalFooter [DUMB]**: Hiển thị thương hiệu, chính sách và hỗ trợ.

    * **FooterColumn [DUMB]**: *(Shared UI)* Hiển thị từng nhóm liên kết.

### 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

* `currentUser`: **Global State** (`Zustand`) — dùng cho Header, Profile và phân quyền.

* `unreadNotificationCount`: **Server State** (`TanStack Query`) — đồng bộ số thông báo chưa đọc.

* `isSidebarCollapsed`: **Local/Global UI State** — trạng thái thu gọn Sidebar desktop.

* `isMobileSidebarOpen`: **Local State** (`useState`) — mở/đóng Drawer mobile.

* `isUserDropdownOpen`: **Local State** (`useState`) — mở/đóng menu tài khoản.

* `currentPath`: **Router State** (`useLocation()` / `NavLink`) — xác định menu đang active.

* Master Layout **không cần URL Query Parameters**. Search, filter, page sẽ được xử lý riêng tại từng chức năng.

### 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)

```typescript
interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string | null;
  role: 'USER' | 'ADMIN';
}

interface NotificationIconProps {
  unreadCount: number;
  onClick: () => void;
}

interface UserDropdownProps {
  user: UserProfile;
  onProfile: () => void;
  onSettings: () => void;
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
  isCollapsed: boolean;
  onToggle: () => void;
}

interface MenuItemProps {
  item: MenuItemData;
  isActive: boolean;
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
