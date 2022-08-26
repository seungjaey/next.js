import React from 'react'
import type { NextPage } from 'next'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const DefaultStaticSiteGeneration: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title } = props
  return (
    <div>
      {title}
    </div>
  );
}

export default DefaultStaticSiteGeneration

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      title: 'Default Static Site Generation'
    }
  }
}