import React from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'

const DefaultClientSideRendingPage: NextPage = () => {
  const { isReady } = useRouter()
  if (!isReady) {
    return null;
  }
  return (
    <div>
      Default Client Side Rendering
    </div>
  );
}

export default DefaultClientSideRendingPage