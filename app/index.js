import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import TodoStore from "./stores/TodoStore";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Main extends Component {

  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {

    const { todos } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Flux App
          </Text>
          <Icon name="reload" size={25} color="#7d92da" />
          <Icon name="plus" size={25} color="#7d92da" />
        </View>
        <ScrollView>
          {todos.map(this._renderItemComponent)}
        </ScrollView>
      </View>
    );
  }

  _renderItemComponent( { id, text, complete } ){
    const checkbox = complete ? 'checkbox-multiple-blank-circle-outline' : 'checkbox-multiple-marked-circle-outline'; 
    return (
      <View style={styles.taskBox}>
        <Text style={styles.taskText}>
          {text}
        </Text>
        <Icon name={checkbox} size={20} color="#cc0000" />
      </View>
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 25,
    backgroundColor: '#F5FCFF'
  },
  titleBox: {
    flexDirection: 'row',
    padding: 7,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#174844'
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left'
  },
  taskBox: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    padding: 7,
    borderBottomWidth: 2,
    borderColor: '#47c266'
  },
  taskText: {
    flex: 1,
    color: '#333333',
    textAlign: 'left',
    fontSize: 16,
  }
});