import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>LINCOMDOCS</span>,
  project: {
    link: 'https://github.com/adityadees/lincomdocs',
  },
  docsRepositoryBase: 'https://github.com/adityadees/lincomdocs',
  footer: {
    text: 'LINCOMDOCS - LINUX COMMAND LINE DOCS CHEAT SHEET',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – LINCOMDOCS'
    }
  }
}

export default config
