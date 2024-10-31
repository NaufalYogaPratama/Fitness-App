import {View, Text } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"

export default function Home() {
    return(
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
            <StatusBar style="dark" />

            /*punchline and avatar
        </SafeAreaView>
    )
}