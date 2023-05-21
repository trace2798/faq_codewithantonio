// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Author = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Author'
  title: string
  description?: string | undefined
  avatar: string
  twitter: string
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
}

export type CheatSheets = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'CheatSheets'
  title: string
  description?: string | undefined
  by?: string | undefined
  date: IsoDateTimeString
  published: boolean
  featured: boolean
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
}

export type Guide = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Guide'
  title: string
  description?: string | undefined
  date: IsoDateTimeString
  by?: string | undefined
  published: boolean
  featured: boolean
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
}

export type Page = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Page'
  title: string
  description?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Author | CheatSheets | Guide | Page
export type DocumentTypeNames = 'Author' | 'CheatSheets' | 'Guide' | 'Page'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allPages: Page[]
  allGuides: Guide[]
  allAuthors: Author[]
  allCheatSheets: CheatSheets[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Author: Author
  CheatSheets: CheatSheets
  Guide: Guide
  Page: Page
}

export type NestedTypeMap = {

}

 