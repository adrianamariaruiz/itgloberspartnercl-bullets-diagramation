import React, { PropsWithChildren } from 'react'
import { useListContext } from 'vtex.list-context'
import { useDevice } from 'vtex.device-detector'
import getBulletAsTSXList from './modules/bulletsAsList'

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

  console.log(bullets)
  if (false) {
    console.log(children, list, getBulletAsTSXList)
  }

  return isMobile ? (
    <div>BulletGroup Mobile</div>
  ) : (
    <div>BulletGroup Desktop</div>
  )
}

export default BulletGroup
