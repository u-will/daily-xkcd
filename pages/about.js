import Layout from '../components/layout'
// there are two way write this type of function:

// export default() => (
//   <div>
//     <h1>About</h1>
//     <p><a>Home</a></p>
//   </div>
// )

//or you can write it just like this:

function About() {
  return (

    <Layout>
      <div>
        <h1>About Page </h1>
      </div>
    </Layout>

  )
}

export default About;