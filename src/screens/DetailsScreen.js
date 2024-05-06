import { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const DetailsScreen = () => {
    // Estados
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
  
    // Función para agregar una nueva tarea
    const addTask = () => {
      if (task.trim() !== '') {
        setTasks([...tasks, { id: Date.now(), text: task }]);
        setTask('');
      }
    };
    // Función para eliminar una tarea
    const deleteTask = (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId));
    };
    return(
      < >
      <View style={styles.container}>
        <Text style={styles.heading}>Lista de Tareas</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe una tarea"
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.buttonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
        {
          tasks.length == 0
          ?
          <Text style={styles.text}>No hay tareas</Text>
          :
          <Text style={styles.text}>Haga clic en la tarea para eliminarla</Text>
        }
        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.task}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginRight: 10,
    },
    addButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    list: {
      flex: 1,
    },
    task: {
      fontSize: 18,
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
      marginBottom: 10,
    },
});
  
  export default DetailsScreen;
  