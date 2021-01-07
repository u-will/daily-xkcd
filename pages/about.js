import Link from 'next/link';
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
    <div>
      <h1>About</h1>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  )
}

export default About;