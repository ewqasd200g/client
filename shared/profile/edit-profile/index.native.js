// @flow
import React from 'react'
import {Button, Input, StandardScreen} from '../../common-adapters'
import {globalMargins} from '../../styles'

import type {Props} from '.'

const EditProfileRender = (props: Props) => (
  <StandardScreen style={styleContainer} onClose={props.onBack}>
    <Input
      autoCorrect={true}
      autoFocus={true}
      style={styleInput}
      floatingHintTextOverride='Full name'
      hintText='Full name'
      value={props.fullname}
      onEnterKeyDown={props.onSubmit}
      onChangeText={fullname => props.onFullnameChange(fullname)} />
    <Input
      autoCorrect={true}
      style={styleInput}
      floatingHintTextOverride='Location'
      hintText='Location'
      value={props.location}
      onEnterKeyDown={props.onSubmit}
      onChangeText={location => props.onLocationChange(location)} />
    <Input
      autoCorrect={true}
      style={styleInput}
      floatingHintTextOverride='Bio'
      hintText='Bio'
      value={props.bio}
      multiline={true}
      rowsMin={3}
      errorText={props.bioLengthLeft <= 5 ? props.bioLengthLeft + ' chars left' : ''}
      onEnterKeyDown={props.onSubmit}
      onChangeText={bio => props.onBioChange(bio)} />
    <Button
      style={styleButton}
      type='Primary'
      fullWidth={true}
      onClick={props.onSubmit}
      label='Save' />
  </StandardScreen>
)

const styleContainer = {
  marginTop: 0,
}

const styleInput = {
  marginTop: globalMargins.medium,
}

const styleButton = {
  marginTop: globalMargins.medium,
}

export default EditProfileRender