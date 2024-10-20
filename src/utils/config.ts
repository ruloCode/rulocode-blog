const getConfig = () => {
  return {
    NOTION_PAGE_ID: `${process?.env?.NEXT_PUBLIC_NOTION_PAGE_ID}`,
  };
};

export default getConfig();
