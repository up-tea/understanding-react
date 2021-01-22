import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * 
 * threshould bottomからどの位のpx数をbottom判定に加算するかのarg
 */
const useScroll = ({ threshould = 450, smooth = true } = {}) => {
  const [isAtBottom, setIsAtBottom] = useState(false)
  const ref = useRef<Window>(window)

  /* useCallbackはパフォーマンス向上のためのhook
     memo化したコールバック関数を返す
     これをしないと、componentをrenderする度に関数が再定義され
     関数インスタンスがビッグダディになる
     今回だと、引数のsmoothに変更があった時だけ
     goTop関数を再定義するようにしてる
  */
  const goTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto"
    })
  }, [smooth])

  const goBottom = useCallback(() => {
    /**
     * document.documentElementは<html>を取得する
     * ref.currentがwindow objの場合はhtml要素を
     * でなければ、useRef対象を格納する
     */
    const htmlElm = document.documentElement
    htmlElm.scrollTo({
      top: htmlElm.scrollHeight, // 要素の全長、つまりbottomのy座標
      behavior: smooth ? "smooth" : "auto"
    })
  }, [smooth])

  const handleScroll = useCallback(() => {
    if (ref.current === null) return
    let isAtBottom
    const currentScrollTop = window.innerHeight + window.scrollY
    isAtBottom = currentScrollTop >= document.documentElement.offsetHeight - threshould
    setIsAtBottom(isAtBottom)
  }, [threshould])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return { isAtBottom, handleScroll, goTop, goBottom , ref}
}


export default useScroll
