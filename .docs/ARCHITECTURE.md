KIẾN TRÚC HỆ THỐNG: EN-LEARNING
1. Sơ đồ dữ liệu cốt lõi (Core Database Entities)
User & Role: Lưu tài khoản, mật khẩu đã mã hóa và vai trò USER, ADMIN.
Topic, FlashcardDeck & Flashcard: Lưu chủ đề, bộ từ và từng từ vựng.
UserFlashcardProgress: Lưu mức độ nhớ từ, số lần ôn và ngày ôn tiếp theo.
WritingPrompt, WritingSubmission & AiFeedback: Lưu đề viết, bài nộp và phản hồi từ AI.
ListeningLesson & ListeningAttempt: Lưu bài nghe, câu hỏi và kết quả làm bài.
Exam, ExamQuestion & ExamAttempt: Lưu đề kiểm tra, câu hỏi, đáp án và lịch sử làm bài.
LearningActivity & Recommendation: Lưu hoạt động học, thống kê và gợi ý học tiếp.
Notification & EmailLog: Lưu thông báo và lịch sử gửi email.

2. Luồng nghiệp vụ tối quan trọng (Critical Business Logic)
Lưu kết quả học:
User học Flashcard/làm bài → Backend kiểm tra → lưu MySQL → cập nhật thống kê và gợi ý.
Redis chỉ dùng để cache. Tiến độ học phải luôn lưu trong MySQL.
Flashcard:
Frontend chỉ gửi flashcardId và mức độ nhớ.
Backend tự tính ngày ôn tiếp theo.
Chấm AI:
Backend lưu bài viết trước, gọi OpenAI sau và lưu phản hồi AI.
Không để OpenAI API key trong React.
Bài kiểm tra:
Trắc nghiệm tự chấm bằng đáp án trong database.
Không trả đáp án đúng trước khi User nộp bài.
Email nhắc học:
Scheduler → RabbitMQ → gửi email → lưu EmailLog.
Không gửi trùng email trong cùng ngày.

3. Module Auth (Xác thực, phân quyền & bảo mật)
Sử dụng Spring Security + JWT để quản lý đăng nhập.
Mật khẩu mã hóa bằng BCrypt.
Phân quyền cơ bản: USER, ADMIN.
USER chỉ xem và sửa dữ liệu của chính mình.
ADMIN quản lý người dùng, nội dung học và thông báo.
JWT secret, OpenAI API key, Cloudinary secret và mật khẩu email đặt trong .env; không commit lên GitHub.

4. Kiến trúc triển khai (Application Architecture)
Backend dùng modular monolith: một Spring Boot, chia module auth, flashcard, writing, exam, learning, notification, admin.
Luồng Backend: Controller → Service → Repository → MySQL.
Frontend: React + TypeScript + Ant Design.
Redis cache Flashcard; Cloudinary lưu MP3; RabbitMQ gửi email; WebSocket dùng cho chat.