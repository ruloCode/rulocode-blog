/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
// import { ExtendedRecordMap } from "notion-types"

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
// import "prismjs/themes/prism-tomorrow.css"

// used for rendering equations (optional)

// import styled from "@emotion/styled"

const _NotionRenderer = dynamic(() => import('react-notion-x').then((m) => m.NotionRenderer), {
  ssr: false,
})

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => m.Code),
)

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection),
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
)

const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false,
})

const mapPageUrl = (id: any) => {
  return 'https://www.notion.so/' + id.replace(/-/g, '')
}

const NotionRenderer = ({ recordMap }: any) => {
  return (
    <div>
      <_NotionRenderer
        recordMap={recordMap}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          nextImage: Image,
          nextLink: Link,
        }}
        mapPageUrl={mapPageUrl}
      />
    </div>
  )
}

export default NotionRenderer
