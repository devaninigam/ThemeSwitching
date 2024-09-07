export type Themecheck = {
  mode: string,
  colors: string,
}

export interface PageProps {
  ThemeData: Themecheck,
  ChangeThemeColor: (color: string) => void,
  ChangeThemeMode: (mode: string) => void
}


export const getThemeToLocalStorage = (): Themecheck => {
  return JSON.parse(localStorage.getItem("Theme") || "[]");
}

export const setThemeInLocalStorage = (Theme: Themecheck) => {
  localStorage.setItem("Theme",JSON.stringify(Theme))
}