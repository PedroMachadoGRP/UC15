import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Info(props:{userId:string, taskName:string, isCompleted:string}) {
  return (
    <View>
      <Text>UserId: {props.userId}</Text>
      <Text>TaskName: {props.taskName}</Text>
      <Text>Completed: {props.isCompleted}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
    fontSize: 30,
    marginBottom: 13,
  },
})