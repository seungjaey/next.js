import React from 'react'
import type { NextPage } from 'next'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'

const MobileDynamicStaticSiteGeneration: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title } = props
  return (
    <div>
      {title}
    </div>
  );
}

export default MobileDynamicStaticSiteGeneration

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: '1' }
      }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      title: 'Mobile Dynamic Static Site Generation'
    }
  }
}