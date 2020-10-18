import markdownStyles from './markdown-styles.module.css'
import PortableText from '@sanity/block-content-to-react'
import { imageBuilder } from '../lib/sanity'


export default function PostBody({ content }) {
  const serializer = {
    types: {
      image: props => (
        <img
          alt={props.node.alt +'alt text'}
          src={imageBuilder.image(props.node.asset).url()}
        />
      )
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <PortableText blocks={content} className={markdownStyles.markdown} serializers={serializer}/>
    </div>
  )
}
