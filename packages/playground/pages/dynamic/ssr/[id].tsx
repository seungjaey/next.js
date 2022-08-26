import React from 'react'
import type { NextPage } from 'next'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const DynamicServerSideRenderingPage: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title } = props
  return (
    <div>
      {title}
    </div>
  );
}

export default DynamicServerSideRenderingPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query: { id } } = context
  return {
    props: {
      title: `Dynamic Server Side Rendering : ${id}`
    }
  }
}