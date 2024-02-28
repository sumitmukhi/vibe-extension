import { useEffect, useState } from 'react'
// import { storage } from 'webextension-polyfill'
import { getCurrentTab } from '../../helpers/tabs'

export const Counter = () => {
  const [value, setValue] = useState<any | null>(null)

  useEffect(() => {
    const readBackgroundMessage = async () => {
      const tab = await getCurrentTab()
      const tabURL = tab.url
      setValue(tabURL)

      // if (tabId) {
      //   const data = await storage.local.get(tabId.toString())
      //   const currentValue = data?.[tabId] ?? 0

      //   setValue(currentValue)
      // }
    }

    readBackgroundMessage()
  }, [])

  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     fontSize: '24px',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}
    // >
    //   Clicks: {value}
    // </div>
    <p> The current website url is  :  {value}</p>
  )
}
