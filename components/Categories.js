import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{paddingHorizontal:15, paddingTop:10,}} horizontal showsVerticalScrollIndicator={false}>
        {/* CategoryCard */}
        <CategoryCard/>
      <Text>Categories</Text>
    </ScrollView>
  )
}

export default Categories