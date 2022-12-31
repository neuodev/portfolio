const reEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "i");

export const isValidEmail = (email: string) => reEmail.test(email);
export const notEmptyStr = (str: string) =>
  typeof str === "string" && str.length !== 0;

const remoteRepo =
  "https://raw.githubusercontent.com/AhmedIbrahim336/portfolio";
export const asRemoteImgUrl = (imgPath: string) =>
  `${remoteRepo}/master/public${imgPath}`;
