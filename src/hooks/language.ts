export enum language {
  简体中文 = 'zh',
  English = 'en'
}

export function getCookie(name: string): string | undefined {
  const r = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return r ? r[2] : undefined
}

// export function findKey(value: language): language {
//   return Object.keys(language).find(
//     (key) => language[key as keyof typeof language] === value
//   ) as language
// }
