import { useRouter } from "next/router";
import Link from "next/link"

const CoffeeStore=()=>{
    const router=useRouter();
    console.log(router)
    return(
        <div>Coffee store page{router.query.id}
        <Link href='/'><a>back to home</a></Link>
        <br></br>
        <Link href='/coffee-store/dynamic'><a>go to page dynamic</a></Link>
        </div>
    
    )
}

export default CoffeeStore;