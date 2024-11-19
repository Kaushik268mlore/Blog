import { Entry } from '@keystatic/core/reader'
import keystaticConfig from '../keystatic.config'

type Showcase = Entry<(typeof keystaticConfig)['collections']['authors']>['showcase']
type ShowcaseLinkProps = Extract<Showcase[number], { discriminant: 'link' }>['value']

export function ShowcaseLink({ url, label }: ShowcaseLinkProps) {
  if(url)return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}
