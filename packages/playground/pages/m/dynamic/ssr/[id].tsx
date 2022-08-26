import React from 'react'
import type { NextPage } from 'next'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const MobileDynamicServerSideRenderingPage: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title } = props
  return (
    <div>
      {title}
    </div>
  );
}

export default MobileDynamicServerSideRenderingPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query: { id } } = context
  return {
    props: {
      title: `Mobile Dynamic Server Side Rendering : ${id}`
    }
  }
}