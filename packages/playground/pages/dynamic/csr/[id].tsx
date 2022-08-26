import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const DynamicClientSideRendingPage: NextPage = () => {
  const { isReady, query: { id } } = useRouter()
  if (!isReady) {
    return null;
  }
  return (
    <div>
      {`Dynamic Client Side Rendering : ${id}`}
    </div>
  );
}

export default DynamicClientSideRendingPage