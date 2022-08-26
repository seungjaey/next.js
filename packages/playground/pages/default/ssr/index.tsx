import React from 'react'
import type { NextPage } from 'next'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const DefaultServerSideRenderingPage: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title } = props
  return (
    <div>
      {title}
    </div>
  );
}

export default DefaultServerSideRenderingPage

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      title: 'Default Server Side Rendering'
    }
  }
}