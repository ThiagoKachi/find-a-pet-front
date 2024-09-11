/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SigninImport } from './routes/signin'
import { Route as PetEditImport } from './routes/pet-edit'
import { Route as OrgsImport } from './routes/orgs'
import { Route as OrgEditImport } from './routes/org-edit'
import { Route as LoginImport } from './routes/login'
import { Route as CreatePetImport } from './routes/create-pet'
import { Route as IndexImport } from './routes/index'
import { Route as PetEditIdImport } from './routes/pet-edit/$id'
import { Route as PetDetailsIdImport } from './routes/pet-details/$id'
import { Route as OrgDetailsIdImport } from './routes/org-details/$id'

// Create/Update Routes

const SigninRoute = SigninImport.update({
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any)

const PetEditRoute = PetEditImport.update({
  path: '/pet-edit',
  getParentRoute: () => rootRoute,
} as any)

const OrgsRoute = OrgsImport.update({
  path: '/orgs',
  getParentRoute: () => rootRoute,
} as any)

const OrgEditRoute = OrgEditImport.update({
  path: '/org-edit',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const CreatePetRoute = CreatePetImport.update({
  path: '/create-pet',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PetEditIdRoute = PetEditIdImport.update({
  path: '/$id',
  getParentRoute: () => PetEditRoute,
} as any)

const PetDetailsIdRoute = PetDetailsIdImport.update({
  path: '/pet-details/$id',
  getParentRoute: () => rootRoute,
} as any)

const OrgDetailsIdRoute = OrgDetailsIdImport.update({
  path: '/org-details/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/create-pet': {
      id: '/create-pet'
      path: '/create-pet'
      fullPath: '/create-pet'
      preLoaderRoute: typeof CreatePetImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/org-edit': {
      id: '/org-edit'
      path: '/org-edit'
      fullPath: '/org-edit'
      preLoaderRoute: typeof OrgEditImport
      parentRoute: typeof rootRoute
    }
    '/orgs': {
      id: '/orgs'
      path: '/orgs'
      fullPath: '/orgs'
      preLoaderRoute: typeof OrgsImport
      parentRoute: typeof rootRoute
    }
    '/pet-edit': {
      id: '/pet-edit'
      path: '/pet-edit'
      fullPath: '/pet-edit'
      preLoaderRoute: typeof PetEditImport
      parentRoute: typeof rootRoute
    }
    '/signin': {
      id: '/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninImport
      parentRoute: typeof rootRoute
    }
    '/org-details/$id': {
      id: '/org-details/$id'
      path: '/org-details/$id'
      fullPath: '/org-details/$id'
      preLoaderRoute: typeof OrgDetailsIdImport
      parentRoute: typeof rootRoute
    }
    '/pet-details/$id': {
      id: '/pet-details/$id'
      path: '/pet-details/$id'
      fullPath: '/pet-details/$id'
      preLoaderRoute: typeof PetDetailsIdImport
      parentRoute: typeof rootRoute
    }
    '/pet-edit/$id': {
      id: '/pet-edit/$id'
      path: '/$id'
      fullPath: '/pet-edit/$id'
      preLoaderRoute: typeof PetEditIdImport
      parentRoute: typeof PetEditImport
    }
  }
}

// Create and export the route tree

interface PetEditRouteChildren {
  PetEditIdRoute: typeof PetEditIdRoute
}

const PetEditRouteChildren: PetEditRouteChildren = {
  PetEditIdRoute: PetEditIdRoute,
}

const PetEditRouteWithChildren =
  PetEditRoute._addFileChildren(PetEditRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/create-pet': typeof CreatePetRoute
  '/login': typeof LoginRoute
  '/org-edit': typeof OrgEditRoute
  '/orgs': typeof OrgsRoute
  '/pet-edit': typeof PetEditRouteWithChildren
  '/signin': typeof SigninRoute
  '/org-details/$id': typeof OrgDetailsIdRoute
  '/pet-details/$id': typeof PetDetailsIdRoute
  '/pet-edit/$id': typeof PetEditIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/create-pet': typeof CreatePetRoute
  '/login': typeof LoginRoute
  '/org-edit': typeof OrgEditRoute
  '/orgs': typeof OrgsRoute
  '/pet-edit': typeof PetEditRouteWithChildren
  '/signin': typeof SigninRoute
  '/org-details/$id': typeof OrgDetailsIdRoute
  '/pet-details/$id': typeof PetDetailsIdRoute
  '/pet-edit/$id': typeof PetEditIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/create-pet': typeof CreatePetRoute
  '/login': typeof LoginRoute
  '/org-edit': typeof OrgEditRoute
  '/orgs': typeof OrgsRoute
  '/pet-edit': typeof PetEditRouteWithChildren
  '/signin': typeof SigninRoute
  '/org-details/$id': typeof OrgDetailsIdRoute
  '/pet-details/$id': typeof PetDetailsIdRoute
  '/pet-edit/$id': typeof PetEditIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/create-pet'
    | '/login'
    | '/org-edit'
    | '/orgs'
    | '/pet-edit'
    | '/signin'
    | '/org-details/$id'
    | '/pet-details/$id'
    | '/pet-edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/create-pet'
    | '/login'
    | '/org-edit'
    | '/orgs'
    | '/pet-edit'
    | '/signin'
    | '/org-details/$id'
    | '/pet-details/$id'
    | '/pet-edit/$id'
  id:
    | '__root__'
    | '/'
    | '/create-pet'
    | '/login'
    | '/org-edit'
    | '/orgs'
    | '/pet-edit'
    | '/signin'
    | '/org-details/$id'
    | '/pet-details/$id'
    | '/pet-edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CreatePetRoute: typeof CreatePetRoute
  LoginRoute: typeof LoginRoute
  OrgEditRoute: typeof OrgEditRoute
  OrgsRoute: typeof OrgsRoute
  PetEditRoute: typeof PetEditRouteWithChildren
  SigninRoute: typeof SigninRoute
  OrgDetailsIdRoute: typeof OrgDetailsIdRoute
  PetDetailsIdRoute: typeof PetDetailsIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CreatePetRoute: CreatePetRoute,
  LoginRoute: LoginRoute,
  OrgEditRoute: OrgEditRoute,
  OrgsRoute: OrgsRoute,
  PetEditRoute: PetEditRouteWithChildren,
  SigninRoute: SigninRoute,
  OrgDetailsIdRoute: OrgDetailsIdRoute,
  PetDetailsIdRoute: PetDetailsIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/create-pet",
        "/login",
        "/org-edit",
        "/orgs",
        "/pet-edit",
        "/signin",
        "/org-details/$id",
        "/pet-details/$id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/create-pet": {
      "filePath": "create-pet.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/org-edit": {
      "filePath": "org-edit.tsx"
    },
    "/orgs": {
      "filePath": "orgs.tsx"
    },
    "/pet-edit": {
      "filePath": "pet-edit.tsx",
      "children": [
        "/pet-edit/$id"
      ]
    },
    "/signin": {
      "filePath": "signin.tsx"
    },
    "/org-details/$id": {
      "filePath": "org-details/$id.tsx"
    },
    "/pet-details/$id": {
      "filePath": "pet-details/$id.tsx"
    },
    "/pet-edit/$id": {
      "filePath": "pet-edit/$id.tsx",
      "parent": "/pet-edit"
    }
  }
}
ROUTE_MANIFEST_END */
