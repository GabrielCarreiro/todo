import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FiCircle, FiCheckCircle, FiDelete } from 'react-icons/fi'
import {Link} from 'react-router-dom';
import { Form, ErrorMenssage, Tasks, Header } from './style.js';
import logoImg from '../../assets/logo.png'

const Tarefas = () => {
    //Definindo o estado dos componentes
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [total, setTotal] = useState('');
    

    //Função que busca na api os "Tasks"
    const loadTasks = async () => {
        try {
            const response = await api.get('tarefas')
            setTasks(response.data);

        } catch (error) {
            console.log('loadTasks', error)
        }
    };

    //Renderiza os Tasks toda vez que a pagina é carregada
    useEffect(() => {
        loadTasks();
    }, [])

    async function handleAddTask(e) {
        e.preventDefault();

        if (newTask === "") {
            setErrorMessage('Digite a tarefa a ser adicionada');
            resetErrorMessage();
            return;
        }

        const params = {
            descricao: newTask,
            concluida: false
        };

        try {
            await api.post('tarefas', params);
            loadTasks();
            setNewTask('');
        } catch (error) {
            console.log('handleAddTask', error);
        }
    }

    function resetErrorMessage() {
        setTimeout(() => {
            setErrorMessage('');
        }, 6000);
    }

    const handleTask = async (task) => {
        const params = {
            ...task, concluido: !task.concluido,
        }

        await api.put(`tarefas/${task.id}`, params)

        loadTasks();
    };

    const removeTask = async (task) => {
        
        await api.delete(`tarefas/${task.id}`)

        loadTasks();
    };

    return (
        <>
            <Header>
                <img src={logoImg}alt="Todo"></img>
            
                <ul>
                    <li>
                        <Link to="/">
                            Dashbord
                        </Link>
                    </li>
                    <li>
                        <Link to="/tarefas">
                            Tarefas
                        </Link>
                    </li>
                </ul>
            </Header>

            <h1> Lista de Tarefas </h1>

            <Form onSubmit={handleAddTask}>
                <input value={newTask} onChange={e => setNewTask(e.target.value)} type="text" placeholder="Digite a nova tarefa" />
                <button type="submit"> Criar</button>
            </Form>

            {errorMessage &&
                <ErrorMenssage> {errorMessage}</ErrorMenssage>
            }

            <Tasks>
                {tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <strong> {task.descricao}</strong>
                            <span>
                                {task.concluido ? (
                                    <>
                                    <FiDelete size={22} onClick={()=> removeTask(task)} style={{marginRight:10}}/>
                                    <FiCheckCircle size={22} onClick={() => handleTask(task)} />
                                </>
                                ) : (
                                    <FiCircle size={22} onClick={() => handleTask(task)} />
                                )}
                            </span>
                        </div>
                    )
                })}
            </Tasks>
        </>
    )
}

export default Tarefas;