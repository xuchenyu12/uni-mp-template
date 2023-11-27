import type { GuessInstance } from '@/types/component'

export const useGuessList = () => {
  const guessRef = ref<GuessInstance>()
  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  //返回ref和事件处理函数
  return {
    guessRef,
    onScrolltolower
  }
}
