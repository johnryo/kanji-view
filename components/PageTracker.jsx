const PageTracker = ({ page, pageSize, totalItems, totalPages }) => {
  const lastPage = totalPages;

  return (
    <div className='text-center text-sm text-gray-500 mt-[-8px] mb-10'>
      {page === 1
        ? `${page}-${pageSize}`
        : page > 1 && page < lastPage
        ? `${(page - 1) * pageSize + 1}-${page * pageSize}`
        : page === lastPage
        ? `${(page - 1) * pageSize + 1}-${
            totalItems % pageSize === 0
              ? page * pageSize
              : (page - 1) * pageSize + (totalItems % pageSize)
          }`
        : null}{' '}
      of {totalItems} kanji
    </div>
  );
};

export default PageTracker;
