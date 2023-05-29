import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'

import { getBulletAsTSXList } from './modules/bulletsAsList'
import { BulletsSchema } from './BulletTypes'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children,
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice()
  const { list } = useListContext() || []
  const CSS_HANDLES = ['bullet__container']
  const handles = useCssHandles(CSS_HANDLES)

  const bulletsContent = getBulletAsTSXList(bullets)

  const newListContextValue = list.concat(bulletsContent)

  return (
    <ListContextProvider list={newListContextValue}>
      {isMobile ? (
        <div className={handles.bullet__container}>{bulletsContent}</div>
      ) : (
        children
      )}
    </ListContextProvider>
  )
}

export default BulletGroup
