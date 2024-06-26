/* eslint-disable @next/next/no-img-element */
import { AppBar, Button, Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import AuthenticationModal from '../../Authentication'
import { useRouter } from 'next/navigation'

export const Header: React.FC = (): JSX.Element => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Container maxWidth="lg">
        <AuthenticationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Stack>
            <img
              alt="gelato logo"
              height={60}
              width={60}
              src="https://order.gelatohouse.ir/2.15.5/img/9dcd0541179a7fde025e88026901a4be.png"
            />
          </Stack>
          <Stack flexDirection="row" gap={2}>
            <Stack flexDirection="row">
              <Button onClick={() => router.push('/')}>سفارش اینترنتی</Button>
              <Button onClick={() => router.push('/terms')}>قوانین سایت</Button>
            </Stack>
            <Stack>
              <Button
                onClick={() => setIsOpen(true)}
                color="primary"
                variant="contained"
              >
                ورود / عضویت
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  )
}
