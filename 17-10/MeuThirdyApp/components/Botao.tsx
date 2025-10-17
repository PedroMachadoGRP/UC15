import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

export default function botao(props:{title:string,aopressionar:() =>void }) {
        return (
            <Button title={props.title} onPress={ props.aopressionar }></Button>
        )
    }

const styles = StyleSheet.create({})

