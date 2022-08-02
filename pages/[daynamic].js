import Head from 'next/head';
import { useRouter } from 'next/router'

export default function daynamic() {
    const router=useRouter();
    const query=router.query.daynamic
    console.log(query)
  return (
    <div>
    <Head><title>{query}</title></Head>
    hi there dynamic root {query}
    </div>
  )
}
