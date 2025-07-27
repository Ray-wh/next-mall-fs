import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/second-post">
          Back to second post
        </Link>
      </h2>
    </>
  )
}