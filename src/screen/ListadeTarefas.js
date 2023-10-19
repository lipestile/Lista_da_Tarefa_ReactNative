import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper'
import { FlatList } from 'react-native'

export default function ListadeTarefas() {
    const[tarefas, settarefas] = useState(['Limpar Casa', 'Pagar conta' ])
    const[inputValue, setInputValue] = useState('')
    const[editando, seteditando] = useState(false)


        function adicionartarefa() {
            let novaListadetarefas = tarefas
            novaListadetarefas.push(inputValue)
            settarefas(novaListadetarefas)
            setInputValue('')            

            // metado de expert
            // settarefas([...tarefas, inputValue])
        }

        function excluiratarefa(tarefa){
                const novaListadetarefas = tarefas.filter(item => item !== tarefa)
                settarefas(novaListadetarefas)

        }

        function Editartarefa(tarefa){
            setInputValue(tarefa)
            seteditando(true)

        }
        function handleButton(){
            if(editando){
                Editartarefa()
            }else{
                adicionartarefa()
            }
        }

  return (
    <View style={styles.container}>
        <Text variant='titleLarge' style={{fontWeight: 'bold', marginTop: 60}}>Lista de Tarefas</Text>
        <View style={styles.input}>
            <TextInput
            style={{flex: 7}}
            mode='outlined'
            label='Tarefas'
            placeholder='Adicionar o tarefa'
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            />
            <Button
                mode='contained'
                style={styles.butao}
                onPress={handleButton}
            >
                {editando ? 'Edit' : 'Add'}
            </Button>
        </View>

        <FlatList

        style={styles.list}
        data={tarefas}
        renderItem={({item})=>{
            return(
                <Card
                    style={styles.card}
                    mode='outlined'
                    >
                        <Card.Content style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.Texto}>{item}</Text>
                            <IconButton  mode='contained' onPress={() => {
                                handleEditartarefa()
                            }} icon='pen' />
                            <IconButton onPress={() => excluiratarefa(item) } iconColor='red' icon='trash-can-outline'/>
                        </Card.Content>
                    </Card>
            )
        }}        
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    Texto:{
        flex: 1,
        fontSize:20,
        fontWeight: 'bold',
    },
    input:{
        flexDirection: 'row',
        width:'95%',
        paddingTop: 10,
        gap: 5,
    },
    butao: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    list:{
        width: '95%',
        marginTop: 10
    },
    card:{
           margin: 5,
    }
})