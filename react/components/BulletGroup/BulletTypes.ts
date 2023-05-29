export type BulletsSchema = Array<{
  image: string
  titleBullet: string
  link?: LinkProps
}>

export interface LinkProps {
  url: string
  atributeNoFollow?: boolean
  attributeTitle?: string
  openNewTab?: boolean
  newTab?: boolean
}
