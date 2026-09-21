const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total of {props.part1.exercises + props.part2.exercises + props.part3.exercises} exercises
    </p>
  )
}

const App = () => {
  const course = 'Data Structures and Algorithms'
  const part1 = {
    name: 'Arrays and Linked Lists',
    exercises: 10
  }
  const part2 = {
    name: 'Trees and Graphs',
    exercises: 7
  }
  const part3 = {
    name: 'Sorting and Searching',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App