import { InfoCircleOutlined } from '@ant-design/icons'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  staticData: {
    name: "About",
    icon: <InfoCircleOutlined></InfoCircleOutlined>,
  }
})

function RouteComponent() {
  return <div>Hello "/about"!</div>
}
