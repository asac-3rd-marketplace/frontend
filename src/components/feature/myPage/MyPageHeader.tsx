import Link from 'next/link'
import React from 'react'

import Header from '@/components/common/header'
import { Bag } from '@/components/icons'

export default function MyPageHeader() {
  return (
    <div className="w-full h-full overflow-hidden text-white bg-brand-primary-500 no-scrollbar">
      <Header
        left={<div> </div>}
        center={<span className="text-center">마이마켓</span>}
        right={
          <button className="ml-auto">
            <Link href={`/cart`}>
              <Bag width={'1.5rem'} height={'1.5rem'} fill="transparent" />
            </Link>
          </button>
        }
      />
    </div>
  )
}
