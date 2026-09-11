import React from 'react';
import { useTranslation } from 'react-i18next';

export const GlobalFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-transparent dark:bg-slate-900 border-t border-[#E5E8EE] dark:border-slate-800 px-6 sm:px-8 py-8 mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1: En-Learning */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <img 
              alt="En-Learning Logo" 
              className="w-6 h-6 object-contain rounded" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEwr_YbXb5oX0vziwgVyr3CVi0Ea1vpu8y1GG2QnUGPnZlEjghBLbA7i6k7gRNtz7UAxECUmazJHjkE9vZvGVUbS3Cm2Li84uWNGQ3HTp-C2mjbvnUf1gw-oFZiLbEbLlaeyVuwGKCBulzbyEvELe_YDJgwf6BKMfDv2f2unr4plZJusuLq581L6nHYCE6E0Nrp2FdTznZzC87Ozm9z9fR3wX5xl9cu_82uFOpuPbLaCT4GUplF0ETPB3aHKpD54K7Rg"
            />
            <span className="text-base font-bold text-[#008FD5]">En-Learning</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {t('footer.description')}
          </p>
          <div className="pt-1">
            <a className="text-xs font-semibold text-[#008FD5] hover:text-[#006193] dark:hover:text-sky-300 inline-flex items-center gap-1 hover:underline cursor-pointer" href="#ho-tro">
              <span>{t('footer.support')}</span>
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>
          </div>
        </div>
        
        {/* Col 2: Policies */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t('footer.policies')}</h5>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-500 dark:text-slate-400">
            <li><a className="hover:text-[#008FD5] dark:hover:text-sky-400 transition-colors" href="#chinh-sach-bao-mat">{t('footer.privacy_policy')}</a></li>
            <li><a className="hover:text-[#008FD5] dark:hover:text-sky-400 transition-colors" href="#dieu-khoan-su-dung">{t('footer.terms_of_use')}</a></li>
            <li><a className="hover:text-[#008FD5] dark:hover:text-sky-400 transition-colors" href="#quy-dinh-hoc-tap">{t('footer.learning_rules')}</a></li>
          </ul>
        </div>
        
        {/* Col 3: Contact */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t('footer.contact')}</h5>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-500 dark:text-slate-400">
            <li>
              <a className="hover:text-[#008FD5] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5" href="#trung-tam-ho-tro">
                <span className="material-symbols-outlined text-[16px] text-slate-400">headset_mic</span>
                <span>{t('footer.support_center')}</span>
              </a>
            </li>
            <li>
              <a className="hover:text-[#008FD5] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5" href="#gui-phan-hoi">
                <span className="material-symbols-outlined text-[16px] text-slate-400">rate_review</span>
                <span>{t('footer.send_feedback')}</span>
              </a>
            </li>
            <li className="text-slate-400 dark:text-slate-500 pt-1">
              © 2026 En-Learning. All rights reserved.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
