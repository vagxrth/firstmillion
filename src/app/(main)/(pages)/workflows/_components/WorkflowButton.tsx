'use client'
import WorkflowForm from '@/components/forms/WorkflowForm'
import CustomModal from '@/components/global/CustomModal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/ModalProvider'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {
    const { setOpen, setClose } = useModal();
    // const { credits } = useBilling()

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
    <Button
      size={'icon'}
      onClick={handleClick}
    >
      <Plus />
    </Button>
  )
}

export default WorkflowButton