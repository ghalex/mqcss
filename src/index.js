export const breakpoints = {
  TABLET: '769px',
  DESKTOP: '1007px',
  WIDE: '1200px'
}

let { MOBILE, TABLET, DESKTOP, WIDE } = breakpoints

export const mq = ({from, to}) => {
  if (!from) {
    return `@media (max-width: ${to}) `
  }

  if (from && !to) {
    return `@media (min-width: ${from})`
  }

  let media = `@media (min-width: ${from}) and (max-width: ${to}) `
  return media
}

export const onMobile = mq({from: 0, to: TABLET})
export const onTouch = mq({from: 0, to: DESKTOP})
export const onTablet = mq({from: TABLET})
export const onDesktop = mq({from: DESKTOP})
export const onWidescreen = mq({from: WIDE})

export const onTabletOnly = mq({from: TABLET, to: DESKTOP})
export const onDesktopOnly = mq({from: DESKTOP, to: WIDE})
