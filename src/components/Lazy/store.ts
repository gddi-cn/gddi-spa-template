import { atom } from 'jotai'
import React from 'react'

export const pageFallbackAtom = atom<NonNullable<React.ReactNode> | null>(null)
