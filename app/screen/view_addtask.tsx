import MainLayout from '@/components/mainlayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../navigation/stack/navigation';

type PropsType = NativeStackScreenProps<RootStackParamList, "View_addtask">;

const View_addtask = ({ navigation }: PropsType) => {
  return (
    <MainLayout>
        <View style= {{flexDirection: "row", backgroundColor: "#4b3780", paddingVertical: 20}}>
         <TouchableOpacity style={{ alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 24, color: "#fff" }}>×</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16, color: "#fff" }}>Add New Task</Text>
       </View>
      <View style={{ padding: 16 }}> 
        <Text style={{ fontSize: 16, marginBottom: 8 }}>Task Title</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginBottom: 16 }}
          placeholder="Task Title"
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 8 }}>Category</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#e0e0e0', borderRadius: 20, padding: 8, marginRight: 8 }}>
                <Text>📄</Text>
              </View>
              <View style={{ backgroundColor: '#e0e0e0', borderRadius: 20, padding: 8, marginRight: 8 }}>
                <Text>🏆</Text>
              </View>
              <View style={{ backgroundColor: '#e0e0e0', borderRadius: 20, padding: 8 }}>
                <Text>📅</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 8 }}>Date</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, width: 120 }}
              value="07/27/2025"
            />
          </View>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 8 }}>Time</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, width: 120 }}
              value="09:08 PM"
            />
          </View>
        </View>

        <Text style={{ fontSize: 16, marginBottom: 8 }}>Notes</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, height: 100, textAlignVertical: 'top' }}
          placeholder="Notes"
          multiline
        />

        <TouchableOpacity style={{ backgroundColor: '#6B46C1', borderRadius: 24, padding: 12, alignItems: 'center', marginTop: 16 }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Save</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default View_addtask;