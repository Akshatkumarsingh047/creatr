import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <div>
     <h1>Hello next </h1>
     <Button variant={"primary"}>hello js dev</Button>
     <Badge variant="destructive" size="xl">Badge</Badge>
    </div>
  )
}

export default page
