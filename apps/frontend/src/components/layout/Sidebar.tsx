import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Sidebar: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => {
  const { t } = useTranslation();
  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    `nav-item flex items-center px-3 py-2.5 mx-3 rounded-lg text-sm transition-all duration-300 group cursor-pointer ${
      isActive 
        ? 'bg-[#E6F4FA] dark:bg-sky-950 text-[#008FD5] dark:text-sky-400 font-semibold' 
        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 font-medium'
    } ${!isOpen ? 'justify-center !px-0 !mx-2' : 'gap-3'}`;

  const getIconClass = (isActive: boolean) => 
    `material-symbols-outlined text-[20px] shrink-0 ${
      isActive
        ? 'text-[#008FD5] dark:text-sky-400'
        : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
    }`;

  const renderNavText = (text: string) => (
    <span className={`nav-text whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? 'w-auto opacity-100' : 'w-0 opacity-0 md:hidden'}`}>
      {text}
    </span>
  );

  return (
    <aside 
      className={`fixed top-16 left-0 bottom-0 bg-surface-main dark:bg-slate-900 border-r border-[#E5E8EE] dark:border-slate-800 flex flex-col z-30 transition-all duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full md:translate-x-0'}`} 
      id="main-sidebar"
    >
      <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden flex flex-col gap-1">
        <div className={`nav-category px-6 py-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden py-0'}`}>
          {t('sidebar.learning_management')}
        </div>
        
        <NavLink to="/dashboard" className={getNavClass} title={t('sidebar.dashboard')}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>grid_view</span>
              {renderNavText(t('sidebar.dashboard'))}
            </>
          )}
        </NavLink>
        
        <NavLink to="/flashcard" className={getNavClass} title={t('sidebar.flashcard')}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>style</span>
              {renderNavText(t('sidebar.flashcard'))}
            </>
          )}
        </NavLink>

        <NavLink to="/writing" className={getNavClass} title={t('sidebar.writing')}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>edit_note</span>
              {renderNavText(t('sidebar.writing'))}
            </>
          )}
        </NavLink>
        
        <NavLink to="/listening" className={getNavClass} title={t('sidebar.listening')}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>headphones</span>
              {renderNavText(t('sidebar.listening'))}
            </>
          )}
        </NavLink>
        
        <NavLink to="/exam" className={getNavClass} title={t('sidebar.exam')}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>quiz</span>
              {renderNavText(t('sidebar.exam'))}
            </>
          )}
        </NavLink>

        <NavLink to="/statistics" className={getNavClass} title={t('sidebar.statistics')}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>bar_chart</span>
              {renderNavText(t('sidebar.statistics'))}
            </>
          )}
        </NavLink>

        <NavLink to="/recommendation" className={getNavClass} title={t('sidebar.recommendation')}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>auto_awesome</span>
              {renderNavText(t('sidebar.recommendation'))}
            </>
          )}
        </NavLink>
        
        <div className={`nav-category px-6 pt-4 pb-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden py-0 pt-0'}`}>
          {t('sidebar.interaction_system')}
        </div>
        
        <NavLink to="/chat" className={getNavClass} title={t('sidebar.chat')}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>forum</span>
              {renderNavText(t('sidebar.chat'))}
            </>
          )}
        </NavLink>

        <NavLink to="/settings" className={getNavClass} title={t('sidebar.settings')}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>manage_accounts</span>
              {renderNavText(t('sidebar.settings'))}
            </>
          )}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
