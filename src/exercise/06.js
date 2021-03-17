// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
    // to do so, set the value of 'htmlFor' prop of the label to the id of input


    // criando uma ref, um recurso do React para acessar conteúdo
    // de elementos de formulários

function UsernameForm({onSubmitUsername}) {

    const usernameE1 = React.useRef()

    // criar uma variável de estado do React
    // uma variável de estado mantém uma informação mesmo que o conteúdo da página
    // seja atualizado
    // para ler o conteúdo da variável de estado, podemos acessá-la diretamente.
    // no entanto, para alterar seu conteúdo, umamos uma função set.

    // error -> variável de estado
    // setError -> função de atualização da variável de estado
    // A função useState aceita um parâmetro que é o VALOR INICIAL da variável
    // de estado. Ou seja, nessa caso, error tem um valor inical de string vazia.

    // useState() retorna um vetor que normalmente é recebido via desestruturação
    const [msg, setMsg] = React.useState('')
    const [username, setUsername] = React.useState('')
    
    //const ret = React.useState('')
    //let estado = ret[0]
    //let setEstado = ret[1]

    function handleChange(event) {
        // capturando o valor do input
        const val = event.target.value

        // armazena na variável de estado o valor do input já convetido 
        // para minúsculas
        setUsername(val.toLowerCase())
        
        // o input será válido se seu contéudo for idêntico 
        // ao próprio conteúdo em minúsculas
        //const isValid = val == val.toLowerCase()

        // atulizando o estado
        //setMsg(isValid ? '' : 'O valor informado deve estar em minúsculas.')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
           <label>Username:</label>
           {/* Associando o ref usernameE1 ao input*/}
           <input  ref={usernameE1} id="username" type="text" onChange={handleChange} value={username} />
             </div>
             <div style={{ color: 'red'}}>{msg}</div>
              <button type="submit">Submit</button>
        </form>
    )


  
    function handleSubmit(event) {
        //const username = document.querySelector('#username').value
        // Previne o recarregamento do formulário
        event.preventDefault()

        const username = usernameE1.current.value

        onSubmitUsername(username)
    }


}





function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

//document.querySelector('form').addEventListener('submit', handleSubmit)

export default App
