import { useEffect } from "react"

const usePageTitle = (title) => {
  
  useEffect(()=>{
    // $: 돔요소의 이름을 변수에 저장할 때 사용
    const $title = document.getElementsByTagName('title')[0]
    $title.innerText = title
  },[title])
}

export default usePageTitle
