import { ReactNode } from 'react'

import Container from 'components/container'

const ContentSection = ({
  eyebrow,
  lead,
  children,
  id,
  title
}: {
  eyebrow?: ReactNode
  lead: ReactNode
  children: ReactNode
  id: string
  title: string
}) => (
  <Container
    id={id}
    className="flex flex-col items-center gap-4 space-y-8 scroll-mt-24"
  >
    <div className="flex flex-col items-center gap-4">
      {eyebrow}
      <h2 className="text-5xl font-extrabold tracking-tight text-center gradient-text">
        {title}
      </h2>
    </div>
    {!!lead && (
      <p className="max-w-xl text-2xl font-extrabold text-center">{lead}</p>
    )}
    {children}
  </Container>
)

export default ContentSection
