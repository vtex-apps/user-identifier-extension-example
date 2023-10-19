import type { ReactNode } from 'react'
import React, { useState, useCallback, useEffect } from 'react'

interface OptionsRenderInput {
  value: string
  onChange: (newValue: string) => void
  placeholder: string
}

type HandleSubmit = () => Promise<string>

interface Props {
  renderInput: (options: OptionsRenderInput) => ReactNode
  identifierPlaceholder: string
  registerSubmitter: (handleSubmit: HandleSubmit) => void
}

const ComponentName = ({ renderInput, registerSubmitter }: Props) => {
  const [cpf, setCpf] = useState('')
  const onChangeInput = useCallback(e => setCpf(e.target.value), [setCpf])

  const onSubmit = useCallback(async () => {
    const email = `${cpf}@email.com`

    return email
  }, [cpf])

  useEffect(() => {
    registerSubmitter(onSubmit)
  }, [registerSubmitter, onSubmit])

  return (
    <>
      <div>This is a custom identifier (CPF) input</div>
      {renderInput({
        value: cpf,
        onChange: onChangeInput,
        placeholder: 'Your CPF here',
      })}
    </>
  )
}

export default ComponentName
