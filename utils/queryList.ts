export const query = {
  HOME_PAGE: "front-store/v3/home-setting",
  suggestion_tabs : (category:string, numberPage:number) => {
    // console.log(`catalog-fs/product-items?keyword=&current_page=${numberPage}&per_page=10&sort=4&category=${category}`);
    return `catalog-fs/product-items?keyword=&current_page=${numberPage}&per_page=10&sort=4&category=${category}`
    
  },
  fetchCategory: (category:string) => {
    return `front-store/v3/collection?slug=${category}`
  }
};
