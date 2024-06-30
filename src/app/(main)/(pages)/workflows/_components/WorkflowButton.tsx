import WorkflowForm from '@/components/forms/WorkflowForm'
import CustomModal from '@/components/global/CustomModal'
import { useModal } from '@/providers/ModalProvider'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {
    const { setOpen, setClose } = useModal()

    const handleClick = () => {
        setOpen(
          <CustomModal
            title="Create a Workflow Automation"
            subheading="Workflows are a powerfull that help you automate tasks."
          >
            <WorkflowForm />
          </CustomModal>
        )
      }

  return (
    <div>WorkflowButton</div>
  )
}

export default WorkflowButton