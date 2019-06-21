import React from "react"
import styles from "./style.module.css"

const PostTitleHeader = ({ post }) => {
  const { frontmatter: {title, subtitle: a, tags} } = post

  const subtitle = 'Research suggests the feature is overhyped as an accessibility tool'

  return (
    <div className={styles.container}>
      <div className={styles.tags}>{tags.map(tag => <p key={tag}>{tag}</p>)}</div>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
    </div>
  )
}

export default PostTitleHeader
