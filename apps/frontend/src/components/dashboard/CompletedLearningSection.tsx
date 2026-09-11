import React, { useState } from 'react';

const courses = [
  { id: 1, icon: 'work', title: 'Từ vựng chủ đề Công việc', time: 'Hoàn thành hôm nay', progress: '100%' },
  { id: 2, icon: 'mail', title: 'Viết email xin nghỉ phép', time: 'Hoàn thành hôm qua', progress: '9.5/10' },
  { id: 3, icon: 'record_voice_over', title: 'Listening: Daily Conversation', time: 'Hoàn thành 09/09/2026', progress: '10/10' },
  { id: 4, icon: 'verified', title: 'Bài kiểm tra từ vựng A2', time: 'Hoàn thành 08/09/2026', progress: '92%' },
  { id: 5, icon: 'flight', title: 'Tiếng Anh Giao tiếp Du lịch', time: 'Hoàn thành 05/09/2026', progress: '100%' },
  { id: 6, icon: 'menu_book', title: 'Ngữ pháp: Câu điều kiện loại 1 & 2', time: 'Hoàn thành 03/09/2026', progress: '90%' },
];

const CompletedLearningSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleCourses = showMore ? courses : courses.slice(0, 4);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bài học đã hoàn thành</h3>
        {courses.length > 4 && (
          <button 
            onClick={() => setShowMore(!showMore)}
            className="text-[#008FD5] hover:text-[#006193] dark:hover:text-sky-300 text-sm font-semibold hover:underline flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{showMore ? 'Thu gọn' : 'Xem thêm'}</span>
            <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${showMore ? '-rotate-90' : 'rotate-90'}`}>chevron_right</span>
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-300">
        {visibleCourses.map((course) => (
          <div key={course.id} className="bg-[#008FD5] hover:bg-[#007BB8] border border-[#007BB8] rounded-xl p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-all group cursor-pointer text-white">
            <div className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-lg bg-white/20 text-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-white">{course.icon}</span>
              </div>
              <h4 className="font-semibold text-white text-base leading-snug">
                {course.title}
              </h4>
              <p className="text-xs text-white/85">{course.time}</p>
            </div>
            <div className="pt-2 border-t border-white/20 flex items-center justify-between">
              <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span>Đã hoàn thành</span>
              </span>
              <span className="text-xs text-white font-bold">{course.progress}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompletedLearningSection;
