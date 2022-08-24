import React from 'react'
import Image from 'next/image';
import Link from "next/link"
function Card({ name, imgUrl, href }) {
    return (
        <div className='w-[200px] h-[230px] flex justify-center bg-card'>
      <Link href={href}>
            <a>
                <h2 className='font-bold m-auto '>{name}</h2>
                <Image src={imgUrl} width={100} height={80} />
            </a>
        </Link>

        </div>
  

    )
}

export default Card