import { useState, useEffect, KeyboardEvent } from "react"

export default function () {
  const [list, setList] = useState(() => {
    const dadosLocais = localStorage.getItem("localData")
    if (dadosLocais)
      return JSON.parse(dadosLocais) as string[]
    return ["Dunha", "Dirce"]
  })

  const store = () => {
    localStorage.setItem("localData", JSON.stringify(list))
  }

  useEffect(store, [list])

  const adicionar = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.code != "Enter") return
    ev.preventDefault()
    setList([...list, ev.currentTarget.value])
    ev.currentTarget.value = ""
  }

  const remover = (removeidx: number) => {
    // // 1
    // const newList = list.filter((val, idx) => {
    //   if(idx == removeidx) {
    //     return false
    //   }
    //   return true
    // })
    // setList(newList)

    // // 2
    // const newList = list.filter((val, idx) => {
    //   if (idx == removeidx)
    //     return false
    //   return true
    // })
    // setList(newList)

    // // 3
    // const newList = list.filter((val, idx) => {
    //   return (idx != removeidx)
    // })
    // setList(newList)

    // //4
    // const newList = list.filter((val, idx) => (idx != removeidx))
    // setList(newList)

    // 5
    setList(list.filter((_, idx) => (idx != removeidx)))
  }

  return <>
    <input type="text" onKeyUp={adicionar} />
    {list.map((el, idx) =>
      <div key={idx} onClick={() => remover(idx)}>{el}</div>
    )}
  </>
}