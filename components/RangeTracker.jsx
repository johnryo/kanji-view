const RangeTracker = ({ page, pageSize, totalItems, totalPages }) => {
  return (
    <div className='text-center text-sm text-gray-400 mt-[-8px]'>
      {page === 1 && `${page}-${pageSize}`}{' '}
      {page > 1 &&
        page < totalPages &&
        `${(page - 1) * pageSize + 1}-${page * pageSize}`}{' '}
      {page === totalPages &&
        `${(page - 1) * pageSize + 1}-${
          (page - 1) * pageSize + (totalItems % pageSize)
        }`}{' '}
      of {totalItems} kanji
    </div>
  );
};

export default RangeTracker;
