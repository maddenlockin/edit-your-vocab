const runSort = (sort, dir) => {
  if(!sort) return {};
  return {
    [sort]: dir & dir.toLowerCase().startsWith('des')
      ? -1 : 1
  };
};

module.exports = runSort;
