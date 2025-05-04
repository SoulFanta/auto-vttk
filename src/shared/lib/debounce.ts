export const debounce = <F extends (...args: any[]) => void>(
    func: F,
    delay: number
  ) => {
    let timeoutId: NodeJS.Timeout
    const debounced = (...args: Parameters<F>) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func(...args), delay)
    }
    debounced.cancel = () => clearTimeout(timeoutId)
    return debounced
  }