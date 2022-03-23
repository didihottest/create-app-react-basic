import React from 'react'

function Footer(props) {
  // const year = new Date().getFullYear()
  return (
    <footer>
      {/* <p>Copyright &copy; {year}</p> */}
      {
        props.length > 0 ?
          <p>{props.length} Daftar Belanja</p> : <p>{props.length}</p>
      }
    </footer>
  )
}

export default Footer