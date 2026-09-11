import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <section className="w-full rounded-2xl overflow-hidden shadow-sm border border-[#E5E8EE] dark:border-slate-800 relative bg-white dark:bg-slate-800 group">
      <img 
        alt="English Language Lessons Banner" 
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-[1.01]" 
        src="https://lh3.googleusercontent.com/aida/AEtjO1VywdFsB_YW5EorMU5kA7F1NnYQpkFxdbwLWAbVfLYJai9esUiaPAzOIK9PgYL_OWx_Nh_BSu72TZ1eVVWCosP0ISfFoSWVfpQXTk881bKrHmf0rIcImkzaWIio8i5nIt2L4mRV1lfR89mKJxbSQYZiUXc4nMKgFRy4aGiqfGGGQriENEj9usTGrwbKH7jP47lP23IGbmG446qDLr2cWmjfmjNm_NXBQK8yRr0zEFYoYOuPKz-RaB-Os0Q"
      />
    </section>
  );
};

export default HeroBanner;
