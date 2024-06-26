const isMenuActive = (basePath: string, urlPath: string) => {
  return basePath == urlPath ? true : false;
};

export default isMenuActive;
