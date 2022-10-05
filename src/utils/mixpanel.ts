export const trackClick = (name: string) => {
  if (window !== undefined) {
    // @ts-ignore
    window.mixpanel.track('click', { button: name })
  }
}
