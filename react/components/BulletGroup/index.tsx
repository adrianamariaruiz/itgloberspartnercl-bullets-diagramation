import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useDevice } from 'vtex.device-detector'

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

  const bulletsContent = getBulletAsTSXList(bullets)

  const newListContextValue = list.concat(bulletsContent)

  return (
    <ListContextProvider list={newListContextValue}>
      {isMobile ? <div>{bulletsContent}</div> : children}
    </ListContextProvider>
  )
}

export default BulletGroup
