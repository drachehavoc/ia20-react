export default function (props: {
  stateList: [string[], React.Dispatch<React.SetStateAction<string[]>>]
}) {
  const [list] = props.stateList

  return <>
    <h1>ToDoList: {list.length}</h1>
  </>
}